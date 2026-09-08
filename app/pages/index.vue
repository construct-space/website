<script setup lang="ts">
const api = useApi()

const spaces = [
  { id: 'ui-designer', name: 'UI Designer', description: 'Vector design editor', icon: 'lucide:component' },
  { id: 'code', name: 'Code', description: 'Monaco-powered editor', icon: 'lucide:code' },
  { id: 'git', name: 'Git', description: 'Version control', icon: 'lucide:git-branch' },
  { id: 'terminal', name: 'Terminal', description: 'Command line', icon: 'lucide:terminal' },
  { id: 'ai', name: 'AI Assistant', description: 'Context-aware AI', icon: 'lucide:sparkles' },
  { id: 'tasks', name: 'Tasks', description: 'Kanban boards', icon: 'lucide:kanban' },
  { id: 'notes', name: 'Notes', description: 'Quick snippets', icon: 'lucide:sticky-note' },
  { id: 'chat', name: 'Chat', description: 'Team communication', icon: 'lucide:messages-square' },
  { id: 'architect', name: 'Architect', description: 'AI scaffolding', icon: 'lucide:compass' }
]

// Waitlist form state
const email = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

// Email validation
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Scroll to top for waitlist form
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Submit to waitlist
const submitWaitlist = async () => {
  errorMessage.value = ''

  if (!email.value.trim()) {
    errorMessage.value = 'Please enter your email address'
    return
  }

  if (!isValidEmail(email.value)) {
    errorMessage.value = 'Please enter a valid email address'
    return
  }

  isSubmitting.value = true

  try {
    await api.post('/api/waitlist', {
      email: email.value,
      source: 'homepage'
    })
    isSuccess.value = true
    email.value = ''
  } catch (error: any) {
    errorMessage.value = error?.data?.message || 'Something went wrong. Please try again.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="bg-app min-h-screen">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center px-6 py-12">
      <div class="w-full max-w-6xl">
        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- LEFT: App Preview -->
          <div class="order-2 lg:order-1">
            <img src="/home.png" alt="CONSTRUCT" class="w-full rounded-lg">
          </div>

          <!-- RIGHT: Main Content -->
          <div class="space-y-6 order-1 lg:order-2">
            <!-- Title -->
            <div>
              <p class="text-xs text-app-muted tracking-wider mb-1">
                THIS IS THE
              </p>
              <h1 class="text-4xl font-light text-app">

                <LogoText />

              </h1>
            </div>

            <!-- Description -->
            <p class="text-app-muted leading-relaxed">
              Nine integrated spaces for design, code, and collaboration.
              Powered by 10 specialized AI agents.
            </p>

            <!-- Waitlist Signup -->
            <div class="space-y-4">
              <p class="text-xs text-app-muted uppercase tracking-wider">
                Get Early Access
              </p>

              <!-- Success State -->
              <div v-if="isSuccess" class="flex items-center gap-2 text-green-400">
                <UIcon name="lucide:check-circle" class="size-5" />
                <span class="text-sm">You're on the list! We'll be in touch soon.</span>
              </div>

              <!-- Form -->
              <form v-else @submit.prevent="submitWaitlist" class="space-y-3">
                <div class="flex flex-col sm:flex-row gap-3">
                  <input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    :disabled="isSubmitting"
                    class="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/10 text-app text-sm placeholder:text-app-muted focus:outline-none focus:border-app-accent transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-app-accent text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    <UIcon v-if="isSubmitting" name="lucide:loader-2" class="size-4 animate-spin" />
                    <UIcon v-else name="lucide:mail" class="size-4" />
                    {{ isSubmitting ? 'JOINING...' : 'JOIN WAITLIST' }}
                  </button>
                </div>

                <!-- Error Message -->
                <p v-if="errorMessage" class="text-red-400 text-xs">
                  {{ errorMessage }}
                </p>
              </form>

              <!-- Explore Link -->
              <NuxtLink to="/features"
                class="inline-flex items-center gap-2 text-sm text-app-muted hover:text-app-accent transition-colors">
                <UIcon name="lucide:layout-grid" class="size-4" />
                EXPLORE FEATURES
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Spaces Section -->
    <section class="py-24 bg-app-canvas">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div class="text-left lg:text-right">
            <p class="text-xs text-app-accent uppercase tracking-wider mb-1">
              WORKSPACES
            </p>
            <h2 class="text-2xl font-bold text-app">
              Nine Spaces
            </h2>
          </div>
          <div>
            <p class="text-app-muted">
              Purpose-built workspaces that integrate seamlessly.
            </p>
          </div>
        </div>

        <!-- Spaces List -->
        <div class="grid grid-cols-3 gap-x-8 gap-y-6">
          <NuxtLink v-for="space in spaces" :key="space.id" :to="`/features/${space.id}`" class="group flex items-start gap-3">
            <UIcon :name="space.icon" class="size-5 text-app-accent shrink-0 mt-0.5" />
            <div>
              <p class="text-sm font-medium text-app group-hover:text-app-accent transition-colors">
                {{ space.name.toUpperCase() }}
              </p>
              <p class="text-xs text-app-muted">
                {{ space.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- AI Section -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div class="space-y-6">
            <div>
              <p class="text-xs text-app-accent uppercase tracking-wider mb-1">
                AI-POWERED
              </p>
              <h2 class="text-2xl font-bold text-app">
                10 AI Agents
              </h2>
            </div>
            <p class="text-app-muted">
              Specialized agents for code, design, git, and more.
              Each understands your context.
            </p>
            <NuxtLink to="/features"
              class="inline-flex items-center gap-2 text-sm text-app hover:text-app-accent transition-colors">
              LEARN MORE
              <UIcon name="lucide:arrow-right" class="size-4" />
            </NuxtLink>
          </div>

          <div class="space-y-2 text-right">
            <p class="text-xl">
              <span class="text-app-muted">CONDUCTOR:</span>
              <span class="text-app font-medium">Orchestrator</span>
            </p>
            <p class="text-xl">
              <span class="text-app-muted">CODE:</span>
              <span class="text-app font-medium">Developer</span>
            </p>
            <p class="text-xl">
              <span class="text-app-muted">DESIGN:</span>
              <span class="text-app font-medium">Creator</span>
            </p>
            <p class="text-xl">
              <span class="text-app-muted">GIT:</span>
              <span class="text-app font-medium">Version Control</span>
            </p>
            <p class="text-xl">
              <span class="text-app-muted">PLANNER:</span>
              <span class="text-app font-medium">Project Manager</span>
            </p>
            <p class="text-xl">
              <span class="text-app-muted">+ 5 MORE</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-app-canvas">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div class="text-left lg:text-right">
            <p class="text-xs text-app-accent uppercase tracking-wider mb-1">
              READY?
            </p>
            <h2 class="text-2xl font-bold text-app">
              Enter the <span class="text-app-accent">CONSTRUCT</span>
            </h2>
          </div>
          <div class="space-y-4">
            <p class="text-app-muted">
              Join the waitlist for early access.
            </p>

            <!-- Success State (CTA) -->
            <div v-if="isSuccess" class="flex items-center gap-2 text-green-400">
              <UIcon name="lucide:check-circle" class="size-5" />
              <span class="text-sm">You're on the list!</span>
            </div>

            <!-- CTA Actions -->
            <div v-else class="flex gap-3">
              <button
                @click="scrollToTop"
                class="flex items-center gap-2 px-4 py-2 rounded-md bg-app-accent text-white text-sm hover:opacity-90 transition-opacity"
              >
                <UIcon name="lucide:mail" class="size-4" />
                JOIN WAITLIST
              </button>
              <NuxtLink to="/pricing"
                class="flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 text-app text-sm hover:bg-app-accent hover:text-white transition-colors">
                PRICING
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
