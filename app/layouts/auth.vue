<template>
  <div class="min-h-screen bg-app flex flex-col">
    <!-- Minimal Header -->
    <header class="p-6">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-app-muted hover:text-app transition-colors"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="size-4"
        />
        <span class="text-sm">Back to home</span>
      </NuxtLink>
    </header>

    <!-- Content -->
    <main class="flex-1 flex items-center justify-center px-6 py-12">
      <slot />
    </main>

    <!-- Minimal Footer -->
    <footer class="p-6 text-center">
      <p class="text-sm text-app-muted">
        &copy; {{ new Date().getFullYear() }} CONSTRUCT. All rights reserved.
      </p>
    </footer>
  </div>
</template>
