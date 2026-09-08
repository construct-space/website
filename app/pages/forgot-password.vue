<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const { forgotPassword, isLoading } = useAuth()

const email = ref('')
const error = ref('')
const success = ref(false)

async function handleSubmit() {
  if (!email.value) {
    error.value = 'Please enter your email address'
    return
  }

  error.value = ''
  const result = await forgotPassword(email.value)

  if (result.success) {
    success.value = true
  } else {
    error.value = result.error || 'Failed to send reset email'
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

    <!-- Forgot Password Card -->
    <div class="bg-white/50 dark:bg-white/5 border border-app rounded-2xl p-8">
      <!-- Success State -->
      <template v-if="success">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
            <UIcon
              name="i-heroicons-envelope"
              class="size-8 text-green-500"
            />
          </div>
          <h1 class="text-2xl font-bold text-app mb-2">
            Check Your Email
          </h1>
          <p class="text-app-muted mb-6">
            We've sent a password reset link to <span class="text-app font-medium">{{ email }}</span>
          </p>
          <p class="text-sm text-app-muted mb-8">
            Didn't receive the email? Check your spam folder or try again.
          </p>
          <UButton
            variant="outline"
            color="neutral"
            size="lg"
            block
            @click="success = false; email = ''"
          >
            Try Again
          </UButton>
        </div>
      </template>

      <!-- Form State -->
      <template v-else>
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-app mb-2">
            Forgot Password?
          </h1>
          <p class="text-app-muted">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <!-- Error Alert -->
        <div
          v-if="error"
          class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
        >
          {{ error }}
        </div>

        <!-- Forgot Password Form -->
        <form
          class="space-y-6"
          @submit.prevent="handleSubmit"
        >
          <div class="space-y-2">
            <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
              Email
            </label>
            <UInput
              v-model="email"
              type="email"
              placeholder="you@example.com"
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
            Send Reset Link
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
