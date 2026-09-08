<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service - Construct',
  description: 'Read the terms and conditions for using Construct.'
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
          Terms of <span class="text-app-accent">Service</span>
        </h1>
        <p class="text-app-muted">
          Last updated: {{ lastUpdated }}
        </p>
      </div>

      <!-- Content -->
      <div class="prose prose-zinc dark:prose-invert max-w-none">
        <div class="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-app space-y-8">
          <!-- Agreement -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Agreement to Terms
            </h2>
            <p class="text-app-muted">
              By accessing or using Construct ("the Application"), you agree to be bound by these
              Terms of Service and our Privacy Policy. If you do not agree to these terms, do not
              use the Application.
            </p>
          </section>

          <!-- Description of Service -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Description of Service
            </h2>
            <p class="text-app-muted">
              Construct is a desktop application that provides integrated tools for design,
              development, and project management. The Application includes features such as
              a UI designer, code editor, Git integration, terminal, AI assistant, task management,
              notes, team chat, and project scaffolding.
            </p>
          </section>

          <!-- Account Registration -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Account Registration
            </h2>
            <p class="text-app-muted mb-4">
              Some features of Construct require an account. When creating an account, you agree to:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <!-- Subscription and Payment -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Subscription and Payment
            </h2>

            <h3 class="text-lg font-semibold text-app mt-6 mb-3">
              Free Tier
            </h3>
            <p class="text-app-muted">
              Construct offers a free tier with core functionality. Free tier usage is subject
              to fair use limits.
            </p>

            <h3 class="text-lg font-semibold text-app mt-6 mb-3">
              Paid Subscriptions
            </h3>
            <p class="text-app-muted mb-4">
              Paid subscriptions provide access to additional features. By subscribing, you agree to:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Pay the subscription fee at the start of each billing period</li>
              <li>Automatic renewal unless cancelled before the renewal date</li>
              <li>Per-seat pricing based on the number of users on your account</li>
            </ul>

            <h3 class="text-lg font-semibold text-app mt-6 mb-3">
              Trial Period
            </h3>
            <p class="text-app-muted">
              Paid plans may include a 14-day free trial. You may cancel at any time during the
              trial period without being charged.
            </p>

            <h3 class="text-lg font-semibold text-app mt-6 mb-3">
              Refunds
            </h3>
            <p class="text-app-muted">
              We offer a 30-day money-back guarantee for first-time subscribers. Contact support
              within 30 days of your first payment for a full refund.
            </p>
          </section>

          <!-- License -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              License Grant
            </h2>
            <p class="text-app-muted mb-4">
              Subject to these Terms, we grant you a limited, non-exclusive, non-transferable,
              revocable license to:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Download and install the Application on devices you own or control</li>
              <li>Use the Application for personal or commercial purposes</li>
              <li>Create and export content using the Application</li>
            </ul>
          </section>

          <!-- Restrictions -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Restrictions
            </h2>
            <p class="text-app-muted mb-4">
              You agree not to:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Reverse engineer, decompile, or disassemble the Application</li>
              <li>Modify, adapt, or create derivative works based on the Application</li>
              <li>Remove or alter any proprietary notices or labels</li>
              <li>Use the Application to violate any laws or regulations</li>
              <li>Share your account credentials with others</li>
              <li>Circumvent any technical limitations or security measures</li>
              <li>Use the Application to develop a competing product</li>
              <li>Resell or redistribute the Application without authorization</li>
            </ul>
          </section>

          <!-- Your Content -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Your Content
            </h2>
            <p class="text-app-muted mb-4">
              You retain all rights to content you create using Construct. By using the Application:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>You are responsible for the content you create and share</li>
              <li>You grant us limited rights to process your content as needed to provide the service</li>
              <li>Your local content remains on your device unless you choose to sync or share it</li>
            </ul>
          </section>

          <!-- AI Features -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              AI Features
            </h2>
            <p class="text-app-muted mb-4">
              The Application includes AI-powered features. When using these features:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Content you submit may be processed by third-party AI providers</li>
              <li>AI outputs are provided "as is" without warranty of accuracy</li>
              <li>You are responsible for reviewing and validating AI-generated content</li>
              <li>AI credits are allocated per your subscription plan and may have usage limits</li>
            </ul>
          </section>

          <!-- Intellectual Property -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Intellectual Property
            </h2>
            <p class="text-app-muted">
              The Application, including its code, design, features, and documentation, is owned
              by Construct and protected by intellectual property laws. The Construct name, logo,
              and all related marks are our trademarks.
            </p>
          </section>

          <!-- Disclaimer of Warranties -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Disclaimer of Warranties
            </h2>
            <p class="text-app-muted">
              THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APPLICATION WILL BE UNINTERRUPTED,
              ERROR-FREE, OR SECURE. YOUR USE OF THE APPLICATION IS AT YOUR OWN RISK.
            </p>
          </section>

          <!-- Limitation of Liability -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Limitation of Liability
            </h2>
            <p class="text-app-muted">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
              REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY. OUR TOTAL LIABILITY SHALL NOT
              EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <!-- Indemnification -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Indemnification
            </h2>
            <p class="text-app-muted">
              You agree to indemnify and hold harmless Construct and its affiliates from any claims,
              damages, losses, or expenses arising from your use of the Application or violation
              of these Terms.
            </p>
          </section>

          <!-- Termination -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Termination
            </h2>
            <p class="text-app-muted mb-4">
              We may suspend or terminate your access to the Application at any time for:
            </p>
            <ul class="list-disc list-inside text-app-muted space-y-2">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of subscription fees</li>
              <li>Extended periods of inactivity</li>
            </ul>
            <p class="text-app-muted mt-4">
              Upon termination, your right to use the Application ceases immediately. Your local
              data remains on your device.
            </p>
          </section>

          <!-- Changes to Terms -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Changes to Terms
            </h2>
            <p class="text-app-muted">
              We may modify these Terms at any time. We will notify you of material changes via
              email or in-app notification. Continued use of the Application after changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <!-- Governing Law -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Governing Law
            </h2>
            <p class="text-app-muted">
              These Terms are governed by the laws of the State of Delaware, United States,
              without regard to conflict of law principles. Any disputes shall be resolved
              in the courts of Delaware.
            </p>
          </section>

          <!-- Contact -->
          <section>
            <h2 class="text-xl font-bold text-app mb-4">
              Contact
            </h2>
            <p class="text-app-muted mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <p class="text-app-muted">
              Email: <a
                href="mailto:legal@construct.app"
                class="text-app-accent hover:underline"
              >legal@construct.app</a>
            </p>
          </section>
        </div>
      </div>

      <!-- Related Links -->
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <NuxtLink to="/privacy">
          <UButton
            color="neutral"
            variant="outline"
          >
            <UIcon
              name="i-lucide-shield"
              class="size-4 mr-2"
            />
            Privacy Policy
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
