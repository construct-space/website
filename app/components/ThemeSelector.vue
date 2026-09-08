<script setup lang="ts">
const { themes, currentThemeId, currentTheme, setTheme, initTheme } = useAppTheme()

// Initialize on mount
onMounted(() => {
  initTheme()
})

// Watch for theme changes
watch(currentThemeId, () => {
  const theme = themes.find(t => t.id === currentThemeId.value)
  if (theme) {
    setTheme(theme.id)
  }
})

const isOpen = ref(false)

function selectTheme(themeId: string) {
  setTheme(themeId)
  isOpen.value = false
}

// Get theme icon based on mode
function getThemeIcon(theme: typeof themes[0]) {
  if (theme.id === 'auto') return 'i-lucide-monitor'
  return theme.mode === 'light' ? 'i-lucide-sun' : 'i-lucide-moon'
}
</script>

<template>
  <div class="relative">
    <button
      class="flex items-center gap-2 px-3 py-2 rounded-lg text-app-muted hover:text-app hover:bg-app-card transition-colors text-sm"
      @click="isOpen = !isOpen"
    >
      <UIcon
        :name="getThemeIcon(currentTheme)"
        class="size-4"
      />
      <span class="hidden sm:inline">{{ currentTheme.name }}</span>
      <UIcon
        name="i-lucide-chevron-down"
        class="size-3"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute bottom-full mb-2 right-0 w-56 max-h-80 overflow-y-auto rounded-xl bg-app-card border border-app shadow-lg z-50"
      >
        <div class="p-2">
          <button
            v-for="theme in themes"
            :key="theme.id"
            class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
            :class="currentThemeId === theme.id ? 'bg-app-accent/10 text-app-accent' : 'text-app-muted hover:text-app hover:bg-app'"
            @click="selectTheme(theme.id)"
          >
            <UIcon
              :name="getThemeIcon(theme)"
              class="size-4 shrink-0"
            />
            <span class="text-sm">{{ theme.name }}</span>
            <UIcon
              v-if="currentThemeId === theme.id"
              name="i-lucide-check"
              class="size-4 ml-auto text-app-accent"
            />
          </button>
        </div>
      </div>
    </Transition>

    <!-- Backdrop to close dropdown -->
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40"
      @click="isOpen = false"
    />
  </div>
</template>
