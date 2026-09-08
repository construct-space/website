<script setup lang="ts">
const platforms = [
  {
    name: 'macOS',
    icon: 'i-simple-icons-apple',
    version: '1.0.0',
    requirements: 'macOS 11.0 or later',
    downloads: [
      { label: 'Apple Silicon (M1/M2/M3)', file: 'construct-1.0.0-arm64.dmg' },
      { label: 'Intel', file: 'construct-1.0.0-x64.dmg' }
    ]
  },
  {
    name: 'Windows',
    icon: 'i-simple-icons-windows',
    version: '1.0.0',
    requirements: 'Windows 10 or later',
    downloads: [
      { label: 'Windows 64-bit', file: 'construct-1.0.0-x64.exe' },
      { label: 'Windows 32-bit', file: 'construct-1.0.0-x86.exe' }
    ]
  },
  {
    name: 'Linux',
    icon: 'i-simple-icons-linux',
    version: '1.0.0',
    requirements: 'Ubuntu 20.04 or equivalent',
    downloads: [
      { label: 'AppImage', file: 'construct-1.0.0.AppImage' },
      { label: '.deb (Debian/Ubuntu)', file: 'construct-1.0.0.deb' },
      { label: '.rpm (Fedora/RHEL)', file: 'construct-1.0.0.rpm' }
    ]
  }
]

const currentPlatform = ref<string | null>(null)

onMounted(() => {
  const userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.includes('mac')) {
    currentPlatform.value = 'macOS'
  } else if (userAgent.includes('win')) {
    currentPlatform.value = 'Windows'
  } else if (userAgent.includes('linux')) {
    currentPlatform.value = 'Linux'
  }
})

const recommendedPlatform = computed(() => {
  return platforms.find(p => p.name === currentPlatform.value) || platforms[0]
})
</script>

<template>
  <div class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
          DOWNLOAD
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-app mb-4">
          Get <span class="text-app-accent">CONSTRUCT</span>
        </h1>
        <p class="text-lg text-app-muted max-w-2xl mx-auto">
          Available for macOS, Windows, and Linux. Free to download, no account required.
        </p>
      </div>

      <!-- Recommended Download -->
      <div class="max-w-2xl mx-auto mb-16">
        <div class="p-8 rounded-2xl bg-app-accent/5 border border-app-accent">
          <div class="flex items-center gap-4 mb-6">
            <div class="p-3 rounded-xl bg-app-accent/20">
              <UIcon
                :name="recommendedPlatform.icon"
                class="size-8 text-app-accent"
              />
            </div>
            <div>
              <p class="text-xs text-app-muted uppercase tracking-wider font-semibold">
                Recommended for you
              </p>
              <h2 class="text-2xl font-bold text-app">
                {{ recommendedPlatform.name }}
              </h2>
            </div>
          </div>

          <div class="space-y-3 mb-6">
            <a
              v-for="download in recommendedPlatform.downloads"
              :key="download.file"
              :href="`/downloads/${download.file}`"
              class="flex items-center justify-between p-4 rounded-xl bg-white/50 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 transition-colors"
            >
              <span class="font-medium text-app">{{ download.label }}</span>
              <UButton
                size="sm"
                class="bg-app-accent hover:bg-app-accent/90"
              >
                <UIcon
                  name="i-lucide-download"
                  class="size-4 mr-2"
                />
                Download
              </UButton>
            </a>
          </div>

          <p class="text-sm text-app-muted">
            Version {{ recommendedPlatform.version }} · {{ recommendedPlatform.requirements }}
          </p>
        </div>
      </div>

      <!-- All Platforms -->
      <div class="mb-16">
        <h2 class="text-xl font-bold text-app text-center mb-8">
          All Platforms
        </h2>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="platform in platforms"
            :key="platform.name"
            class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app"
          >
            <div class="flex items-center gap-3 mb-4">
              <UIcon
                :name="platform.icon"
                class="size-6 text-app-muted"
              />
              <h3 class="font-semibold text-app">
                {{ platform.name }}
              </h3>
            </div>

            <div class="space-y-2 mb-4">
              <a
                v-for="download in platform.downloads"
                :key="download.file"
                :href="`/downloads/${download.file}`"
                class="block text-sm text-app-accent hover:underline"
              >
                {{ download.label }}
              </a>
            </div>

            <p class="text-xs text-app-muted">
              {{ platform.requirements }}
            </p>
          </div>
        </div>
      </div>

      <!-- System Requirements -->
      <div class="max-w-3xl mx-auto">
        <h2 class="text-xl font-bold text-app mb-6">
          System Requirements
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app">
            <h3 class="font-semibold text-app mb-4">
              Minimum
            </h3>
            <ul class="space-y-2 text-sm text-app-muted">
              <li>4 GB RAM</li>
              <li>2 GB available disk space</li>
              <li>1280x720 display resolution</li>
              <li>Internet connection for updates</li>
            </ul>
          </div>

          <div class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app">
            <h3 class="font-semibold text-app mb-4">
              Recommended
            </h3>
            <ul class="space-y-2 text-sm text-app-muted">
              <li>8 GB RAM or more</li>
              <li>SSD with 5 GB available space</li>
              <li>1920x1080 display resolution</li>
              <li>Dedicated graphics card</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Help Links -->
      <div class="text-center mt-16">
        <p class="text-app-muted mb-4">
          Need help getting started?
        </p>
        <div class="flex items-center justify-center gap-4">
          <NuxtLink
            to="/docs"
            class="text-app-accent hover:underline"
          >
            Documentation
          </NuxtLink>
          <span class="text-app-muted">·</span>
          <NuxtLink
            to="/docs/installation"
            class="text-app-accent hover:underline"
          >
            Installation Guide
          </NuxtLink>
          <span class="text-app-muted">·</span>
          <a
            href="https://github.com/construct"
            class="text-app-accent hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
