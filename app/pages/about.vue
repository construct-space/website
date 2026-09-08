<script setup lang="ts">
useSeoMeta({
  title: 'About - Construct',
  description: 'Learn about Construct, the complete creative development environment where design meets code.'
})

const values = [
  {
    icon: 'i-lucide-zap',
    title: 'Speed',
    description: 'Native performance with Tauri. Your tools should never slow you down.'
  },
  {
    icon: 'i-lucide-puzzle',
    title: 'Integration',
    description: 'Nine spaces that work together. No more switching between disconnected apps.'
  },
  {
    icon: 'i-lucide-hard-drive',
    title: 'Local First',
    description: 'Your data stays on your machine. Privacy and offline access by default.'
  },
  {
    icon: 'i-lucide-code-2',
    title: 'Developer Focus',
    description: 'Built by developers, for developers. Every feature is keyboard-accessible.'
  }
]

const timeline = [
  {
    year: '2023',
    title: 'The Idea',
    description: 'Frustrated by juggling Figma, VS Code, terminal, and project management tools, we envisioned a unified workspace.'
  },
  {
    year: '2024',
    title: 'Development Begins',
    description: 'Built on Tauri with Vue 3, the first prototype combined a design canvas with an integrated code editor.'
  },
  {
    year: '2024',
    title: 'Nine Spaces',
    description: 'Expanded to include Git, Terminal, AI Assistant, Tasks, Notes, Chat, and Architect spaces.'
  },
  {
    year: '2025',
    title: 'Public Beta',
    description: 'Released to the public. Available for macOS, Windows, and Linux.'
  }
]

const techStack = [
  { name: 'Tauri', description: 'Native desktop framework' },
  { name: 'Vue 3', description: 'Frontend framework' },
  { name: 'Nuxt', description: 'Application architecture' },
  { name: 'Fabric.js', description: 'Canvas rendering engine' },
  { name: 'Monaco', description: 'Code editor engine' },
  { name: 'IndexedDB', description: 'Local data persistence' }
]
</script>

<template>
  <div class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Hero -->
      <div class="text-center mb-24">
        <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
          ABOUT
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-app mb-6">
          Building the Future of <span class="text-app-accent">Creative Development</span>
        </h1>
        <p class="text-xl text-app-muted max-w-3xl mx-auto">
          CONSTRUCT is where design meets code. A complete creative development environment
          that brings all your tools together in one native desktop application.
        </p>
      </div>

      <!-- Origin Story -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
            THE ORIGIN
          </p>
          <h2 class="text-3xl font-bold text-app mb-6">
            Named After <span class="text-app-accent">The Matrix</span>
          </h2>
          <div class="space-y-4 text-app-muted">
            <p>
              In The Matrix, the Construct is a loading program where anything can be built
              and loaded. It's a blank canvas for creation, a space where imagination becomes reality.
            </p>
            <p>
              We built CONSTRUCT with the same vision: a unified workspace where designers
              and developers can create without boundaries. Design interfaces, write code,
              manage projects, and collaborate with your team, all in one place.
            </p>
            <p>
              No more context switching. No more disconnected tools. Just you and your ideas,
              with everything you need at your fingertips.
            </p>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-app-accent/20 to-purple-500/20 rounded-2xl blur-3xl opacity-50" />
          <div class="relative p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-app">
            <blockquote class="text-2xl font-medium text-app italic">
              "The Construct is where we can load anything we need."
            </blockquote>
            <p class="text-app-muted mt-4">
              Morpheus, The Matrix
            </p>
          </div>
        </div>
      </div>

      <!-- Values -->
      <div class="mb-24">
        <div class="text-center mb-12">
          <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
            OUR VALUES
          </p>
          <h2 class="text-3xl font-bold text-app">
            What We Believe In
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="value in values"
            :key="value.title"
            class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app"
          >
            <div class="w-12 h-12 rounded-xl bg-app-accent/20 flex items-center justify-center mb-4">
              <UIcon
                :name="value.icon"
                class="size-6 text-app-accent"
              />
            </div>
            <h3 class="font-semibold text-app mb-2">
              {{ value.title }}
            </h3>
            <p class="text-sm text-app-muted">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="mb-24">
        <div class="text-center mb-12">
          <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
            OUR JOURNEY
          </p>
          <h2 class="text-3xl font-bold text-app">
            How We Got Here
          </h2>
        </div>

        <div class="relative">
          <div class="absolute left-8 top-0 bottom-0 w-px bg-app-accent/20 md:left-1/2" />

          <div class="space-y-12">
            <div
              v-for="(item, index) in timeline"
              :key="item.year"
              class="relative flex items-start gap-8 md:gap-0"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <div class="absolute left-8 w-4 h-4 rounded-full bg-app-accent -translate-x-1/2 md:left-1/2" />

              <div
                class="flex-1 pl-16 md:pl-0"
                :class="index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'"
              >
                <span class="text-app-accent font-bold text-lg">{{ item.year }}</span>
                <h3 class="text-xl font-semibold text-app mt-1 mb-2">
                  {{ item.title }}
                </h3>
                <p class="text-app-muted">
                  {{ item.description }}
                </p>
              </div>

              <div class="hidden md:block flex-1" />
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack -->
      <div class="mb-24">
        <div class="text-center mb-12">
          <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
            TECHNOLOGY
          </p>
          <h2 class="text-3xl font-bold text-app">
            Built With Modern Tools
          </h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-app text-center"
          >
            <h3 class="font-semibold text-app mb-1">
              {{ tech.name }}
            </h3>
            <p class="text-xs text-app-muted">
              {{ tech.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center p-12 rounded-2xl bg-white/50 dark:bg-white/5 border border-app">
        <h2 class="text-3xl font-bold text-app mb-4">
          Ready to Try <span class="text-app-accent">CONSTRUCT</span>?
        </h2>
        <p class="text-app-muted mb-8 max-w-xl mx-auto">
          Download for free and experience the future of creative development.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink to="/download">
            <UButton
              size="lg"
              class="bg-app-accent hover:bg-app-accent/90"
            >
              <UIcon
                name="i-lucide-download"
                class="size-5 mr-2"
              />
              Download Free
            </UButton>
          </NuxtLink>
          <NuxtLink to="/contact">
            <UButton
              size="lg"
              color="neutral"
              variant="outline"
            >
              <UIcon
                name="i-lucide-mail"
                class="size-5 mr-2"
              />
              Contact Us
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
