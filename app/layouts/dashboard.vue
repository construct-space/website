<script setup lang="ts">
const { userName, logout } = useAuth()
const { themes, currentThemeId, setTheme } = useAppTheme()

// User menu state
const showUserMenu = ref<boolean | string>(false)

// Sidebar navigation - icon only like Construct app
const sidebarItems = [
  { label: 'Home', icon: 'i-lucide-home', to: '/dashboard' },
  { label: 'Billing', icon: 'i-lucide-credit-card', to: '/dashboard/billing' },
  { label: 'Teams', icon: 'i-lucide-users', to: '/dashboard/teams' }
]

const bottomItems = [
  { label: 'Documentation', icon: 'i-lucide-book-open', to: '/dashboard/docs' },
  { label: 'Settings', icon: 'i-lucide-settings', to: '/dashboard/account' }
]

// User menu items
const userMenuItems = [
  { label: 'User', icon: 'i-lucide-users', section: true },
  { label: 'Profile', icon: 'i-lucide-user', to: '/dashboard/account' },
  { label: 'Account Settings', icon: 'i-lucide-settings', to: '/dashboard/account' },
  { label: 'Company', icon: 'i-lucide-building-2', to: '/dashboard/teams' },
  { label: 'Theme', icon: 'i-lucide-palette', action: 'theme' },
  { label: 'Log out', icon: 'i-lucide-log-out', action: 'logout' }
]

interface MenuItem {
  label: string
  icon: string
  to?: string
  action?: string
  section?: boolean
}

function handleMenuClick(item: MenuItem) {
  if (item.action === 'logout') {
    logout()
    showUserMenu.value = false
  } else if (item.action === 'theme') {
    showUserMenu.value = 'themes'
  } else if (item.to) {
    showUserMenu.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-app flex">
    <!-- Sidebar - Icon only like Construct -->
    <aside class="fixed left-0 top-0 bottom-0 w-[72px] bg-app border-r border-app flex flex-col items-center py-6 z-50">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="mb-6"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 533 533"
          fill="var(--app-accent)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M266.5 410.156C230.912 410.156 199.106 402.203 171.081 386.297C143.056 370.39 121.036 348.519 105.022 320.684C89.0072 292.848 81 261.256 81 225.909C81 190.12 89.0072 158.308 105.022 130.472C121.036 102.636 143.056 80.7655 171.081 64.8593C199.106 48.9531 230.912 41 266.5 41C302.087 41 333.671 48.9531 361.252 64.8593C389.277 80.7655 411.297 102.636 427.311 130.472C443.326 158.308 451.555 190.12 452 225.909C452 261.256 443.77 292.848 427.311 320.684C411.297 348.519 389.277 370.39 361.252 386.297C333.671 402.203 302.087 410.156 266.5 410.156ZM266.5 363.763C292.301 363.763 315.433 357.798 335.896 345.868C356.359 333.939 372.373 317.591 383.939 296.824C395.505 276.058 401.288 252.42 401.288 225.909C401.288 199.399 395.505 175.761 383.939 154.994C372.373 133.786 356.359 117.217 335.896 105.287C315.433 93.3579 292.301 87.393 266.5 87.393C240.699 87.393 217.567 93.3579 197.104 105.287C176.641 117.217 160.405 133.786 148.394 154.994C136.828 175.761 131.045 199.399 131.045 225.909C131.045 252.42 136.828 276.058 148.394 296.824C160.405 317.591 176.641 333.939 197.104 345.868C217.567 357.798 240.699 363.763 266.5 363.763Z"
          />
          <path
            d="M378.22 451.578C393.077 451.578 405.121 460.85 405.121 472.289C405.121 483.727 393.077 493 378.22 493H160.945C146.089 493 134.044 483.727 134.044 472.289C134.044 460.85 146.089 451.578 160.945 451.578H378.22Z"
          />
        </svg>
      </NuxtLink>

      <!-- Navigation Icons -->
      <nav class="flex-1 flex flex-col items-center gap-1">
        <UTooltip
          v-for="item in sidebarItems"
          :key="item.to"
          :text="item.label"
          :content="{
            align: 'center',
            side: 'right',
            sideOffset: 8
          }"
        >
          <NuxtLink
            :to="item.to"
            class="flex items-center justify-center w-12 h-12 rounded-xl text-app-muted hover:bg-white/10 dark:hover:bg-white/5 hover:text-app-accent transition-all"
            active-class="!bg-[var(--app-accent)]/10 !text-app-accent"
          >
            <UIcon
              :name="item.icon"
              class="size-5"
            />
          </NuxtLink>
        </UTooltip>
      </nav>

      <!-- Bottom Items -->
      <div class="flex flex-col items-center gap-1">
        <UTooltip
          v-for="item in bottomItems"
          :key="item.to"
          :text="item.label"
          :content="{
            align: 'center',
            side: 'right',
            sideOffset: 8
          }"
        >
          <NuxtLink
            :to="item.to"
            class="flex items-center justify-center w-12 h-12 rounded-xl text-app-muted hover:bg-white/10 dark:hover:bg-white/5 hover:text-app-accent transition-all"
            active-class="!bg-[var(--app-accent)]/10 !text-app-accent"
          >
            <UIcon
              :name="item.icon"
              class="size-5"
            />
          </NuxtLink>
        </UTooltip>

        <!-- User Avatar at Bottom -->
        <div class="relative mt-4">
          <UTooltip
            text="Account"
            :content="{
              align: 'center',
              side: 'right',
              sideOffset: 8
            }"
          >
            <button
              class="size-10 rounded-full bg-app-accent/20 flex items-center justify-center text-sm font-medium text-app hover:bg-app-accent/30 transition-colors"
              @click="showUserMenu = !showUserMenu"
            >
              {{ userName?.charAt(0)?.toUpperCase() || 'U' }}
            </button>
          </UTooltip>

          <!-- User Menu Popup -->
          <Transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div
              v-if="showUserMenu"
              class="absolute left-full bottom-0 ml-3 w-56 rounded-xl bg-app-card border border-app shadow-lg z-50"
            >
              <!-- User Header -->
              <div class="px-4 py-3 border-b border-app flex items-center gap-3">
                <div
                  class="size-8 rounded-full bg-app-accent/20 flex items-center justify-center text-xs font-medium text-app"
                >
                  {{ userName?.charAt(0)?.toUpperCase() || 'U' }}
                </div>
                <span class="text-sm font-medium text-app">{{ userName || 'User' }}</span>
              </div>

              <!-- Menu Items -->
              <div class="p-2">
                <template
                  v-for="item in userMenuItems"
                  :key="item.label"
                >
                  <!-- Section Header -->
                  <div
                    v-if="item.section"
                    class="px-3 py-2 text-xs text-app-muted tracking-wider flex items-center gap-2"
                  >
                    <UIcon
                      :name="item.icon"
                      class="size-4"
                    />
                    {{ item.label }}
                  </div>

                  <!-- Theme Submenu Trigger -->
                  <button
                    v-else-if="item.action === 'theme'"
                    class="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-app-muted hover:text-app hover:bg-app transition-colors"
                    @click.stop="showUserMenu = 'themes'"
                  >
                    <div class="flex items-center gap-3">
                      <UIcon
                        :name="item.icon"
                        class="size-4"
                      />
                      <span class="text-sm">{{ item.label }}</span>
                    </div>
                    <UIcon
                      name="i-lucide-chevron-right"
                      class="size-3"
                    />
                  </button>

                  <!-- Regular Menu Item -->
                  <component
                    :is="item.to ? 'NuxtLink' : 'button'"
                    v-else
                    :to="item.to"
                    class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-app-muted hover:text-app hover:bg-app transition-colors"
                    @click="handleMenuClick(item)"
                  >
                    <UIcon
                      :name="item.icon"
                      class="size-4"
                    />
                    <span class="text-sm">{{ item.label }}</span>
                  </component>
                </template>
              </div>

              <!-- Theme Submenu -->
              <div
                v-if="showUserMenu === 'themes'"
                class="absolute left-full bottom-0 ml-2 w-56 max-h-80 overflow-y-auto rounded-xl bg-app-card border border-app shadow-lg"
              >
                <div class="p-2">
                  <button
                    v-for="theme in themes"
                    :key="theme.id"
                    class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                    :class="currentThemeId === theme.id ? 'bg-app-accent/10 text-app-accent' : 'text-app-muted hover:text-app hover:bg-app'"
                    @click="setTheme(theme.id); showUserMenu = false"
                  >
                    <UIcon
                      :name="theme.mode === 'light' ? 'i-lucide-sun' : 'i-lucide-moon'"
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
            </div>
          </Transition>

          <!-- Backdrop -->
          <div
            v-if="showUserMenu"
            class="fixed inset-0 z-40"
            @click="showUserMenu = false"
          />
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 ml-[72px] p-8">
      <slot />
    </main>
  </div>
</template>
