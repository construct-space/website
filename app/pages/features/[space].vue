<script setup lang="ts">
const route = useRoute()
const spaceId = route.params.space as string

interface SpaceFeature {
  name: string
  description: string
  icon: string
}

interface SpaceData {
  name: string
  icon: string
  tagline: string
  description: string
  features: SpaceFeature[]
  tools?: { name: string; key: string; icon: string }[]
  shortcuts?: { action: string; mac: string; win: string }[]
  exportFormats?: { name: string; description: string }[]
}

const spacesData: Record<string, SpaceData> = {
  'ui-designer': {
    name: 'UI Designer',
    icon: 'lucide:component',
    tagline: 'Design interfaces visually',
    description: 'A vector design editor powered by Fabric.js. Create interfaces with canvas-based tools similar to Figma. Draw shapes, add text, manage layers, and export to multiple formats including Vue, React, and Tailwind.',
    features: [
      { name: 'Vector Canvas', description: 'Fabric.js-powered infinite canvas with zoom, pan, and precision tools', icon: 'lucide:move' },
      { name: 'Layers Panel', description: 'Tree view with drag-drop reordering, visibility, and lock controls', icon: 'lucide:layers' },
      { name: 'Properties Inspector', description: 'Full control over position, size, fill, stroke, shadows, and effects', icon: 'lucide:sliders' },
      { name: 'Gradient Editor', description: 'Linear and radial gradients with multi-stop color picker', icon: 'lucide:palette' },
      { name: 'Text Styling', description: 'Google Fonts integration with full text styling options', icon: 'lucide:type' },
      { name: 'Nested Groups', description: 'Group objects together, nest groups, manage hierarchy', icon: 'lucide:folder' },
      { name: 'Smart Guides', description: 'Snap-to-grid, rulers, smart guides, and object snapping', icon: 'lucide:grid-3x3' },
      { name: 'Corner Control', description: 'Individual corner radius control like Figma', icon: 'lucide:square' },
      { name: 'Drop Shadows', description: 'Multiple shadows with blur, spread, and offset', icon: 'lucide:sun' },
      { name: 'Undo History', description: 'Full undo/redo with unlimited history stack', icon: 'lucide:history' },
      { name: 'Multi Clipboard', description: 'Store multiple items, paste from history, cross-space clipboard', icon: 'lucide:clipboard' },
      { name: 'Batch Selection', description: 'Select multiple objects, transform together', icon: 'lucide:box-select' },
    ],
    tools: [
      { name: 'Select', key: 'V', icon: 'lucide:mouse-pointer' },
      { name: 'Screen', key: 'F', icon: 'lucide:smartphone' },
      { name: 'Rectangle', key: 'R', icon: 'lucide:square' },
      { name: 'Ellipse', key: 'O', icon: 'lucide:circle' },
      { name: 'Text', key: 'T', icon: 'lucide:type' },
      { name: 'Pen', key: 'P', icon: 'lucide:pen-tool' },
      { name: 'Line', key: 'L', icon: 'lucide:minus' },
      { name: 'Arrow', key: 'A', icon: 'lucide:arrow-right' },
      { name: 'Polygon', key: 'G', icon: 'lucide:hexagon' },
      { name: 'Star', key: 'S', icon: 'lucide:star' },
      { name: 'Hand', key: 'H', icon: 'lucide:hand' },
    ],
    shortcuts: [
      { action: 'Undo', mac: '⌘Z', win: 'Ctrl+Z' },
      { action: 'Redo', mac: '⌘⇧Z', win: 'Ctrl+Shift+Z' },
      { action: 'Copy', mac: '⌘C', win: 'Ctrl+C' },
      { action: 'Paste', mac: '⌘V', win: 'Ctrl+V' },
      { action: 'Duplicate', mac: '⌘D', win: 'Ctrl+D' },
      { action: 'Group', mac: '⌘G', win: 'Ctrl+G' },
      { action: 'Ungroup', mac: '⌘⇧G', win: 'Ctrl+Shift+G' },
      { action: 'Select All', mac: '⌘A', win: 'Ctrl+A' },
      { action: 'Delete', mac: '⌫', win: 'Delete' },
      { action: 'Export', mac: '⌘E', win: 'Ctrl+E' },
      { action: 'Zoom In', mac: '⌘+', win: 'Ctrl++' },
      { action: 'Zoom Out', mac: '⌘-', win: 'Ctrl+-' },
    ],
    exportFormats: [
      { name: 'SVG', description: 'Scalable vector graphics' },
      { name: 'PNG', description: '1x, 2x, 3x raster export' },
      { name: 'CSS', description: 'Class-based styles' },
      { name: 'HTML', description: 'Semantic markup' },
      { name: 'Vue SFC', description: 'Vue 3 component' },
      { name: 'React JSX', description: 'React component' },
      { name: 'Tailwind', description: 'Utility classes' },
      { name: 'JSON', description: 'Raw node data' },
    ]
  },
  'code': {
    name: 'Code',
    icon: 'lucide:code',
    tagline: 'Write code with intelligence',
    description: 'A full-featured code editor built on Monaco (VS Code engine). Syntax highlighting, intellisense, file browser, and integrated terminal.',
    features: [
      { name: 'Monaco Editor', description: 'Same engine as VS Code with full feature parity', icon: 'lucide:code-2' },
      { name: 'Smart Autocomplete', description: 'LSP-powered autocomplete and type hints', icon: 'lucide:sparkles' },
      { name: 'File Browser', description: 'Navigate and manage project files', icon: 'lucide:folder-tree' },
      { name: 'Syntax Highlighting', description: 'Support for 100+ languages', icon: 'lucide:palette' },
      { name: 'Code Folding', description: 'Collapse functions, classes, and blocks', icon: 'lucide:chevrons-down-up' },
      { name: 'Code Minimap', description: 'Document overview for quick navigation', icon: 'lucide:map' },
      { name: 'Global Search', description: 'Regex support, find in files', icon: 'lucide:search' },
      { name: 'Multiple Cursors', description: 'Edit multiple locations simultaneously', icon: 'lucide:mouse-pointer-2' },
    ]
  },
  'git': {
    name: 'Git',
    icon: 'lucide:git-branch',
    tagline: 'Version control built in',
    description: 'Visual Git interface for managing repositories, branches, commits, and diffs without leaving the app.',
    features: [
      { name: 'Repository View', description: 'See all changes at a glance', icon: 'lucide:folder-git-2' },
      { name: 'Branch Management', description: 'Create, switch, merge branches', icon: 'lucide:git-branch' },
      { name: 'Commit History', description: 'Visual timeline of all commits', icon: 'lucide:history' },
      { name: 'Staging Area', description: 'Stage files individually or in bulk', icon: 'lucide:plus-circle' },
      { name: 'Diff Viewer', description: 'Side-by-side file comparisons', icon: 'lucide:file-diff' },
      { name: 'Remote Sync', description: 'Sync with remote repositories', icon: 'lucide:refresh-cw' },
    ]
  },
  'terminal': {
    name: 'Terminal',
    icon: 'lucide:terminal',
    tagline: 'Command line access',
    description: 'Integrated terminal emulator running in your project context with support for multiple sessions.',
    features: [
      { name: 'Full Emulation', description: 'Complete terminal experience', icon: 'lucide:terminal' },
      { name: 'Multiple Sessions', description: 'Run several terminals at once', icon: 'lucide:layout' },
      { name: 'Split View', description: 'Side-by-side terminal windows', icon: 'lucide:columns' },
      { name: 'Project Context', description: 'Auto-opens in project directory', icon: 'lucide:folder' },
      { name: 'Command History', description: 'Scrollback and command history', icon: 'lucide:history' },
    ]
  },
  'ai': {
    name: 'AI Assistant',
    icon: 'lucide:sparkles',
    tagline: 'AI-powered assistance',
    description: 'Chat with AI that understands your project. Get help with code, debugging, and design decisions.',
    features: [
      { name: 'Chat Interface', description: 'Natural conversation with AI', icon: 'lucide:message-square' },
      { name: 'Project Context', description: 'AI understands your codebase', icon: 'lucide:folder-search' },
      { name: 'Code Generation', description: 'Generate code from descriptions', icon: 'lucide:code' },
      { name: 'Multiple Models', description: 'Choose your preferred AI model', icon: 'lucide:cpu' },
      { name: 'Chat History', description: 'Access previous conversations', icon: 'lucide:history' },
    ]
  },
  'tasks': {
    name: 'Tasks',
    icon: 'lucide:kanban',
    tagline: 'Project management',
    description: 'Kanban-style task boards built into your project. Track progress and stay organized.',
    features: [
      { name: 'Kanban Board', description: 'Visual task management', icon: 'lucide:kanban' },
      { name: 'Visual Reorder', description: 'Move tasks between columns', icon: 'lucide:move' },
      { name: 'Smart Labels', description: 'Categorize and filter tasks', icon: 'lucide:tag' },
      { name: 'Due Dates', description: 'Set deadlines and reminders', icon: 'lucide:calendar' },
      { name: 'Smart Filters', description: 'Find tasks quickly', icon: 'lucide:filter' },
    ]
  },
  'notes': {
    name: 'Notes',
    icon: 'lucide:sticky-note',
    tagline: 'Quick notes and reminders',
    description: 'A board of sticky notes for ideas and reminders. Color-code and share with your team.',
    features: [
      { name: 'Sticky Notes', description: 'Quick capture anywhere', icon: 'lucide:sticky-note' },
      { name: 'Color Coding', description: 'Organize by color', icon: 'lucide:palette' },
      { name: 'Free Positioning', description: 'Drag anywhere on board', icon: 'lucide:move' },
      { name: 'Team Sharing', description: 'Share notes with collaborators', icon: 'lucide:share-2' },
    ]
  },
  'chat': {
    name: 'Chat',
    icon: 'lucide:messages-square',
    tagline: 'Team communication',
    description: 'Built-in team chat for project collaboration with AI integration.',
    features: [
      { name: 'Chat Rooms', description: 'Organize conversations by topic', icon: 'lucide:hash' },
      { name: 'Team Members', description: 'Manage team access', icon: 'lucide:users' },
      { name: 'AI Integration', description: 'Bring AI into conversations', icon: 'lucide:sparkles' },
      { name: 'File Sharing', description: 'Share files in chat', icon: 'lucide:paperclip' },
      { name: 'Quick Access', description: 'Open with Ctrl+Ctrl', icon: 'lucide:zap' },
    ]
  },
  'architect': {
    name: 'Architect',
    icon: 'lucide:compass',
    tagline: 'AI project scaffolding',
    description: 'Start projects with AI-powered scaffolding. Choose templates or let AI generate structure from requirements.',
    features: [
      { name: 'Project Wizard', description: 'Guided project creation', icon: 'lucide:wand-2' },
      { name: 'Project Blueprints', description: 'Pre-built project templates', icon: 'lucide:layout-template' },
      { name: 'AI Generation', description: 'Generate from description', icon: 'lucide:sparkles' },
      { name: 'Tech Stack', description: 'Choose your technologies', icon: 'lucide:layers' },
      { name: 'Project Export', description: 'Save to filesystem', icon: 'lucide:download' },
    ]
  }
}

const space = computed(() => spacesData[spaceId])

if (!space.value) {
  throw createError({ statusCode: 404, message: 'Space not found' })
}

const allSpaces = Object.entries(spacesData).map(([id, data]) => ({ id, ...data }))
const otherSpaces = computed(() => allSpaces.filter(s => s.id !== spaceId))

// Image zoom modal
const isZoomed = ref(false)
</script>

<template>
  <div v-if="space" class="bg-app min-h-screen">
    <!-- Hero -->
    <section class="py-24 px-6">
      <div class="max-w-5xl mx-auto">
        <NuxtLink to="/features"
          class="inline-flex items-center gap-2 text-sm text-app-muted hover:text-app-accent transition-colors mb-8">
          <UIcon name="lucide:arrow-left" class="size-4" />
          ALL SPACES
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left: Screenshot -->
          <div class="order-2 lg:order-1">
            <img
              src="/spaces/ui-editor.png"
              :alt="space.name"
              class="w-full rounded-lg cursor-zoom-in hover:opacity-90 transition-opacity"
              @click="isZoomed = true"
            >
          </div>

          <!-- Right: Content -->
          <div class="space-y-6 order-1 lg:order-2">
            <div>
              <p class="text-xs text-app-muted tracking-wider mb-1">
                {{ space.tagline.toUpperCase() }}
              </p>
              <h1 class="text-4xl font-bold text-app flex items-center gap-3">
                <UIcon :name="space.icon" class="size-10 text-app-accent" />
                {{ space.name }}
              </h1>
            </div>

            <p class="text-app-muted leading-relaxed">
              {{ space.description }}
            </p>

            <!-- Stats -->
            <div class="flex flex-wrap gap-x-6 gap-y-2">
              <span class="text-sm">
                <span class="text-app-muted">FEATURES:</span>
                <span class="font-bold text-app ml-1">{{ space.features.length }}</span>
              </span>
              <span v-if="space.tools" class="text-sm">
                <span class="text-app-muted">TOOLS:</span>
                <span class="font-bold text-app ml-1">{{ space.tools.length }}</span>
              </span>
              <span v-if="space.exportFormats" class="text-sm">
                <span class="text-app-muted">EXPORTS:</span>
                <span class="font-bold text-app ml-1">{{ space.exportFormats.length }}</span>
              </span>
            </div>

            <div class="flex gap-3">
              <NuxtLink to="/download"
                class="flex items-center gap-2 px-4 py-2 rounded-md bg-app-accent text-white text-sm hover:opacity-90 transition-opacity">
                <UIcon name="lucide:download" class="size-4" />
                DOWNLOAD
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="py-24 bg-app-canvas">
      <div class="max-w-5xl mx-auto px-6">
        <div class="mb-12">
          <h2 class="text-2xl font-bold">
            <span class="text-app-accent">{{ space.name.toUpperCase() }}:</span>
            <span class="text-app">CAPABILITIES</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          <div v-for="feature in space.features" :key="feature.name" class="flex items-start gap-3">
            <UIcon :name="feature.icon" class="size-5 text-app-accent shrink-0 mt-0.5" />
            <div>
              <p class="text-sm text-app uppercase tracking-wide">
                <template v-for="(word, idx) in feature.name.split(' ')" :key="idx">
                  <span
                    :class="idx === 0 ? 'font-extralight' : idx === feature.name.split(' ').length - 1 ? 'font-bold' : 'font-normal'">{{
                      word.toUpperCase() }}</span><span v-if="idx < feature.name.split(' ').length - 1"
                    class="font-extralight">:</span>
                </template>
              </p>
              <p class="text-xs text-app-muted">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools (if available) -->
    <section v-if="space.tools" class="py-24">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div class="text-left lg:text-right">
            <p class="text-xs text-app-accent uppercase tracking-wider mb-1">
              DRAWING
            </p>
            <h2 class="text-2xl font-bold text-app">
              Tools
            </h2>
          </div>
          <div>
            <p class="text-app-muted">
              Press the key to quickly switch tools.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div v-for="tool in space.tools" :key="tool.name"
            class="flex items-center gap-3 p-3 rounded-lg bg-app-card border border-app">
            <UIcon :name="tool.icon" class="size-5 text-app-accent" />
            <div>
              <p class="text-sm font-medium text-app">{{ tool.name }}</p>
              <p class="text-xs text-app-muted font-mono">{{ tool.key }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shortcuts (if available) -->
    <section v-if="space.shortcuts" class="py-24 bg-app-canvas">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div class="text-left lg:text-right">
            <p class="text-xs text-app-accent uppercase tracking-wider mb-1">
              KEYBOARD
            </p>
            <h2 class="text-2xl font-bold text-app">
              Shortcuts
            </h2>
          </div>
          <div>
            <p class="text-app-muted">
              Work faster with keyboard shortcuts.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div v-for="shortcut in space.shortcuts" :key="shortcut.action"
            class="flex justify-between items-center p-3 rounded-lg bg-app-card border border-app">
            <span class="text-sm text-app">{{ shortcut.action }}</span>
            <span class="text-xs text-app-muted font-mono bg-white/10 px-2 py-1 rounded">{{ shortcut.mac }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Export Formats (if available) -->
    <section v-if="space.exportFormats" class="py-24">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div class="text-left lg:text-right">
            <p class="text-xs text-app-accent uppercase tracking-wider mb-1">
              OUTPUT
            </p>
            <h2 class="text-2xl font-bold text-app">
              Export Formats
            </h2>
          </div>
          <div>
            <p class="text-app-muted">
              Export your designs to code or images.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="format in space.exportFormats" :key="format.name"
            class="p-4 rounded-lg bg-app-card border border-app">
            <p class="text-sm font-medium text-app">{{ format.name }}</p>
            <p class="text-xs text-app-muted">{{ format.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Spaces -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          <div class="text-left lg:text-right">
            <p class="text-xs text-app-accent uppercase tracking-wider mb-1">
              EXPLORE
            </p>
            <h2 class="text-2xl font-bold text-app">
              Other Spaces
            </h2>
          </div>
          <div>
            <p class="text-app-muted">
              Nine integrated spaces, one platform.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink v-for="other in otherSpaces" :key="other.id" :to="`/features/${other.id}`"
            class="group flex items-center gap-3 p-3 rounded-lg hover:bg-app-card transition-colors">
            <UIcon :name="other.icon" class="size-5 text-app-accent" />
            <span class="text-sm text-app group-hover:text-app-accent transition-colors">
              {{ other.name.toUpperCase() }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-app-canvas">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div class="text-left lg:text-right">
            <p class="text-xs text-app-accent uppercase tracking-wider mb-1">
              READY?
            </p>
            <h2 class="text-2xl font-bold text-app">
              Try {{ space.name }}
            </h2>
          </div>
          <div class="space-y-4">
            <p class="text-app-muted">
              Download CONSTRUCT and start using {{ space.name }} today.
            </p>
            <NuxtLink to="/download"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-app-accent text-white text-sm hover:opacity-90 transition-opacity">
              <UIcon name="lucide:download" class="size-4" />
              DOWNLOAD FREE
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Zoom Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="isZoomed"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          @click="isZoomed = false"
        >
          <img
            src="/spaces/ui-editor.png"
            :alt="space.name"
            class="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-zoom-out"
          >
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
