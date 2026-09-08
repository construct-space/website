<script setup lang="ts">
// Per-user pricing model based on sync-api billing
const pricePerUser = 15 // $15/user/month
const trialDays = 14
const aiCreditsPerUser = 100

const features = [
  'All nine spaces included',
  'Unlimited projects',
  `${aiCreditsPerUser} AI credits per user/month`,
  'Cloud sync & backup',
  'Team collaboration',
  'Priority support',
  'Custom themes',
  'Export to all formats'
]

const faqs = [
  {
    question: 'Is there a free version?',
    answer: 'CONSTRUCT is free to download and use locally. Cloud features like sync, backup, and team collaboration require a subscription.'
  },
  {
    question: 'How does the free trial work?',
    answer: `You get ${trialDays} days of full access to all features. No credit card required to start. After the trial, you can continue using CONSTRUCT locally for free.`
  },
  {
    question: 'What are AI credits?',
    answer: `Each user gets ${aiCreditsPerUser} AI credits per month. Credits are used for AI assistance features. Unused credits roll over to the next month (up to 2x your monthly allowance).`
  },
  {
    question: 'Can I add more team members later?',
    answer: 'Yes! You can add or remove seats at any time. Billing is prorated when you make changes mid-cycle.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express) through Stripe. Enterprise customers can pay via invoice.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel anytime. Your subscription stays active until the end of the billing period. No refunds for partial months.'
  }
]
</script>

<template>
  <div class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
          PRICING
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-app mb-4">
          Simple <span class="text-app-accent">Per-User</span> Pricing
        </h1>
        <p class="text-lg text-app-muted max-w-2xl mx-auto">
          One plan with everything included. Pay only for the seats you need.
        </p>
      </div>

      <!-- Pricing Card -->
      <div class="max-w-lg mx-auto mb-24">
        <div class="p-8 rounded-2xl bg-app-accent/5 border border-app-accent">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-app mb-2">
              CONSTRUCT
            </h2>
            <p class="text-app-muted">
              Full access for your team
            </p>
          </div>

          <div class="text-center mb-8">
            <span class="text-5xl font-bold text-app">${{ pricePerUser }}</span>
            <span class="text-app-muted">/user/month</span>
          </div>

          <div class="bg-white/50 dark:bg-white/10 rounded-xl p-4 mb-8 text-center">
            <UIcon
              name="i-lucide-gift"
              class="size-5 text-app-accent inline mr-2"
            />
            <span class="text-app">{{ trialDays }}-day free trial</span>
            <span class="text-app-muted"> · No credit card required</span>
          </div>

          <ul class="space-y-3 mb-8">
            <li
              v-for="feature in features"
              :key="feature"
              class="flex items-center gap-3 text-app-muted"
            >
              <UIcon
                name="i-lucide-check"
                class="size-5 text-app-accent flex-shrink-0"
              />
              <span>{{ feature }}</span>
            </li>
          </ul>

          <NuxtLink to="/register">
            <UButton
              block
              size="lg"
              class="bg-app-accent hover:bg-app-accent/90"
            >
              Start Free Trial
            </UButton>
          </NuxtLink>

          <p class="text-xs text-app-muted text-center mt-4">
            Billed monthly. Annual billing available with 2 months free.
          </p>
        </div>
      </div>

      <!-- Enterprise -->
      <div class="max-w-3xl mx-auto mb-24">
        <div class="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-app">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 class="text-xl font-bold text-app mb-2">
                Enterprise
              </h3>
              <p class="text-app-muted">
                Need SSO, custom integrations, or dedicated support? Let's talk.
              </p>
            </div>
            <NuxtLink to="/contact">
              <UButton
                color="neutral"
                variant="outline"
                size="lg"
              >
                Contact Sales
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- FAQ -->
      <div class="max-w-3xl mx-auto">
        <h2 class="text-2xl font-bold text-app text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div class="space-y-6">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app"
          >
            <h3 class="font-semibold text-app mb-2">
              {{ faq.question }}
            </h3>
            <p class="text-app-muted">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
