<template>
  <div class="max-w-4xl">
    <!-- Hero Section -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">
        Construct Documentation
      </h1>
      <p class="text-xl text-app-muted">
        Learn how to build applications with Construct's integrated creative development environment.
      </p>
    </div>

    <!-- Quick Links -->
    <div class="grid md:grid-cols-2 gap-6 mb-12">
      <NuxtLink
        to="/dashboard/docs/getting-started/installation"
        class="group p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app hover:border-app-accent/50 transition-colors"
      >
        <div class="flex items-center gap-3 mb-3">
          <div class="p-2 rounded-lg bg-app-accent/20">
            <UIcon
              name="i-lucide-download"
              class="w-5 h-5 text-app-accent"
            />
          </div>
          <h2 class="text-lg font-semibold group-hover:text-app-accent transition-colors">
            Installation
          </h2>
        </div>
        <p class="text-sm text-app-muted">
          Download and install Construct on macOS, Windows, or Linux.
        </p>
      </NuxtLink>

      <NuxtLink
        to="/dashboard/docs/getting-started/quick-start"
        class="group p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app hover:border-app-accent/50 transition-colors"
      >
        <div class="flex items-center gap-3 mb-3">
          <div class="p-2 rounded-lg bg-app-accent/20">
            <UIcon
              name="i-lucide-rocket"
              class="w-5 h-5 text-app-accent"
            />
          </div>
          <h2 class="text-lg font-semibold group-hover:text-app-accent transition-colors">
            Quick Start
          </h2>
        </div>
        <p class="text-sm text-app-muted">
          Create your first project and explore the core features.
        </p>
      </NuxtLink>
    </div>

    <!-- Spaces Overview -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">
        Explore Spaces
      </h2>
      <p class="text-app-muted mb-6">
        Construct combines multiple workspaces called "Spaces" that work together seamlessly.
        Each space is designed for a specific part of your development workflow.
      </p>

      <div class="grid md:grid-cols-3 gap-4">
        <NuxtLink
          v-for="space in spaces"
          :key="space.path"
          :to="space.path"
          class="group p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-app hover:border-app-accent/50 transition-colors"
        >
          <div class="flex items-center gap-2 mb-2">
            <UIcon
              :name="space.icon"
              class="w-4 h-4 text-app-accent"
            />
            <span class="font-medium group-hover:text-app-accent transition-colors">
              {{ space.title }}
            </span>
          </div>
          <p class="text-xs text-app-muted">{{ space.description }}</p>
        </NuxtLink>
      </div>
    </section>

    <!-- AI Features -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">
        AI Features
      </h2>
      <div class="grid md:grid-cols-2 gap-4">
        <NuxtLink
          to="/dashboard/docs/agents"
          class="group p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app hover:border-app-accent/50 transition-colors"
        >
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 rounded-lg bg-purple-500/20">
              <UIcon
                name="i-lucide-bot"
                class="w-5 h-5 text-purple-500"
              />
            </div>
            <h3 class="text-lg font-semibold group-hover:text-app-accent transition-colors">
              AI Agents
            </h3>
          </div>
          <p class="text-sm text-app-muted">
            Specialized AI assistants for coding, design, tasks, and more.
          </p>
        </NuxtLink>

        <NuxtLink
          to="/dashboard/docs/skills"
          class="group p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app hover:border-app-accent/50 transition-colors"
        >
          <div class="flex items-center gap-3 mb-3">
            <div class="p-2 rounded-lg bg-blue-500/20">
              <UIcon
                name="i-lucide-puzzle"
                class="w-5 h-5 text-blue-500"
              />
            </div>
            <h3 class="text-lg font-semibold group-hover:text-app-accent transition-colors">
              Skills
            </h3>
          </div>
          <p class="text-sm text-app-muted">
            Middleware hooks for cost control, safety, and automation.
          </p>
        </NuxtLink>
      </div>
    </section>

    <!-- Key Features -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">
        Key Features
      </h2>
      <div class="space-y-4">
        <div class="p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-app">
          <h3 class="font-semibold mb-2">
            Design to Code Export
          </h3>
          <p class="text-sm text-app-muted">
            Export your designs as Vue SFC, React JSX, HTML, CSS, Tailwind, or SVG.
            The UI Designer generates clean, production-ready code.
          </p>
        </div>
        <div class="p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-app">
          <h3 class="font-semibold mb-2">
            Integrated Development
          </h3>
          <p class="text-sm text-app-muted">
            Code with Monaco Editor (VS Code's engine), manage versions with Git,
            and run commands in the integrated terminal - all without leaving Construct.
          </p>
        </div>
        <div class="p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-app">
          <h3 class="font-semibold mb-2">
            AI-Powered Assistance
          </h3>
          <p class="text-sm text-app-muted">
            Get context-aware help from specialized AI agents. Use Architect to scaffold
            new projects with AI-generated structures.
          </p>
        </div>
      </div>
    </section>

    <!-- Help Section -->
    <section class="p-6 rounded-xl bg-app-accent/10 border border-app-accent/30">
      <h2 class="text-xl font-bold mb-2">
        Need Help?
      </h2>
      <p class="text-app-muted mb-4">
        Can't find what you're looking for? We're here to help.
      </p>
      <div class="flex flex-wrap gap-4">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-app-accent text-app-accent-foreground font-medium hover:opacity-90 transition-opacity"
        >
          <UIcon
            name="i-lucide-message-circle"
            class="w-4 h-4"
          />
          Contact Support
        </NuxtLink>
        <a
          href="https://github.com/construct"
          target="_blank"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 font-medium hover:bg-white/20 transition-colors"
        >
          <UIcon
            name="i-simple-icons-github"
            class="w-4 h-4"
          />
          GitHub
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard-docs',
  middleware: 'auth'
})

useSeoMeta({
  title: 'Documentation - Construct',
  description: 'Learn how to build applications with Construct\'s integrated creative development environment.'
})

const spaces = [
  {
    title: 'UI Designer',
    icon: 'i-lucide-component',
    description: 'Vector design editor',
    path: '/dashboard/docs/spaces/ui-designer'
  },
  {
    title: 'Code',
    icon: 'i-lucide-code',
    description: 'Monaco-powered editor',
    path: '/dashboard/docs/spaces/code'
  },
  {
    title: 'Git',
    icon: 'i-lucide-git-branch',
    description: 'Version control',
    path: '/dashboard/docs/spaces/git'
  },
  {
    title: 'Terminal',
    icon: 'i-lucide-terminal',
    description: 'Integrated terminal',
    path: '/dashboard/docs/spaces/terminal'
  },
  {
    title: 'AI Assistant',
    icon: 'i-lucide-sparkles',
    description: 'Context-aware AI',
    path: '/dashboard/docs/spaces/ai-assistant'
  },
  {
    title: 'Tasks',
    icon: 'i-lucide-check-square',
    description: 'Kanban boards',
    path: '/dashboard/docs/spaces/tasks'
  },
  {
    title: 'Notes',
    icon: 'i-lucide-sticky-note',
    description: 'Quick notes',
    path: '/dashboard/docs/spaces/notes'
  },
  {
    title: 'Chat',
    icon: 'i-lucide-messages-square',
    description: 'Team communication',
    path: '/dashboard/docs/spaces/chat'
  },
  {
    title: 'Architect',
    icon: 'i-lucide-compass',
    description: 'AI scaffolding',
    path: '/dashboard/docs/spaces/architect'
  }
]
</script>
