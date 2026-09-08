<script setup lang="ts">
useSeoMeta({
  title: 'Contact - Construct',
  description: 'Get in touch with the Construct team. We\'d love to hear from you.'
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const error = ref('')

const subjects = [
  'General Inquiry',
  'Technical Support',
  'Sales Question',
  'Partnership',
  'Feature Request',
  'Bug Report',
  'Other'
]

async function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.subject || !form.value.message) {
    error.value = 'Please fill in all fields'
    return
  }

  error.value = ''
  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  isSubmitting.value = false
  isSubmitted.value = true
}

function resetForm() {
  form.value = { name: '', email: '', subject: '', message: '' }
  isSubmitted.value = false
}
</script>

<template>
  <div class="py-24">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-xs text-app-muted uppercase tracking-wider font-semibold mb-4">
          CONTACT
        </p>
        <h1 class="text-4xl md:text-5xl font-bold text-app mb-4">
          Get in <span class="text-app-accent">Touch</span>
        </h1>
        <p class="text-lg text-app-muted max-w-2xl mx-auto">
          Have a question or feedback? We'd love to hear from you.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app">
            <div class="w-12 h-12 rounded-xl bg-app-accent/20 flex items-center justify-center mb-4">
              <UIcon
                name="i-lucide-mail"
                class="size-6 text-app-accent"
              />
            </div>
            <h3 class="font-semibold text-app mb-2">
              Email
            </h3>
            <p class="text-app-muted text-sm">
              support@construct.app
            </p>
          </div>

          <div class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app">
            <div class="w-12 h-12 rounded-xl bg-app-accent/20 flex items-center justify-center mb-4">
              <UIcon
                name="i-lucide-message-circle"
                class="size-6 text-app-accent"
              />
            </div>
            <h3 class="font-semibold text-app mb-2">
              Community
            </h3>
            <p class="text-app-muted text-sm">
              Join our Discord for real-time help
            </p>
          </div>

          <div class="p-6 rounded-xl bg-white/50 dark:bg-white/5 border border-app">
            <div class="w-12 h-12 rounded-xl bg-app-accent/20 flex items-center justify-center mb-4">
              <UIcon
                name="i-lucide-file-text"
                class="size-6 text-app-accent"
              />
            </div>
            <h3 class="font-semibold text-app mb-2">
              Documentation
            </h3>
            <p class="text-app-muted text-sm">
              Check our docs for quick answers
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <div class="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-app">
            <!-- Success State -->
            <div
              v-if="isSubmitted"
              class="text-center py-12"
            >
              <div class="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <UIcon
                  name="i-lucide-check"
                  class="size-8 text-green-500"
                />
              </div>
              <h2 class="text-2xl font-bold text-app mb-2">
                Message Sent
              </h2>
              <p class="text-app-muted mb-8">
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <UButton
                color="neutral"
                variant="outline"
                @click="resetForm"
              >
                Send Another Message
              </UButton>
            </div>

            <!-- Form -->
            <form
              v-else
              class="space-y-6"
              @submit.prevent="handleSubmit"
            >
              <!-- Error Alert -->
              <div
                v-if="error"
                class="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
              >
                {{ error }}
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
                    Name
                  </label>
                  <UInput
                    v-model="form.name"
                    placeholder="Your name"
                    size="lg"
                    :disabled="isSubmitting"
                  />
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
                    :disabled="isSubmitting"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
                  Subject
                </label>
                <USelect
                  v-model="form.subject"
                  :items="subjects"
                  placeholder="Select a subject"
                  size="lg"
                  :disabled="isSubmitting"
                />
              </div>

              <div class="space-y-2">
                <label class="text-xs text-app-muted uppercase tracking-wider font-semibold">
                  Message
                </label>
                <UTextarea
                  v-model="form.message"
                  placeholder="How can we help you?"
                  :rows="6"
                  size="lg"
                  :disabled="isSubmitting"
                />
              </div>

              <UButton
                type="submit"
                size="lg"
                :loading="isSubmitting"
                class="bg-app-accent hover:bg-app-accent/90"
              >
                <UIcon
                  name="i-lucide-send"
                  class="size-4 mr-2"
                />
                Send Message
              </UButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
