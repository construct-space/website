<script setup lang="ts">
const { user, userName, logout } = useAuth()
const route = useRoute()

const userMenuItems = computed(() => [
  [{
    label: user.value?.email || 'User',
    disabled: true
  }],
  [{
    label: 'Dashboard',
    icon: 'i-lucide-layout-dashboard',
    to: '/dashboard'
  }],
  [{
    label: 'Account Settings',
    icon: 'i-lucide-settings',
    to: '/dashboard/account'
  }],
  [{
    label: 'Sign Out',
    icon: 'i-lucide-log-out',
    click: logout
  }]
])

// Documentation navigation structure
const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Installation', path: '/dashboard/docs/getting-started/installation' },
      { title: 'Quick Start', path: '/dashboard/docs/getting-started/quick-start' }
    ]
  },
  {
    title: 'Spaces',
    items: [
      { title: 'UI Designer', path: '/dashboard/docs/spaces/ui-designer' },
      { title: 'Code Editor', path: '/dashboard/docs/spaces/code' },
      { title: 'Git', path: '/dashboard/docs/spaces/git' },
      { title: 'Terminal', path: '/dashboard/docs/spaces/terminal' },
      { title: 'AI Assistant', path: '/dashboard/docs/spaces/ai-assistant' },
      { title: 'Tasks', path: '/dashboard/docs/spaces/tasks' },
      { title: 'Notes', path: '/dashboard/docs/spaces/notes' },
      { title: 'Chat', path: '/dashboard/docs/spaces/chat' },
      { title: 'Architect', path: '/dashboard/docs/spaces/architect' }
    ]
  },
  {
    title: 'AI Agents',
    items: [
      { title: 'Overview', path: '/dashboard/docs/agents' },
      { title: 'Conductor', path: '/dashboard/docs/agents/conductor' },
      { title: 'Code', path: '/dashboard/docs/agents/code' },
      { title: 'Design', path: '/dashboard/docs/agents/design' },
      { title: 'Kanban', path: '/dashboard/docs/agents/kanban' },
      { title: 'Git', path: '/dashboard/docs/agents/git' },
      { title: 'Planner', path: '/dashboard/docs/agents/planner' },
      { title: 'Explorer', path: '/dashboard/docs/agents/explorer' },
      { title: 'Chat', path: '/dashboard/docs/agents/chat' },
      { title: 'Calendar', path: '/dashboard/docs/agents/calendar' },
      { title: 'Media', path: '/dashboard/docs/agents/media' },
      { title: 'Custom Agents', path: '/dashboard/docs/agents/custom' }
    ]
  },
  {
    title: 'Skills',
    items: [
      { title: 'Overview', path: '/dashboard/docs/skills' },
      { title: 'Cost Tracker', path: '/dashboard/docs/skills/cost-tracker' },
      { title: 'Approval Guard', path: '/dashboard/docs/skills/approval-guard' },
      { title: 'Smart Router', path: '/dashboard/docs/skills/smart-router' },
      { title: 'Secret Scanner', path: '/dashboard/docs/skills/secret-scanner' },
      { title: 'Delete Guard', path: '/dashboard/docs/skills/delete-guard' },
      { title: 'Rate Limiter', path: '/dashboard/docs/skills/rate-limiter' },
      { title: 'Session Summary', path: '/dashboard/docs/skills/session-summary' },
      { title: 'Auto Commit', path: '/dashboard/docs/skills/auto-commit' },
      { title: 'Custom Skills', path: '/dashboard/docs/skills/custom' }
    ]
  }
]

// Check if link is active
function isActiveLink(path: string): boolean {
  return route.path === path || route.path.startsWith(path + '/')
}

const sidebarOpen = ref(false)

// Close sidebar on route change
watch(() => route.path, () => {
  sidebarOpen.value = false
})
</script>

<template>
  <div class="min-h-screen bg-app-canvas">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 h-16 bg-app border-b border-app">
      <div class="h-full px-6 flex items-center justify-between">
        <!-- Left: Logo + Mobile Menu -->
        <div class="flex items-center gap-4">
          <button
            class="lg:hidden p-2 -ml-2 rounded-lg hover:bg-white/10"
            @click="sidebarOpen = !sidebarOpen"
          >
            <UIcon
              name="i-lucide-menu"
              class="size-5"
            />
          </button>
          <NuxtLink
            to="/"
            class="flex items-center"
          >
            <AppLogo />
          </NuxtLink>
          <span class="hidden sm:inline text-app-muted">/</span>
          <NuxtLink
            to="/dashboard/docs"
            class="hidden sm:inline text-sm font-medium text-app-muted hover:text-app"
          >
            Documentation
          </NuxtLink>
        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-4">
          <UColorModeButton />

          <UDropdownMenu :items="userMenuItems">
            <UButton
              color="neutral"
              variant="ghost"
              class="gap-2"
            >
              <UAvatar
                :alt="userName || 'U'"
                size="xs"
              />
              <span class="hidden sm:inline text-sm">{{ userName || 'Account' }}</span>
              <UIcon
                name="i-lucide-chevron-down"
                class="size-4"
              />
            </UButton>
          </UDropdownMenu>
        </div>
      </div>
    </header>

    <!-- Layout -->
    <div class="flex pt-16">
      <!-- Sidebar -->
      <aside
        :class="[
          'fixed left-0 top-16 bottom-0 z-40 w-64 bg-app border-r border-app overflow-y-auto',
          'transition-transform lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        ]"
      >
        <nav class="p-4 space-y-6">
          <!-- Back to Dashboard -->
          <NuxtLink
            to="/dashboard"
            class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-app-muted hover:text-app hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
          >
            <UIcon
              name="i-lucide-arrow-left"
              class="size-4"
            />
            Back to Dashboard
          </NuxtLink>

          <!-- Doc Navigation -->
          <div
            v-for="section in navigation"
            :key="section.title"
          >
            <h3 class="uppercase tracking-wider text-xs font-semibold text-app-muted mb-2 px-3">
              {{ section.title }}
            </h3>
            <ul class="space-y-0.5">
              <li
                v-for="item in section.items"
                :key="item.path"
              >
                <NuxtLink
                  :to="item.path"
                  class="block px-3 py-1.5 rounded-lg text-sm transition-colors"
                  :class="[
                    isActiveLink(item.path)
                      ? 'bg-app-accent/20 text-app-accent'
                      : 'text-app-muted hover:text-app hover:bg-white/50 dark:hover:bg-white/10'
                  ]"
                  @click="sidebarOpen = false"
                >
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Overlay for mobile -->
      <div
        v-if="sidebarOpen"
        class="fixed inset-0 z-30 bg-black/50 lg:hidden"
        @click="sidebarOpen = false"
      />

      <!-- Main Content -->
      <main class="flex-1 lg:ml-64 p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
