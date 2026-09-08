<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - Construct',
  description: 'Learn how Construct handles your data and protects your privacy.'
})

const lastUpdated = 'January 1, 2025'
</script>

<template>
  <div class="py-24">
    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
          LEGAL
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-app mb-4">
          Privacy <span class="text-app-accent">Policy</span>
        </h1>
        <p class="text-app-muted">
          Last updated: {{ lastUpdated }}
        </p>
      </div>

      <!-- Content -->
      <div class="prose prose-zinc dark:prose-invert max-w-none">
        <div class="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-app space-y-8">
          <!-- Introduction -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Introduction
            </h2>
            <p class="text-app-muted">
              Construct ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our
              desktop application and website.
            </p>
          </section>

          <!-- Local First -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Local-First Architecture
            </h2>
            <p class="text-app-muted mb-4">
              Construct is built with a local-first architecture. This means:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Your projects, designs, and code are stored locally on your device using IndexedDB</li>
              <li>You can use most features of Construct without an internet connection</li>
              <li>Your work is not automatically uploaded to our servers</li>
              <li>You maintain full control over your data</li>
            </ul>
          </section>

          <!-- Information We Collect -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Information We Collect
            </h2>

            <h3 class="text-lg font-semibold text-app mt-6 mb-3">
              Account Information
            </h3>
            <p class="text-app-muted mb-4">
              If you create an account, we collect:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Email address</li>
              <li>Name (optional)</li>
              <li>Password (encrypted)</li>
              <li>Profile information you choose to provide</li>
            </ul>

            <h3 class="text-lg font-semibold text-app mt-6 mb-3">
              Subscription Information
            </h3>
            <p class="text-app-muted mb-4">
              If you subscribe to a paid plan, we collect:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Billing information (processed by Stripe)</li>
              <li>Subscription status and history</li>
              <li>License activation records</li>
            </ul>

            <h3 class="text-lg font-semibold text-app mt-6 mb-3">
              Usage Analytics
            </h3>
            <p class="text-app-muted mb-4">
              With your consent, we may collect anonymous usage data to improve the application:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Feature usage statistics</li>
              <li>Performance metrics</li>
              <li>Error reports</li>
            </ul>
            <p class="text-app-muted mt-4">
              You can opt out of analytics collection in the application settings.
            </p>
          </section>

          <!-- AI Features -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              AI Features
            </h2>
            <p class="text-app-muted mb-4">
              When you use AI-powered features (AI Assistant, Architect), relevant context may be
              sent to third-party AI providers (such as OpenAI or Anthropic) to process your requests.
              We recommend:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Not sharing sensitive or confidential information with AI features</li>
              <li>Reviewing the privacy policies of AI providers</li>
              <li>Using local AI models when available for sensitive work</li>
            </ul>
          </section>

          <!-- How We Use Your Information -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              How We Use Your Information
            </h2>
            <p class="text-app-muted mb-4">
              We use collected information to:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Provide and maintain the Construct application</li>
              <li>Process subscriptions and payments</li>
              <li>Send important updates about the service</li>
              <li>Improve and optimize the application</li>
              <li>Respond to support requests</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
          </section>

          <!-- Data Sharing -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Data Sharing
            </h2>
            <p class="text-app-muted mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li><strong>Service providers</strong> (Stripe for payments, AI providers for AI features)</li>
              <li><strong>Legal authorities</strong> when required by law</li>
              <li><strong>Business transfers</strong> in case of merger or acquisition</li>
            </ul>
          </section>

          <!-- Data Security -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Data Security
            </h2>
            <p class="text-app-muted">
              We implement industry-standard security measures to protect your data, including
              encryption in transit (TLS) and at rest. However, no method of transmission over
              the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <!-- Your Rights -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Your Rights
            </h2>
            <p class="text-app-muted mb-4">
              You have the right to:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
              <li>Opt out of analytics collection</li>
            </ul>
          </section>

          <!-- Cookies -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Cookies
            </h2>
            <p class="text-app-muted">
              Our website uses essential cookies to maintain sessions and remember your preferences.
              We may use analytics cookies with your consent to understand how visitors use our site.
            </p>
          </section>

          <!-- Children's Privacy -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Children's Privacy
            </h2>
            <p class="text-app-muted">
              Construct is not intended for children under 13. We do not knowingly collect personal
              information from children under 13. If you believe we have collected information from
              a child under 13, please contact us.
            </p>
          </section>

          <!-- Changes to This Policy -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Changes to This Policy
            </h2>
            <p class="text-app-muted">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <!-- Contact -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Contact Us
            </h2>
            <p class="text-app-muted mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p class="text-app-muted">
              Email: <a
                href="mailto:privacy@construct.app"
                class="text-app-accent hover:underline"
              >privacy@construct.app</a>
            </p>
          </section>
        </div>
      </div>

      <!-- Related Links -->
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink to="/terms">
          <UButton
            color="neutral"
            variant="outline"
          >
            <UIcon
              name="i-lucide-file-text"
              class="size-4 mr-2"
            />
            Terms of Service
          </UButton>
        </NuxtLink>
        <NuxtLink to="/contact">
          <UButton
            color="neutral"
            variant="outline"
          >
            <UIcon
              name="i-lucide-mail"
              class="size-4 mr-2"
            />
            Contact Us
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
