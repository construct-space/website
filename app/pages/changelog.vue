<script setup lang="ts">
useSeoMeta({
  title: 'Changelog - Construct',
  description: 'See what\'s new in Construct. Version history, updates, and release notes.'
})

interface Change {
  type: 'feature' | 'improvement' | 'fix' | 'breaking'
  description: string
}

interface Release {
  version: string
  date: string
  title: string
  changes: Change[]
}

const releases: Release[] = [
  {
    version: '1.2.0',
    date: 'January 5, 2025',
    title: 'Path Editing & Pen Tool Improvements',
    changes: [
      { type: 'feature', description: 'Add/remove points in path edit mode with CMD+click' },
      { type: 'feature', description: 'Complete pen tool and path editing system' },
      { type: 'improvement', description: 'Move saving indicator to after breadcrumb in toolbar' },
      { type: 'fix', description: 'Properly handle image transforms - keep scale, don\'t bake into dimensions' },
      { type: 'fix', description: 'Resolve TypeScript errors and update Tailwind classes' }
    ]
  },
  {
    version: '1.1.0',
    date: 'December 15, 2024',
    title: 'Git Integration & Team Features',
    changes: [
      { type: 'feature', description: 'Built-in Git space with branch management and diff viewer' },
      { type: 'feature', description: 'Team chat with rooms and AI integration' },
      { type: 'feature', description: 'Architect space for AI-powered project scaffolding' },
      { type: 'improvement', description: 'Enhanced Monaco editor with better LSP support' },
      { type: 'improvement', description: 'Faster project loading and switching' },
      { type: 'fix', description: 'Fixed memory leak in terminal emulator' }
    ]
  },
  {
    version: '1.0.0',
    date: 'November 1, 2024',
    title: 'Initial Release',
    changes: [
      { type: 'feature', description: 'UI Designer with Fabric.js canvas engine' },
      { type: 'feature', description: 'Code editor powered by Monaco' },
      { type: 'feature', description: 'Integrated terminal emulator' },
      { type: 'feature', description: 'AI Assistant with multiple chat sessions' },
      { type: 'feature', description: 'Kanban task management' },
      { type: 'feature', description: 'Sticky notes board' },
      { type: 'feature', description: 'Export to SVG, PNG, CSS, HTML, Vue, React, Tailwind' },
      { type: 'feature', description: 'Light and dark themes with customizable accent colors' }
    ]
  },
  {
    version: '0.9.0',
    date: 'October 1, 2024',
    title: 'Public Beta',
    changes: [
      { type: 'feature', description: 'First public beta release' },
      { type: 'feature', description: 'Support for macOS, Windows, and Linux' },
      { type: 'feature', description: 'IndexedDB local storage for projects' },
      { type: 'improvement', description: 'Performance optimizations for large projects' },
      { type: 'fix', description: 'Various stability improvements' }
    ]
  }
]

const changeTypeConfig = {
  feature: { label: 'New', color: 'text-green-500', bg: 'bg-green-500/10' },
  improvement: { label: 'Improved', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  fix: { label: 'Fixed', color: 'text-orange-500', bg: 'bg-orange-500/10' },
  breaking: { label: 'Breaking', color: 'text-red-500', bg: 'bg-red-500/10' }
}
</script>

<template>
  <div class="py-24">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
          UPDATES
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-app mb-4">
          Change<span class="text-app-accent">log</span>
        </h1>
        <p class="text-lg text-app-muted max-w-2xl mx-auto">
          See what's new in CONSTRUCT. We ship updates regularly with new features and improvements.
        </p>
      </div>

      <!-- Subscribe to updates -->
      <div class="mb-16 p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app flex flex-col sm:flex-row items-center gap-4">
        <div class="flex-1">
          <h3 class="font-semibold text-app mb-1">
            Stay Updated
          </h3>
          <p class="text-sm text-app-muted">
            Get notified when we release new versions.
          </p>
        </div>
        <NuxtLink to="/download">
          <UButton class="bg-app-accent hover:bg-app-accent/90">
            <UIcon
              name="i-lucide-bell"
              class="size-4 mr-2"
            />
            Download Latest
          </UButton>
        </NuxtLink>
      </div>

      <!-- Releases -->
      <div class="space-y-12">
        <article
          v-for="(release, index) in releases"
          :key="release.version"
          class="relative"
        >
          <!-- Timeline connector -->
          <div
            v-if="index < releases.length - 1"
            class="absolute left-6 top-16 bottom-0 w-px bg-app-accent/20 -translate-x-1/2"
          />

          <!-- Version badge -->
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-xl bg-app-accent/20 flex items-center justify-center relative z-10">
              <UIcon
                name="i-lucide-package"
                class="size-6 text-app-accent"
              />
            </div>
            <div>
              <div class="flex items-center gap-3">
                <h2 class="text-2xl font-bold text-app">
                  v{{ release.version }}
                </h2>
                <span
                  v-if="index === 0"
                  class="px-2 py-0.5 rounded-full bg-app-accent/20 text-app-accent text-xs font-semibold"
                >
                  Latest
                </span>
              </div>
              <p class="text-sm text-app-muted">
                {{ release.date }}
              </p>
            </div>
          </div>

          <!-- Release card -->
          <div class="ml-16 p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app">
            <h3 class="text-lg font-semibold text-app mb-4">
              {{ release.title }}
            </h3>

            <ul class="space-y-3">
              <li
                v-for="(change, changeIndex) in release.changes"
                :key="changeIndex"
                class="flex items-start gap-3"
              >
                <span
                  class="px-2 py-0.5 rounded text-xs font-semibold shrink-0 mt-0.5"
                  :class="[changeTypeConfig[change.type].color, changeTypeConfig[change.type].bg]"
                >
                  {{ changeTypeConfig[change.type].label }}
                </span>
                <span class="text-app-muted">{{ change.description }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>

      <!-- Archive note -->
      <div class="mt-16 text-center">
        <p class="text-app-muted">
          Looking for older releases? Check our
          <a
            href="https://github.com/construct/construct/releases"
            target="_blank"
            rel="noopener noreferrer"
            class="text-app-accent hover:underline"
          >
            GitHub releases page
          </a>
          for the complete history.
        </p>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-app">
        <h2 class="text-2xl font-bold text-app mb-4">
          Ready to Try the <span class="text-app-accent">Latest Version</span>?
        </h2>
        <p class="text-app-muted mb-6">
          Download CONSTRUCT and start building with the newest features.
        </p>
        <NuxtLink to="/download">
          <UButton
            size="lg"
            class="bg-app-accent hover:bg-app-accent/90"
          >
            <UIcon
              name="i-lucide-download"
              class="size-5 mr-2"
            />
            Download v{{ releases[0].version }}
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
