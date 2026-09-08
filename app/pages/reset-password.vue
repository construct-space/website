<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const route = useRoute()
const router = useRouter()
const { resetPassword, isLoading } = useAuth()

const form = ref({
  password: '',
  confirmPassword: ''
})
const error = ref('')
const success = ref(false)

// Get token and email from URL query
const token = computed(() => route.query.token as string)
const email = computed(() => route.query.email as string)

// Redirect if no token or email
onMounted(() => {
  if (!token.value || !email.value) {
    router.push('/forgot-password')
  }
})

async function handleSubmit() {
  // Validate form
  if (!form.value.password || !form.value.confirmPassword) {
    error.value = 'Please fill in all fields'
    return
  }

  if (form.value.password.length < 8) {
    error.value = 'Password must be at least 8 characters'
    return
  }

  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Passwords do not match'
    return
  }

  if (!token.value || !email.value) {
    error.value = 'Invalid reset link'
    return
  }

  error.value = ''
  const result = await resetPassword(email.value, token.value, form.value.password)

  if (result.success) {
    success.value = true
  } else {
    error.value = result.error || 'Failed to reset password'
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

    <!-- Reset Password Card -->
    <div class="bg-white/50 dark:bg-white/5 border border-app rounded-2xl p-8">
      <!-- Success State -->
      <template v-if="success">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
            <UIcon
              name="i-heroicons-check-circle"
              class="size-8 text-green-500"
            />
          </div>
          <h1 class="text-2xl font-bold text-app mb-2">
            Password Reset!
          </h1>
          <p class="text-app-muted mb-8">
            Your password has been successfully reset. You can now sign in with your new password.
          </p>
          <UButton
            size="lg"
            block
            class="bg-app-accent hover:bg-app-accent/90"
            @click="router.push('/login')"
          >
            Sign In
          </UButton>
        </div>
      </template>

      <!-- No Token/Email State -->
      <template v-else-if="!token || !email">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
            <UIcon
              name="i-heroicons-exclamation-triangle"
              class="size-8 text-red-500"
            />
          </div>
          <h1 class="text-2xl font-bold text-app mb-2">
            Invalid Link
          </h1>
          <p class="text-app-muted mb-8">
            This password reset link is invalid or has expired. Please request a new one.
          </p>
          <UButton
            size="lg"
            block
            class="bg-app-accent hover:bg-app-accent/90"
            @click="router.push('/forgot-password')"
          >
            Request New Link
          </UButton>
        </div>
      </template>

      <!-- Form State -->
      <template v-else>
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-app mb-2">
            Reset Password
          </h1>
          <p class="text-app-muted">
            Enter your new password below
          </p>
        </div>

        <!-- Error Alert -->
        <div
          v-if="error"
          class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
        >
          {{ error }}
        </div>

        <!-- Reset Password Form -->
        <form
          class="space-y-6"
          @submit.prevent="handleSubmit"
        >
          <div class="space-y-2">
            <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
              New Password
            </label>
            <UInput
              v-model="form.password"
              type="password"
              placeholder="Enter new password"
              size="lg"
              :disabled="isLoading"
            />
            <p class="text-xs text-app-muted">
              Must be at least 8 characters
            </p>
          </div>

          <div class="space-y-2">
            <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
              Confirm Password
            </label>
            <UInput
              v-model="form.confirmPassword"
              type="password"
              placeholder="Confirm new password"
              size="lg"
              :disabled="isLoading"
            />
          </div>

          <UButton
            type="submit"
            block
            size="lg"
            :loading="isLoading"
            class="bg-app-accent hover:bg-app-accent/90"
          >
            Reset Password
          </UButton>
        </form>
      </template>
    </div>

    <!-- Back to Login Link -->
    <p class="text-center mt-8 text-app-muted">
      Remember your password?
      <NuxtLink
        to="/login"
        class="text-app-accent hover:underline font-medium"
      >
        Sign in
      </NuxtLink>
    </p>
  </div>
</template>
