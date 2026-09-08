<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const { user } = useAuth()
const api = useApi()

const isLoading = ref(false)
const success = ref('')
const error = ref('')

const profileForm = ref({
  first_name: user.value?.first_name || '',
  last_name: user.value?.last_name || '',
  email: user.value?.email || ''
})

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

async function updateProfile() {
  isLoading.value = true
  error.value = ''
  success.value = ''

  try {
    await api.patch('/api/auth/profile', {
      first_name: profileForm.value.first_name,
      last_name: profileForm.value.last_name,
      email: profileForm.value.email
    })
    success.value = 'Profile updated successfully'
  } catch (e: unknown) {
    const err = e as { data?: { message?: string } }
    error.value = err.data?.message || 'Failed to update profile'
  } finally {
    isLoading.value = false
  }
}

async function updatePassword() {
  if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
    error.value = 'Passwords do not match'
    return
  }

  if (passwordForm.value.newPassword.length < 8) {
    error.value = 'Password must be at least 8 characters'
    return
  }

  isLoading.value = true
  error.value = ''
  success.value = ''

  try {
    await api.post('/api/auth/change-password', {
      current_password: passwordForm.value.currentPassword,
      new_password: passwordForm.value.newPassword
    })
    success.value = 'Password updated successfully'
    passwordForm.value = { currentPassword: '', newPassword: '', confirmPassword: '' }
  } catch (e: unknown) {
    const err = e as { data?: { message?: string } }
    error.value = err.data?.message || 'Failed to update password'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-2xl space-y-8">
    <div>
      <h1 class="text-2xl font-bold text-app">
        Account Settings
      </h1>
      <p class="text-app-muted mt-1">
        Manage your profile and security settings
      </p>
    </div>

    <!-- Success/Error Messages -->
    <div
      v-if="success"
      class="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
    >
      {{ success }}
    </div>
    <div
      v-if="error"
      class="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
    >
      {{ error }}
    </div>

    <!-- Profile Section -->
    <div class="bg-white/50 dark:bg-white/5 border border-app rounded-xl p-6">
      <h2 class="text-lg font-semibold text-app mb-6">
        Profile Information
      </h2>

      <!-- Avatar -->
      <div class="flex items-center gap-6 mb-6">
        <div class="relative">
          <div class="size-20 rounded-full bg-app-accent/20 flex items-center justify-center">
            <span class="text-2xl font-bold text-app-accent">
              {{ user?.first_name?.charAt(0) || 'U' }}
            </span>
          </div>
        </div>
        <div>
          <UButton
            color="neutral"
            variant="outline"
            size="sm"
          >
            <UIcon
              name="i-heroicons-camera"
              class="size-4 mr-2"
            />
            Change Avatar
          </UButton>
          <p class="text-xs text-app-muted mt-2">
            JPG, PNG or GIF. Max 2MB
          </p>
        </div>
      </div>

      <form
        class="space-y-5"
        @submit.prevent="updateProfile"
      >
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
              First Name
            </label>
            <UInput
              v-model="profileForm.first_name"
              type="text"
              size="lg"
              :disabled="isLoading"
            />
          </div>
          <div class="space-y-2">
            <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
              Last Name
            </label>
            <UInput
              v-model="profileForm.last_name"
              type="text"
              size="lg"
              :disabled="isLoading"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Email Address
          </label>
          <UInput
            v-model="profileForm.email"
            type="email"
            size="lg"
            :disabled="isLoading"
          />
        </div>

        <div class="pt-2">
          <UButton
            type="submit"
            :loading="isLoading"
            class="bg-app-accent hover:bg-app-accent/90"
          >
            Save Changes
          </UButton>
        </div>
      </form>
    </div>

    <!-- Password Section -->
    <div class="bg-white/50 dark:bg-white/5 border border-app rounded-xl p-6">
      <h2 class="text-lg font-semibold text-app mb-6">
        Change Password
      </h2>

      <form
        class="space-y-5"
        @submit.prevent="updatePassword"
      >
        <div class="space-y-2">
          <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Current Password
          </label>
          <UInput
            v-model="passwordForm.currentPassword"
            type="password"
            size="lg"
            :disabled="isLoading"
          />
        </div>

        <div class="space-y-2">
          <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            New Password
          </label>
          <UInput
            v-model="passwordForm.newPassword"
            type="password"
            placeholder="At least 8 characters"
            size="lg"
            :disabled="isLoading"
          />
        </div>

        <div class="space-y-2">
          <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
            Confirm New Password
          </label>
          <UInput
            v-model="passwordForm.confirmPassword"
            type="password"
            size="lg"
            :disabled="isLoading"
          />
        </div>

        <div class="pt-2">
          <UButton
            type="submit"
            :loading="isLoading"
            class="bg-app-accent hover:bg-app-accent/90"
          >
            Update Password
          </UButton>
        </div>
      </form>
    </div>

    <!-- Danger Zone -->
    <div class="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
      <h2 class="text-lg font-semibold text-red-500 mb-2">
        Danger Zone
      </h2>
      <p class="text-sm text-app-muted mb-4">
        Once you delete your account, there is no going back. Please be certain.
      </p>
      <UButton
        color="error"
        variant="outline"
      >
        Delete Account
      </UButton>
    </div>
  </div>
</template>
