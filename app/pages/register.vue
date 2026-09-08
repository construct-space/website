<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const router = useRouter()
const { register, isLoading } = useAuth()

const form = ref({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmPassword: ''
})
const error = ref('')
const acceptTerms = ref(false)

async function handleRegister() {
  // Validation
  if (!form.value.first_name || !form.value.email || !form.value.password) {
    error.value = 'Please fill in all required fields'
    return
  }

  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Passwords do not match'
    return
  }

  if (form.value.password.length < 8) {
    error.value = 'Password must be at least 8 characters'
    return
  }

  if (!acceptTerms.value) {
    error.value = 'Please accept the terms and conditions'
    return
  }

  error.value = ''
  const result = await register({
    first_name: form.value.first_name,
    last_name: form.value.last_name,
    email: form.value.email,
    password: form.value.password
  })

  if (result.success) {
    router.push('/dashboard')
  } else {
    error.value = result.error || 'Registration failed'
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

    <!-- Register Card -->
    <div class="bg-white/50 dark:bg-white/5 border border-app rounded-2xl p-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-app mb-2">
          Join the CONSTRUCT
        </h1>
        <p class="text-app-muted">
          Create your account and start building
        </p>
      </div>

      <!-- Error Alert -->
      <div
        v-if="error"
        class="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
      >
        {{ error }}
      </div>

      <!-- Register Form -->
      <form
        class="space-y-5"
        @submit.prevent="handleRegister"
      >
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
              First Name
            </label>
            <UInput
              v-model="form.first_name"
              type="text"
              placeholder="John"
              size="lg"
              :disabled="isLoading"
            />
          </div>
          <div class="space-y-2">
            <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
              Last Name
            </label>
            <UInput
              v-model="form.last_name"
              type="text"
              placeholder="Doe"
              size="lg"
              :disabled="isLoading"
            />
          </div>
        </div>

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
            placeholder="At least 8 characters"
            size="lg"
            :disabled="isLoading"
          />
        </div>

        <div class="space-y-2">
          <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Confirm Password
          </label>
          <UInput
            v-model="form.confirmPassword"
            type="password"
            placeholder="Confirm your password"
            size="lg"
            :disabled="isLoading"
          />
        </div>

        <label class="flex items-start gap-2 cursor-pointer">
          <UCheckbox
            v-model="acceptTerms"
            class="mt-1"
          />
          <span class="text-sm text-app-muted">
            I agree to the
            <NuxtLink
              to="/terms"
              class="text-app-accent hover:underline"
            >Terms of Service</NuxtLink>
            and
            <NuxtLink
              to="/privacy"
              class="text-app-accent hover:underline"
            >Privacy Policy</NuxtLink>
          </span>
        </label>

        <UButton
          type="submit"
          block
          size="lg"
          :loading="isLoading"
          class="bg-app-accent hover:bg-app-accent/90"
        >
          Create Account
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

    <!-- Sign In Link -->
    <p class="text-center mt-8 text-app-muted">
      Already have an account?
      <NuxtLink
        to="/login"
        class="text-app-accent hover:underline font-medium"
      >
        Sign in
      </NuxtLink>
    </p>
  </div>
</template>
