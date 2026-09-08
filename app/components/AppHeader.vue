<script setup lang="ts">
const navLinks = [
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Download', to: '/download' }
]

const { loggedIn } = useAuth()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-app/80 backdrop-blur-lg border-b border-app">
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center"
      >
        <AppLogo />
      </NuxtLink>

      <!-- Nav Links -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm text-app-muted hover:text-app-accent transition-colors uppercase tracking-wider font-medium"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-4">
        <template v-if="loggedIn">
          <UButton
            to="/dashboard"
            color="neutral"
            variant="ghost"
          >
            Dashboard
          </UButton>
        </template>
        <template v-else>
          <UButton
            to="/login"
            color="neutral"
            variant="ghost"
            class="hidden sm:inline-flex"
          >
            Sign In
          </UButton>
          <UButton
            to="/register"
            class="bg-app-accent hover:bg-app-accent/90"
          >
            Get Started
          </UButton>
        </template>
      </div>
    </div>
  </header>
</template>
