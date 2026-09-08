<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const { user } = useAuth()
const api = useApi()

// API Response Types
interface ApiUser {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar?: string
  role?: {
    id: number
    name: string
    slug: string
  }
  created_at: string
}

interface UsersResponse {
  data: ApiUser[]
  total: number
}

interface Company {
  id: number
  name: string
  invite_code: string
  owner_id: number
}

interface Subscription {
  id: number
  quantity: number
  plan?: {
    name: string
  }
}

interface TeamMember {
  id: number
  name: string
  email: string
  avatar?: string
  role: 'owner' | 'admin' | 'member'
  status: 'active' | 'pending'
  joinedAt: string
  isCurrentUser: boolean
}

const isLoading = ref(false)
const success = ref('')
const error = ref('')

// Fetch company by ID from user's company_id
const { data: companyData } = await useAsyncData('team-company', async () => {
  if (!user.value?.company_id) return null
  try {
    return await api.get<Company>(`/api/companies/${user.value.company_id}`)
  } catch {
    return null
  }
})

// Fetch team members (users in same company - scoped by JWT)
const { data: usersData, refresh: refreshUsers } = await useAsyncData('team-users', async () => {
  try {
    return await api.get<UsersResponse>('/api/users')
  } catch {
    return { data: [], total: 0 }
  }
})

// Fetch subscription for seat limits
const { data: subscription } = await useAsyncData('team-subscription', async () => {
  try {
    return await api.get<Subscription>('/api/billing/subscription')
  } catch {
    return null
  }
})

// Computed values
const company = computed(() => companyData.value)
const maxMembers = computed(() => subscription.value?.quantity || 5)

// Format date helper
function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

// Transform users to team member format
const teamMembers = computed<TeamMember[]>(() => {
  return (usersData.value?.data || []).map(u => ({
    id: u.id,
    name: `${u.first_name} ${u.last_name}`.trim() || u.email,
    email: u.email,
    avatar: u.avatar,
    role: company.value?.owner_id === u.id ? 'owner' : (u.role?.slug === 'admin' ? 'admin' : 'member'),
    status: 'active' as const,
    joinedAt: formatDate(u.created_at),
    isCurrentUser: u.id === user.value?.id
  }))
})
const showInviteModal = ref(false)
const showRemoveModal = ref(false)
const showRoleModal = ref(false)
const showProfileModal = ref(false)
const memberToRemove = ref<TeamMember | null>(null)
const memberToEdit = ref<TeamMember | null>(null)
const memberToView = ref<TeamMember | null>(null)

const inviteForm = ref({
  email: '',
  role: 'member' as 'admin' | 'member'
})

const roleOptions = [
  { label: 'Admin', value: 'admin', description: 'Can manage team members and settings' },
  { label: 'Member', value: 'member', description: 'Can view and edit projects' }
]

function _getRoleColor(role: string) {
  switch (role) {
    case 'owner':
      return 'bg-purple-500/10 text-purple-500'
    case 'admin':
      return 'bg-blue-500/10 text-blue-500'
    default:
      return 'bg-zinc-500/10 text-zinc-500'
  }
}

function _getStatusColor(status: string) {
  return status === 'active'
    ? 'bg-green-500/10 text-green-500'
    : 'bg-yellow-500/10 text-yellow-500'
}

function openRemoveModal(member: TeamMember) {
  memberToRemove.value = member
  showRemoveModal.value = true
}

function openRoleModal(member: TeamMember) {
  memberToEdit.value = member
  showRoleModal.value = true
}

function openProfileModal(member: TeamMember) {
  memberToView.value = member
  showProfileModal.value = true
}

async function inviteMember() {
  if (!inviteForm.value.email.trim()) {
    error.value = 'Please enter an email address'
    return
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(inviteForm.value.email)) {
    error.value = 'Please enter a valid email address'
    return
  }

  // Check if already invited
  if (teamMembers.value.some(m => m.email.toLowerCase() === inviteForm.value.email.toLowerCase())) {
    error.value = 'This email is already on your team'
    return
  }

  if (!company.value?.id) {
    error.value = 'Company not found'
    return
  }

  isLoading.value = true
  error.value = ''
  success.value = ''

  try {
    // Call API to invite member
    await api.post(`/api/companies/${company.value.id}/invite`, {
      email: inviteForm.value.email,
      role: inviteForm.value.role
    })

    success.value = `Invitation sent to ${inviteForm.value.email}`
    showInviteModal.value = false
    inviteForm.value = { email: '', role: 'member' }
    // Refresh users list
    await refreshUsers()
  } catch (e: unknown) {
    const err = e as { data?: { error?: string } }
    error.value = err.data?.error || 'Failed to send invitation'
  } finally {
    isLoading.value = false
  }
}

async function removeMember() {
  if (!memberToRemove.value) return

  isLoading.value = true
  error.value = ''
  success.value = ''

  try {
    // Call API to remove user
    await api.delete(`/api/users/${memberToRemove.value.id}`)

    success.value = memberToRemove.value.status === 'pending'
      ? 'Invitation cancelled'
      : 'Team member removed'
    showRemoveModal.value = false
    memberToRemove.value = null
    // Refresh users list
    await refreshUsers()
  } catch (e: unknown) {
    const err = e as { data?: { error?: string } }
    error.value = err.data?.error || 'Failed to remove team member'
  } finally {
    isLoading.value = false
  }
}

async function updateRole(newRole: 'admin' | 'member') {
  if (!memberToEdit.value) return

  isLoading.value = true
  error.value = ''
  success.value = ''

  try {
    // Call API to update user role
    await api.put(`/api/users/${memberToEdit.value.id}`, {
      role: newRole
    })

    success.value = 'Role updated successfully'
    showRoleModal.value = false
    memberToEdit.value = null
    // Refresh users list
    await refreshUsers()
  } catch (e: unknown) {
    const err = e as { data?: { error?: string } }
    error.value = err.data?.error || 'Failed to update role'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="h-full flex items-center justify-center px-6 py-8 lg:py-0">
    <div class="w-full max-w-4xl">
      <!-- Success/Error Messages -->
      <div
        v-if="success"
        class="p-3 mb-6 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
      >
        {{ success }}
      </div>
      <div
        v-if="error"
        class="p-3 mb-6 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
      >
        {{ error }}
      </div>

      <!-- Header Row - aligned with left column on desktop, full width on mobile -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
        <div class="text-left lg:text-right">
          <h1 class="text-2xl">
            <span class="text-app-muted">TEAM:</span>
            <span class="font-bold text-app">MEMBERS</span>
          </h1>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- LEFT: Stats -->
        <div class="space-y-8 order-2 lg:order-1">
          <!-- Stats -->
          <div class="text-left lg:text-right space-y-3">
            <div class="flex items-center lg:justify-end gap-3">
              <UIcon
                name="i-lucide-users"
                class="size-5 text-app-muted lg:order-3"
              />
              <span class="text-3xl font-bold text-app lg:order-2">{{ teamMembers.length }}</span>
              <span class="text-sm text-app-muted uppercase tracking-wider lg:order-1">Total</span>
            </div>
            <div class="flex items-center lg:justify-end gap-3">
              <UIcon
                name="i-lucide-armchair"
                class="size-5 text-app-muted lg:order-3"
              />
              <span class="text-3xl font-bold text-app lg:order-2">{{ maxMembers }}</span>
              <span class="text-sm text-app-muted uppercase tracking-wider lg:order-1">Seats</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="text-left lg:text-right">
            <button
              v-if="teamMembers.length < maxMembers"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/50 dark:bg-white/10 text-app hover:bg-app-accent hover:text-white transition-colors"
              @click="showInviteModal = true"
            >
              <UIcon
                name="i-lucide-plus"
                class="size-4"
              />
              <span class="font-medium">NEW MEMBER</span>
            </button>
          </div>

          <!-- Quick Info -->
          <div class="text-left lg:text-right space-y-2">
            <p class="text-xs text-app-muted uppercase tracking-wider">
              Invite Code
            </p>
            <p class="font-mono text-lg text-app">
              {{ company?.invite_code || '--------' }}
            </p>
          </div>
        </div>

        <!-- RIGHT: Members List -->
        <div class="space-y-2 order-2 lg:order-2">
          <button
            v-for="member in teamMembers"
            :key="member.id"
            class="w-full text-left group cursor-pointer hover:bg-white/50 dark:hover:bg-white/10 rounded-md p-3 -ml-3 transition-colors"
            @click="openProfileModal(member)"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-md bg-white/50 dark:bg-white/10 flex items-center justify-center">
                <UIcon
                  name="i-lucide-user"
                  class="size-5 text-app-muted group-hover:text-app-accent transition-colors"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-app text-lg group-hover:text-app-accent transition-colors">
                  {{ member.name.toUpperCase() }}
                </p>
                <div class="flex items-center gap-2">
                  <span class="text-xs text-app-muted">{{ member.email }}</span>
                  <span class="text-xs text-app-accent uppercase">{{ member.role }}</span>
                </div>
              </div>
              <UIcon
                name="i-lucide-chevron-right"
                class="size-4 text-app-muted opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Invite Modal -->
    <UModal v-model:open="showInviteModal">
      <template #content>
        <div class="p-6">
          <h2 class="text-lg font-semibold text-app mb-1">
            Invite Team Member
          </h2>
          <p class="text-sm text-app-muted mb-6">
            Send an invitation to join your team.
          </p>

          <form
            class="space-y-5"
            @submit.prevent="inviteMember"
          >
            <div class="space-y-2">
              <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
                Email Address
              </label>
              <UInput
                v-model="inviteForm.email"
                type="email"
                placeholder="colleague@example.com"
                size="lg"
                :disabled="isLoading"
              />
            </div>

            <div class="space-y-3">
              <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
                Role
              </label>
              <div class="space-y-2">
                <label
                  v-for="role in roleOptions"
                  :key="role.value"
                  class="flex items-start gap-3 p-3 rounded-lg border border-app cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                  :class="{ 'border-app-accent bg-app-accent/5': inviteForm.role === role.value }"
                >
                  <input
                    v-model="inviteForm.role"
                    type="radio"
                    :value="role.value"
                    class="mt-0.5"
                  >
                  <div>
                    <p class="font-medium text-app text-sm">{{ role.label }}</p>
                    <p class="text-xs text-app-muted">{{ role.description }}</p>
                  </div>
                </label>
              </div>
            </div>

            <div class="flex justify-end gap-3 pt-4">
              <UButton
                type="button"
                color="neutral"
                variant="outline"
                @click="showInviteModal = false"
              >
                Cancel
              </UButton>
              <UButton
                type="submit"
                :loading="isLoading"
                class="bg-app-accent hover:bg-app-accent/90"
              >
                Send Invitation
              </UButton>
            </div>
          </form>
        </div>
      </template>
    </UModal>

    <!-- Remove Confirmation Modal -->
    <UModal v-model:open="showRemoveModal">
      <template #content>
        <div class="p-6">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-full bg-red-500/10">
              <UIcon
                name="i-heroicons-exclamation-triangle"
                class="size-6 text-red-500"
              />
            </div>
            <div>
              <h2 class="text-lg font-semibold text-app">
                {{ memberToRemove?.status === 'pending' ? 'Cancel Invitation' : 'Remove Team Member' }}
              </h2>
              <p class="text-sm text-app-muted">
                This action cannot be undone
              </p>
            </div>
          </div>

          <p class="text-sm text-app-muted mb-6">
            <template v-if="memberToRemove?.status === 'pending'">
              Are you sure you want to cancel the invitation for <strong class="text-app">{{ memberToRemove?.email }}</strong>?
            </template>
            <template v-else>
              Are you sure you want to remove <strong class="text-app">{{ memberToRemove?.name }}</strong> from your team?
              They will immediately lose access to all team projects.
            </template>
          </p>

          <div class="flex justify-end gap-3">
            <UButton
              color="neutral"
              variant="outline"
              @click="showRemoveModal = false"
            >
              Cancel
            </UButton>
            <UButton
              color="error"
              :loading="isLoading"
              @click="removeMember"
            >
              {{ memberToRemove?.status === 'pending' ? 'Cancel Invitation' : 'Remove Member' }}
            </UButton>
          </div>
        </div>
      </template>
    </UModal>

    <!-- Change Role Modal -->
    <UModal v-model:open="showRoleModal">
      <template #content>
        <div class="p-6">
          <h2 class="text-lg font-semibold text-app mb-1">
            Change Role
          </h2>
          <p class="text-sm text-app-muted mb-6">
            Update the role for <strong class="text-app">{{ memberToEdit?.name }}</strong>
          </p>

          <div class="space-y-3">
            <label
              v-for="role in roleOptions"
              :key="role.value"
              class="flex items-start gap-3 p-3 rounded-lg border border-app cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
              :class="{ 'border-app-accent bg-app-accent/5': memberToEdit?.role === role.value }"
              @click="updateRole(role.value as 'admin' | 'member')"
            >
              <input
                type="radio"
                :checked="memberToEdit?.role === role.value"
                class="mt-0.5"
              >
              <div>
                <p class="font-medium text-app text-sm">{{ role.label }}</p>
                <p class="text-xs text-app-muted">{{ role.description }}</p>
              </div>
            </label>
          </div>

          <div class="flex justify-end gap-3 pt-6">
            <UButton
              color="neutral"
              variant="outline"
              @click="showRoleModal = false"
            >
              Cancel
            </UButton>
          </div>
        </div>
      </template>
    </UModal>

    <!-- Member Profile Modal -->
    <UModal v-model:open="showProfileModal">
      <template #content>
        <div class="p-6 min-w-[500px]">
          <div class="grid grid-cols-2 gap-8">
            <!-- LEFT: Header & Quick Info -->
            <div class="space-y-6">
              <!-- Back Link -->
              <div class="text-right">
                <button
                  class="text-sm text-app-muted hover:text-app-accent transition-colors tracking-wider"
                  @click="showProfileModal = false"
                >
                  <UIcon
                    name="i-lucide-arrow-left"
                    class="size-3 inline mr-1"
                  />
                  BACK TO TEAM
                </button>
              </div>

              <!-- Header -->
              <div class="text-right">
                <p class="text-2xl">
                  <span class="text-app-muted">USER:</span>
                  <span class="font-bold text-app">{{ memberToView?.name.toUpperCase() }}</span>
                </p>
              </div>

              <!-- Quick Info -->
              <div class="text-right space-y-4">
                <div class="flex items-center justify-end gap-3">
                  <div class="text-right">
                    <p class="text-xs text-app-muted uppercase tracking-wider">
                      Email
                    </p>
                    <p class="font-medium text-app">
                      {{ memberToView?.email }}
                    </p>
                  </div>
                  <div class="w-8 h-8 rounded-md bg-white/50 dark:bg-white/10 flex items-center justify-center">
                    <UIcon
                      name="i-lucide-mail"
                      class="size-4 text-app-muted"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-end gap-3">
                  <div class="text-right">
                    <p class="text-xs text-app-muted uppercase tracking-wider">
                      Role
                    </p>
                    <p class="font-medium text-app-accent uppercase">
                      {{ memberToView?.role }}
                    </p>
                  </div>
                  <div class="w-8 h-8 rounded-md bg-white/50 dark:bg-white/10 flex items-center justify-center">
                    <UIcon
                      name="i-lucide-shield"
                      class="size-4 text-app-muted"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-end gap-3">
                  <div class="text-right">
                    <p class="text-xs text-app-muted uppercase tracking-wider">
                      Joined
                    </p>
                    <p class="font-medium text-app">
                      {{ memberToView?.joinedAt }}
                    </p>
                  </div>
                  <div class="w-8 h-8 rounded-md bg-white/50 dark:bg-white/10 flex items-center justify-center">
                    <UIcon
                      name="i-lucide-calendar"
                      class="size-4 text-app-muted"
                    />
                  </div>
                </div>
              </div>

              <!-- Actions -->
              <div
                v-if="memberToView?.role !== 'owner' && !memberToView?.isCurrentUser"
                class="text-right pt-4 space-y-2"
              >
                <button
                  class="text-sm text-app-muted hover:text-app-accent transition-colors tracking-wider block ml-auto"
                  @click="showProfileModal = false; openRoleModal(memberToView!)"
                >
                  CHANGE ROLE
                </button>
                <button
                  class="text-sm text-red-500 hover:text-red-600 transition-colors tracking-wider block ml-auto"
                  @click="showProfileModal = false; openRemoveModal(memberToView!)"
                >
                  REMOVE USER
                </button>
              </div>
            </div>

            <!-- RIGHT: Status Info -->
            <div class="space-y-6">
              <p class="text-xs text-app-muted uppercase tracking-wider">
                Status
              </p>

              <div class="space-y-3">
                <div class="flex items-center gap-3 p-3 rounded-md bg-white/50 dark:bg-white/10">
                  <div class="w-8 h-8 rounded-md bg-green-500/10 flex items-center justify-center">
                    <UIcon
                      name="i-lucide-check-circle"
                      class="size-4 text-green-500"
                    />
                  </div>
                  <div>
                    <p class="font-bold text-app">
                      {{ memberToView?.status.toUpperCase() }}
                    </p>
                    <p class="text-xs text-app-muted">
                      Account status
                    </p>
                  </div>
                </div>

                <div
                  v-if="memberToView?.isCurrentUser"
                  class="flex items-center gap-3 p-3 rounded-md bg-white/50 dark:bg-white/10"
                >
                  <div class="w-8 h-8 rounded-md bg-app-accent/10 flex items-center justify-center">
                    <UIcon
                      name="i-lucide-user"
                      class="size-4 text-app-accent"
                    />
                  </div>
                  <div>
                    <p class="font-bold text-app">
                      YOU
                    </p>
                    <p class="text-xs text-app-muted">
                      This is your account
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </UModal>
  </div>
</template>
