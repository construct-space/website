<template>
  <footer class="border-t border-app bg-app-canvas">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="space-y-4">
          <a
            href="https://www.youtube.com/watch?v=O5b0ZxUWNf0"
            target="_blank"
            class="no-underline"
          >
            <AppLogo />
          </a>
          <p class="text-sm text-app-muted">
            Build modern applications with an all-in-one platform.
          </p>
        </div>

        <!-- Product -->
        <div class="space-y-4">
          <p class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Product
          </p>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/features"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Features</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/pricing"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Pricing</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/download"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Download</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/changelog"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Changelog</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="space-y-4">
          <p class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Resources
          </p>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/dashboard/docs"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Documentation</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/changelog"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Changelog</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Contact</NuxtLink>
            </li>
            <li>
              <a
                href="https://github.com/construct"
                target="_blank"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >GitHub</a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="space-y-4">
          <p class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Legal
          </p>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                to="/about"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >About</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/privacy"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Privacy</NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/terms"
                class="text-sm text-app-muted hover:text-app-accent transition-colors"
              >Terms</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-app flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-app-muted">
          &copy; {{ new Date().getFullYear() }} <a
            href="https://www.youtube.com/watch?v=O5b0ZxUWNf0"
            target="_blank"
            class="text-app-muted no-underline hover:text-app-muted"
          >CONSTRUCT</a>. All rights reserved.
        </p>
        <div class="flex items-center gap-4">
          <!-- Theme Selector -->
          <ThemeSelector />

          <a
            href="https://github.com/construct"
            target="_blank"
            class="text-app-muted hover:text-app-accent transition-colors"
          >
            <UIcon
              name="i-simple-icons-github"
              class="size-5"
            />
          </a>
          <a
            href="https://twitter.com/construct"
            target="_blank"
            class="text-app-muted hover:text-app-accent transition-colors"
          >
            <UIcon
              name="i-simple-icons-x"
              class="size-5"
            />
          </a>
          <a
            href="https://discord.gg/construct"
            target="_blank"
            class="text-app-muted hover:text-app-accent transition-colors"
          >
            <UIcon
              name="i-simple-icons-discord"
              class="size-5"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
