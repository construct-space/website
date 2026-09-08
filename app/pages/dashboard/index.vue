<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const { user } = useAuth()
const api = useApi()

// Get first name for greeting
const firstName = computed(() => user.value?.first_name || 'User')

// Fetch company data (scoped by JWT's company_id)
interface Company {
  id: number
  name: string
  invite_code: string
}

interface User {
  id: number
  first_name: string
  last_name: string
}

interface Project {
  id: number
  name: string
}

interface Subscription {
  id: number
  status: string
  quantity: number
  plan?: {
    name: string
    slug: string
  }
}

// API responses
interface UsersResponse {
  data: User[]
  total: number
}

interface ProjectsResponse {
  data: Project[]
  total: number
}

// Fetch company by ID from user's company_id
const { data: companyData } = await useAsyncData('company', async () => {
  if (!user.value?.company_id) return null
  try {
    return await api.get<Company>(`/api/companies/${user.value.company_id}`)
  } catch {
    return null
  }
})

// Fetch team members (scoped by company_id in JWT)
const { data: usersData } = await useAsyncData('users', async () => {
  try {
    return await api.get<UsersResponse>('/api/users')
  } catch {
    return { data: [], total: 0 }
  }
})

// Fetch projects (scoped by company_id in JWT)
const { data: projectsData } = await useAsyncData('projects', async () => {
  try {
    return await api.get<ProjectsResponse>('/api/projects')
  } catch {
    return { data: [], total: 0 }
  }
})

// Fetch subscription
const { data: subscription } = await useAsyncData('subscription', async () => {
  try {
    return await api.get<Subscription>('/api/billing/subscription')
  } catch {
    return null
  }
})

// Computed values
const company = computed(() => companyData.value)
const companyName = computed(() => company.value?.name || 'ACCOUNT')
const inviteCode = computed(() => company.value?.invite_code || '--------')
const teamMembers = computed(() => usersData.value?.total || 0)
const totalProjects = computed(() => projectsData.value?.total || 0)
const currentPlan = computed(() => subscription.value?.plan?.name || 'Trial')
const subscriptionStatus = computed(() => subscription.value?.status || 'trialing')
</script>

<template>
  <div class="h-full flex items-center justify-center px-6 py-8 lg:py-0">
    <div class="w-full max-w-4xl">
      <!-- Header Row - aligned with left column on desktop, full width on mobile -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
        <div class="text-left lg:text-right">
          <h1 class="text-2xl">
            <span class="text-app-muted">CONSTRUCT:</span>
            <span class="font-bold text-app">{{ companyName.toUpperCase() }}</span>
          </h1>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- LEFT: Stats -->
        <div class="space-y-8 order-2 lg:order-1">
          <!-- Stats -->
          <div class="text-left lg:text-right space-y-2">
            <p class="text-xl">
              <span class="text-app-muted">PLAN:</span>
              <span class="font-bold text-app">{{ currentPlan.toUpperCase() }}</span>
            </p>
            <p class="text-xl">
              <span class="text-app-muted">TEAM:</span>
              <span class="font-bold text-app">{{ teamMembers }}</span>
            </p>
            <p class="text-xl">
              <span class="text-app-muted">PROJECTS:</span>
              <span class="font-bold text-app">{{ totalProjects }}</span>
            </p>
            <p class="text-xl">
              <span class="text-app-muted">INVITE:</span>
              <span class="font-bold font-mono text-app">{{ inviteCode }}</span>
            </p>
          </div>

          <!-- Links -->
          <div class="text-left lg:text-right space-y-2">
            <p class="text-xs text-app-muted uppercase tracking-wider">
              Manage
            </p>
            <NuxtLink
              to="/dashboard/teams"
              class="block text-sm text-app hover:text-app-accent transition-colors tracking-wider font-medium"
            >
              TEAM
            </NuxtLink>
            <NuxtLink
              to="/dashboard/billing"
              class="block text-sm text-app hover:text-app-accent transition-colors tracking-wider font-medium"
            >
              BILLING
            </NuxtLink>
          </div>
        </div>

        <!-- RIGHT: Welcome & Actions -->
        <div class="space-y-6 order-1 lg:order-2">
          <!-- Welcome -->
          <div>
            <p class="text-xs text-app-muted tracking-wider mb-1">
              WELCOME BACK,
            </p>
            <h2 class="text-4xl font-bold text-app">
              {{ firstName }}
            </h2>
          </div>

          <!-- Subscription Status -->
          <div
            v-if="subscriptionStatus === 'trialing'"
            class="flex items-center gap-2"
          >
            <span class="px-2 py-1 rounded-full bg-amber-500/20 text-amber-500 text-xs font-medium">TRIAL</span>
            <span class="text-sm text-app-muted">Your trial is active</span>
          </div>

          <!-- Quick Actions -->
          <div class="space-y-4">
            <p class="text-xs text-app-muted uppercase tracking-wider">
              Quick Actions
            </p>
            <div class="flex flex-wrap gap-3">
              <NuxtLink
                to="/dashboard/teams"
                class="flex items-center gap-2 px-4 py-2 rounded-md bg-white/50 dark:bg-white/10 text-app text-sm hover:bg-app-accent hover:text-white transition-colors"
              >
                <UIcon
                  name="i-lucide-user-plus"
                  class="size-4"
                />
                INVITE MEMBER
              </NuxtLink>
              <NuxtLink
                to="/dashboard/billing"
                class="flex items-center gap-2 px-4 py-2 rounded-md bg-white/50 dark:bg-white/10 text-app text-sm hover:bg-app-accent hover:text-white transition-colors"
              >
                <UIcon
                  name="i-lucide-credit-card"
                  class="size-4"
                />
                BILLING
              </NuxtLink>
              <NuxtLink
                to="/download"
                class="flex items-center gap-2 px-4 py-2 rounded-md bg-white/50 dark:bg-white/10 text-app text-sm hover:bg-app-accent hover:text-white transition-colors"
              >
                <UIcon
                  name="i-lucide-download"
                  class="size-4"
                />
                DOWNLOAD APP
              </NuxtLink>
            </div>
          </div>

          <!-- Upgrade Banner (if on trial) -->
          <div
            v-if="subscriptionStatus === 'trialing'"
            class="pt-4 space-y-3"
          >
            <p class="text-xs text-app-accent uppercase tracking-wider">
              Upgrade
            </p>
            <p class="text-sm text-app-muted">
              Subscribe to continue after your trial ends
            </p>
            <NuxtLink
              to="/dashboard/billing"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-app-accent text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <UIcon
                name="i-lucide-crown"
                class="size-4"
              />
              SUBSCRIBE NOW
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
