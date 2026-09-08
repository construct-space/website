/**
 * Subscription composable for billing and plan management
 * Integrates with sync-api billing endpoints
 */

// Plan model based on sync-api billing/models.go
export interface Plan {
  id: number
  name: string
  slug: string
  description: string
  price_per_user_cents: number
  currency: string
  billing_interval: 'month' | 'year'
  trial_days: number
  ai_credits_per_user: number
  max_rollover_multiplier: number
  features?: Record<string, unknown>
}

// Subscription model based on sync-api billing/models.go
export interface Subscription {
  id: number
  company_id: number
  plan?: Plan
  status: 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid'
  quantity: number
  current_period_start: string
  current_period_end: string
  trial_end?: string
  canceled_at?: string
  cancel_at_period_end: boolean
  days_until_renewal: number
  days_until_trial_end?: number
}

// Invoice model based on sync-api billing/models.go
export interface Invoice {
  id: number
  amount_due_cents: number
  amount_paid_cents: number
  currency: string
  status: 'draft' | 'open' | 'paid' | 'void' | 'uncollectible'
  paid_at?: string
  invoice_url: string
  invoice_pdf: string
  description: string
  created_at: string
}

// Request types based on sync-api billing/models.go
interface CreateCheckoutRequest {
  plan_slug: string
  quantity: number
  success_url: string
  cancel_url: string
}

interface UpdateSeatsRequest {
  quantity: number
}

interface CreatePortalRequest {
  return_url: string
}

// Response types
interface CheckoutResponse {
  checkout_url: string
  session_id: string
}

interface PortalResponse {
  portal_url: string
}

interface PlansResponse {
  plans: Plan[]
}

interface InvoicesResponse {
  invoices: Invoice[]
}

export function useSubscription() {
  const api = useApi()

  const subscription = useState<Subscription | null>('billing_subscription', () => null)
  const plans = useState<Plan[]>('billing_plans', () => [])
  const invoices = useState<Invoice[]>('billing_invoices', () => [])
  const isLoading = useState('billing_loading', () => false)

  /**
   * Get current subscription
   */
  async function getSubscription() {
    isLoading.value = true

    try {
      const response = await api.get<Subscription>('/subscription')
      subscription.value = response
      return { success: true, data: response }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to fetch subscription'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Get available plans
   */
  async function getPlans() {
    isLoading.value = true

    try {
      const response = await api.get<PlansResponse>('/subscription/plans')
      plans.value = response.plans
      return { success: true, data: response.plans }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to fetch plans'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Create Stripe checkout session
   */
  async function createCheckout(
    planSlug: string,
    quantity: number,
    successUrl: string,
    cancelUrl: string
  ) {
    isLoading.value = true

    try {
      const response = await api.post<CheckoutResponse>('/subscription/checkout', {
        plan_slug: planSlug,
        quantity,
        success_url: successUrl,
        cancel_url: cancelUrl
      } as CreateCheckoutRequest)

      return { success: true, data: response }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to create checkout session'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Update subscription seats
   */
  async function updateSeats(quantity: number) {
    isLoading.value = true

    try {
      const response = await api.patch<Subscription>('/subscription/seats', {
        quantity
      } as UpdateSeatsRequest)

      subscription.value = response
      return { success: true, data: response }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to update seats'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Cancel subscription
   */
  async function cancelSubscription() {
    isLoading.value = true

    try {
      await api.delete('/subscription')

      // Refresh subscription to get updated status
      await getSubscription()

      return { success: true }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to cancel subscription'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Get invoices
   */
  async function getInvoices() {
    isLoading.value = true

    try {
      const response = await api.get<InvoicesResponse>('/subscription/invoices')
      invoices.value = response.invoices
      return { success: true, data: response.invoices }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to fetch invoices'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Create Stripe billing portal session
   */
  async function createBillingPortal(returnUrl: string) {
    isLoading.value = true

    try {
      const response = await api.post<PortalResponse>('/subscription/portal', {
        return_url: returnUrl
      } as CreatePortalRequest)

      return { success: true, data: response }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to create billing portal session'
      }
    } finally {
      isLoading.value = false
    }
  }

  // Computed helpers
  const isActive = computed(() => {
    return subscription.value?.status === 'active' || subscription.value?.status === 'trialing'
  })

  const isTrialing = computed(() => {
    return subscription.value?.status === 'trialing'
  })

  const isCanceled = computed(() => {
    return subscription.value?.status === 'canceled' || subscription.value?.cancel_at_period_end
  })

  const currentPlan = computed(() => {
    return subscription.value?.plan || null
  })

  const formattedPrice = computed(() => {
    if (!subscription.value?.plan) return null
    const price = subscription.value.plan.price_per_user_cents / 100
    const currency = subscription.value.plan.currency.toUpperCase()
    const interval = subscription.value.plan.billing_interval
    return `${currency} ${price.toFixed(2)}/${interval}`
  })

  return {
    subscription: readonly(subscription),
    plans: readonly(plans),
    invoices: readonly(invoices),
    isLoading: readonly(isLoading),
    isActive,
    isTrialing,
    isCanceled,
    currentPlan,
    formattedPrice,
    getSubscription,
    getPlans,
    createCheckout,
    updateSeats,
    cancelSubscription,
    getInvoices,
    createBillingPortal
  }
}
