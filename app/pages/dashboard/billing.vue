<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth'
})

const api = useApi()

// API Response Types
interface Plan {
  id: number
  name: string
  slug: string
  description: string
  price_per_user_cents: number
  currency: string
  billing_interval: string
  trial_days: number
  ai_credits_per_user: number
  features: Record<string, unknown> | null
}

interface Subscription {
  id: number
  status: string
  quantity: number
  current_period_start: string
  current_period_end: string
  cancel_at_period_end: boolean
  plan?: {
    id: number
    name: string
    slug: string
  }
}

interface Invoice {
  id: string
  amount_due: number
  amount_paid: number
  currency: string
  status: string
  invoice_url: string
  invoice_pdf: string
  created_at: string
  paid_at?: string
}

// Fetch plans from API
const { data: plansData } = await useAsyncData('billing-plans', async () => {
  try {
    return await api.get<Plan[]>('/api/billing/plans')
  } catch {
    return []
  }
})

// Fetch current subscription
const { data: subscription, refresh: refreshSubscription } = await useAsyncData('billing-subscription', async () => {
  try {
    return await api.get<Subscription>('/api/billing/subscription')
  } catch {
    return null
  }
})

// Fetch invoices
const { data: invoicesData } = await useAsyncData('billing-invoices', async () => {
  try {
    return await api.get<Invoice[]>('/api/billing/invoices')
  } catch {
    return []
  }
})

// Computed values
const currentPlan = computed(() => subscription.value?.plan?.slug || 'trial')
const planStatus = computed(() => subscription.value?.status || 'trialing')
const plans = computed(() => {
  return (plansData.value || []).map(plan => ({
    ...plan,
    price: formatPrice(plan.price_per_user_cents, plan.currency),
    period: plan.billing_interval === 'month' ? 'per month' : plan.billing_interval === 'year' ? 'per year' : plan.billing_interval,
    current: plan.slug === currentPlan.value,
    popular: plan.slug === 'pro'
  }))
})

const invoices = computed(() => {
  return (invoicesData.value || []).map(inv => ({
    id: inv.id,
    date: formatDate(inv.created_at),
    amount: formatPrice(inv.amount_paid || inv.amount_due, inv.currency),
    status: inv.status === 'paid' ? 'Paid' : inv.status,
    url: inv.invoice_pdf || inv.invoice_url
  }))
})

// Helper functions
function formatPrice(cents: number, currency: string): string {
  const amount = cents / 100
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency || 'USD'
  }).format(amount)
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

// Loading states
const isLoading = ref(false)
const error = ref('')

// Checkout - redirect to Stripe
async function handleUpgrade(planSlug: string) {
  isLoading.value = true
  error.value = ''

  try {
    const response = await api.post<{ url: string }>('/api/billing/checkout', {
      plan_slug: planSlug,
      quantity: 1,
      success_url: `${window.location.origin}/dashboard/billing?success=true`,
      cancel_url: `${window.location.origin}/dashboard/billing?canceled=true`
    })

    if (response.url) {
      window.location.href = response.url
    }
  } catch (e: unknown) {
    const err = e as { data?: { error?: string } }
    error.value = err.data?.error || 'Failed to start checkout'
  } finally {
    isLoading.value = false
  }
}

// Manage subscription - redirect to Stripe portal
async function handleManageSubscription() {
  isLoading.value = true
  error.value = ''

  try {
    const response = await api.post<{ url: string }>('/api/billing/portal', {
      return_url: `${window.location.origin}/dashboard/billing`
    })

    if (response.url) {
      window.location.href = response.url
    }
  } catch (e: unknown) {
    const err = e as { data?: { error?: string } }
    error.value = err.data?.error || 'Failed to open billing portal'
  } finally {
    isLoading.value = false
  }
}

// Download invoice
function downloadInvoice(url: string) {
  if (url) {
    window.open(url, '_blank')
  }
}

// Check URL params for success/cancel messages
const route = useRoute()
const successMessage = ref('')

onMounted(() => {
  if (route.query.success === 'true') {
    successMessage.value = 'Subscription updated successfully!'
    refreshSubscription()
  }
})
</script>

<template>
  <div class="h-full flex items-center justify-center px-6 py-8 lg:py-0">
    <div class="w-full max-w-4xl">
      <!-- Success/Error Messages -->
      <div
        v-if="successMessage"
        class="p-3 mb-6 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm"
      >
        {{ successMessage }}
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
            <span class="text-app-muted">BILLING:</span>
            <span class="font-bold text-app">SUBSCRIPTION</span>
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
                name="i-lucide-crown"
                class="size-5 text-app-muted lg:order-3"
              />
              <span class="text-3xl font-bold text-app lg:order-2">{{ (subscription?.plan?.name || 'Trial').toUpperCase() }}</span>
              <span class="text-sm text-app-muted uppercase tracking-wider lg:order-1">Plan</span>
            </div>
            <div class="flex items-center lg:justify-end gap-3">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 text-app-muted lg:order-3"
              />
              <span
                class="text-xl font-bold lg:order-2"
                :class="planStatus === 'active' ? 'text-green-500' : planStatus === 'trialing' ? 'text-amber-500' : 'text-red-500'"
              >
                {{ planStatus === 'active' ? 'ACTIVE' : planStatus === 'trialing' ? 'TRIAL' : planStatus === 'past_due' ? 'PAST DUE' : 'CANCELED' }}
              </span>
              <span class="text-sm text-app-muted uppercase tracking-wider lg:order-1">Status</span>
            </div>
            <div
              v-if="subscription?.current_period_end"
              class="flex items-center lg:justify-end gap-3"
            >
              <UIcon
                name="i-lucide-calendar"
                class="size-5 text-app-muted lg:order-3"
              />
              <span class="text-lg font-bold text-app lg:order-2">{{ formatDate(subscription.current_period_end).toUpperCase() }}</span>
              <span class="text-sm text-app-muted uppercase tracking-wider lg:order-1">{{ subscription.cancel_at_period_end ? 'Expires' : 'Renews' }}</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="text-left lg:text-right space-y-2">
            <p class="text-xs text-app-muted uppercase tracking-wider">
              Manage
            </p>
            <button
              v-if="planStatus !== 'trialing'"
              class="text-sm text-app-muted hover:text-app-accent transition-colors tracking-wider"
              :disabled="isLoading"
              @click="handleManageSubscription"
            >
              SUBSCRIPTION
            </button>
            <button
              class="block lg:ml-auto text-sm text-app-muted hover:text-app-accent transition-colors tracking-wider"
              :disabled="isLoading"
              @click="handleManageSubscription"
            >
              PAYMENT METHODS
            </button>
          </div>
        </div>

        <!-- RIGHT: Plans & Invoices -->
        <div class="space-y-8 order-2 lg:order-2">
          <!-- Plans Section -->
          <div class="space-y-4">
            <p class="text-xs text-app-muted uppercase tracking-wider">
              Available Plans
            </p>
            <div class="space-y-2">
              <button
                v-for="plan in plans"
                :key="plan.name"
                class="w-full text-left group hover:bg-white/50 dark:hover:bg-white/10 rounded-md p-3 -ml-3 transition-colors"
                :class="{ 'cursor-default': plan.current, 'cursor-pointer': !plan.current }"
                :disabled="plan.current || isLoading"
                @click="!plan.current && handleUpgrade(plan.slug)"
              >
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-md bg-white/50 dark:bg-white/10 flex items-center justify-center">
                    <UIcon
                      :name="plan.current ? 'i-lucide-check' : 'i-lucide-sparkles'"
                      class="size-5 text-app-muted group-hover:text-app-accent transition-colors"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="font-bold text-app text-lg group-hover:text-app-accent transition-colors">
                      {{ plan.name.toUpperCase() }}
                    </p>
                    <div class="flex items-center gap-2">
                      <span class="text-xs text-app-muted">{{ plan.price }}/{{ plan.period }}</span>
                      <span
                        v-if="plan.current"
                        class="text-xs text-app-accent uppercase"
                      >Current</span>
                      <span
                        v-if="plan.popular && !plan.current"
                        class="text-xs text-amber-500 uppercase"
                      >Popular</span>
                    </div>
                  </div>
                  <UIcon
                    v-if="!plan.current"
                    name="i-lucide-chevron-right"
                    class="size-4 text-app-muted opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </button>
            </div>
          </div>

          <!-- Invoices Section -->
          <div
            v-if="invoices.length > 0"
            class="space-y-4"
          >
            <p class="text-xs text-app-muted uppercase tracking-wider">
              Billing History
            </p>
            <div class="space-y-2">
              <div
                v-for="invoice in invoices"
                :key="invoice.id"
                class="flex items-center gap-3 p-3 -ml-3 hover:bg-white/50 dark:hover:bg-white/10 rounded-md transition-colors"
              >
                <div class="w-10 h-10 rounded-md bg-white/50 dark:bg-white/10 flex items-center justify-center">
                  <UIcon
                    name="i-lucide-receipt"
                    class="size-5 text-app-muted"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-bold text-app text-sm font-mono">
                    {{ invoice.id }}
                  </p>
                  <div class="flex items-center gap-2">
                    <span class="text-xs text-app-muted">{{ invoice.date }}</span>
                    <span class="text-xs text-app-accent">{{ invoice.amount }}</span>
                    <span
                      class="text-xs uppercase"
                      :class="invoice.status === 'Paid' ? 'text-green-500' : 'text-yellow-500'"
                    >
                      {{ invoice.status }}
                    </span>
                  </div>
                </div>
                <button
                  v-if="invoice.url"
                  class="p-2 text-app-muted hover:text-app-accent transition-colors"
                  @click="downloadInvoice(invoice.url)"
                >
                  <UIcon
                    name="i-lucide-download"
                    class="size-4"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State for Invoices -->
          <div
            v-else
            class="space-y-4"
          >
            <p class="text-xs text-app-muted uppercase tracking-wider">
              Billing History
            </p>
            <p class="text-app-muted text-sm">
              No invoices yet
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
