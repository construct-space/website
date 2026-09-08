<script setup lang="ts">
const spaces = [
  {
    id: 'ui-designer',
    name: 'UI Designer',
    icon: 'i-lucide-component',
    color: '#8b5cf6',
    description: 'Vector design editor powered by Fabric.js. Create interfaces with canvas-based tools similar to Figma.'
  },
  {
    id: 'code',
    name: 'Code',
    icon: 'i-lucide-code-2',
    color: '#3b82f6',
    description: 'Full-featured code editor with Monaco (VS Code engine), LSP support, and integrated file management.'
  },
  {
    id: 'git',
    name: 'Git',
    icon: 'i-lucide-git-branch',
    color: '#ef4444',
    description: 'Built-in version control with branch management, commit history, staging, and diff viewer.'
  },
  {
    id: 'terminal',
    name: 'Terminal',
    icon: 'i-lucide-terminal',
    color: '#10b981',
    description: 'Integrated terminal emulator with multi-terminal support and split view capability.'
  },
  {
    id: 'ai',
    name: 'AI Assistant',
    icon: 'i-lucide-sparkles',
    color: '#f59e0b',
    description: 'AI-powered chat assistant with multiple sessions, history, and model selection.'
  },
  {
    id: 'tasks',
    name: 'Tasks',
    icon: 'i-lucide-check-square',
    color: '#06b6d4',
    description: 'Kanban board for project management with task creation, filtering, and calendar view.'
  },
  {
    id: 'notes',
    name: 'Notes',
    icon: 'i-lucide-sticky-note',
    color: '#ec4899',
    description: 'Sticky notes board for quick reminders with color customization and sharing.'
  },
  {
    id: 'chat',
    name: 'Chat',
    icon: 'i-lucide-messages-square',
    color: '#84cc16',
    description: 'Team communication with chat rooms, member management, and AI integration.'
  },
  {
    id: 'architect',
    name: 'Architect',
    icon: 'i-lucide-compass',
    color: '#f97316',
    description: 'AI-powered project scaffolding with blueprint templates and structure generation.'
  }
]

const highlights = [
  { icon: 'i-lucide-zap', title: 'Native Performance', description: 'Built on Tauri for fast, lightweight desktop experience.' },
  { icon: 'i-lucide-palette', title: 'Light & Dark Themes', description: 'Automatic theme detection with customizable accent colors.' },
  { icon: 'i-lucide-keyboard', title: 'Keyboard First', description: 'Full keyboard shortcuts for every action.' },
  { icon: 'i-lucide-hard-drive', title: 'Local First', description: 'Your data stays on your machine with IndexedDB storage.' }
]
</script>

<template>
  <div class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
          FEATURES
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-app mb-4">
          Everything You Need in <span class="text-app-accent">One Place</span>
        </h1>
        <p class="text-lg text-app-muted max-w-2xl mx-auto">
          Nine integrated spaces that work together seamlessly. Design, code, collaborate, and ship.
        </p>
      </div>

      <!-- Spaces Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        <NuxtLink
          v-for="space in spaces"
          :key="space.id"
          :to="`/features/${space.id}`"
          class="group p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app hover:border-app-accent/50 transition-all"
        >
          <div
            class="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
            :style="{ backgroundColor: space.color + '20' }"
          >
            <UIcon
              :name="space.icon"
              class="size-7"
              :style="{ color: space.color }"
            />
          </div>
          <h3 class="text-lg font-semibold text-app group-hover:text-app-accent transition-colors mb-2">
            {{ space.name }}
          </h3>
          <p class="text-sm text-app-muted">{{ space.description }}</p>
          <div class="mt-4 flex items-center text-sm text-app-accent opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more
            <UIcon
              name="i-lucide-arrow-right"
              class="size-4 ml-1"
            />
          </div>
        </NuxtLink>
      </div>

      <!-- Platform Highlights -->
      <div class="text-center mb-12">
        <h2 class="text-2xl font-bold text-app mb-4">
          Platform Highlights
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="highlight in highlights"
          :key="highlight.title"
          class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app"
        >
          <UIcon
            :name="highlight.icon"
            class="size-8 text-app-accent mb-4"
          />
          <h3 class="font-semibold text-app mb-2">
            {{ highlight.title }}
          </h3>
          <p class="text-sm text-app-muted">
            {{ highlight.description }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <NuxtLink to="/download">
          <UButton
            size="lg"
            class="bg-app-accent hover:bg-app-accent/90"
          >
            <UIcon
              name="i-lucide-download"
              class="size-5 mr-2"
            />
            Download CONSTRUCT
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
