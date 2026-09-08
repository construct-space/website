<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const router = useRouter()
const route = useRoute()
const { login, isLoading } = useAuth()

const form = ref({
  email: '',
  password: ''
})
const rememberMe = ref(false)
const error = ref('')

async function handleLogin() {
  if (!form.value.email || !form.value.password) {
    error.value = 'Please fill in all fields'
    return
  }

  error.value = ''
  const result = await login(form.value.email, form.value.password)

  if (result.success) {
    const redirect = route.query.redirect as string || '/dashboard'
    router.push(redirect)
  } else {
    error.value = result.error || 'Invalid credentials'
  }
}
</script>

<template>
  <div class="w-full max-w-md">
    <!-- Logo -->
    <div class="text-center mb-12">
      <NuxtLink
        to="/"
        class="inline-block"
      >
        <AppLogo />
      </NuxtLink>
    </div>

    <!-- Login Card -->
    <div class="bg-white/50 dark:bg-white/5 border border-app rounded-2xl p-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-app mb-2">
          Enter the CONSTRUCT
        </h1>
        <p class="text-app-muted">
          Sign in to your account
        </p>
      </div>

      <!-- Error Alert -->
      <div
        v-if="error"
        class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
      >
        {{ error }}
      </div>

      <!-- Login Form -->
      <form
        class="space-y-6"
        @submit.prevent="handleLogin"
      >
        <div class="space-y-2">
          <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Email
          </label>
          <UInput
            v-model="form.email"
            type="email"
            placeholder="you@example.com"
            size="lg"
            :disabled="isLoading"
          />
        </div>

        <div class="space-y-2">
          <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Password
          </label>
          <UInput
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            size="lg"
            :disabled="isLoading"
          />
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 cursor-pointer">
            <UCheckbox v-model="rememberMe" />
            <span class="text-sm text-app-muted">Remember me</span>
          </label>
          <NuxtLink
            to="/forgot-password"
            class="text-sm text-app-accent hover:underline"
          >
            Forgot password?
          </NuxtLink>
        </div>

        <UButton
          type="submit"
          block
          size="lg"
          :loading="isLoading"
          class="bg-app-accent hover:bg-app-accent/90"
        >
          Sign In
        </UButton>
      </form>

      <!-- Divider -->
      <div class="relative my-8">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-app" />
        </div>
        <div class="relative flex justify-center">
          <span class="px-4 text-sm text-app-muted bg-white dark:bg-zinc-900">or continue with</span>
        </div>
      </div>

      <!-- Social Login -->
      <div class="grid grid-cols-2 gap-4">
        <UButton
          color="neutral"
          variant="outline"
          size="lg"
        >
          <UIcon
            name="i-simple-icons-github"
            class="size-5 mr-2"
          />
          GitHub
        </UButton>
        <UButton
          color="neutral"
          variant="outline"
          size="lg"
        >
          <UIcon
            name="i-simple-icons-google"
            class="size-5 mr-2"
          />
          Google
        </UButton>
      </div>
    </div>

    <!-- Sign Up Link -->
    <p class="text-center mt-8 text-app-muted">
      Don't have an account?
      <NuxtLink
        to="/register"
        class="text-app-accent hover:underline font-medium"
      >
        Sign up
      </NuxtLink>
    </p>
  </div>
</template>
