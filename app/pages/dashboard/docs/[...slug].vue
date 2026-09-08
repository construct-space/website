<script setup lang="ts">
definePageMeta({
  layout: 'dashboard-docs',
  middleware: 'auth'
})

const route = useRoute()

// Build content path from route
const contentPath = computed(() => {
  const slug = route.params.slug as string[] | string
  if (!slug) return '/docs'
  const slugArray = Array.isArray(slug) ? slug : [slug]
  return '/docs/' + slugArray.join('/')
})

// Fetch document using Nuxt Content v3 API
const { data: doc, error } = await useAsyncData(
  `doc-${contentPath.value}`,
  () => queryCollection('content').path(contentPath.value).first(),
  { watch: [contentPath] }
)

// Generate breadcrumbs from slug
const breadcrumbs = computed(() => {
  const slug = route.params.slug as string[] | string
  const slugArray = Array.isArray(slug) ? slug : (slug ? [slug] : [])
  if (slugArray.length === 0) return []

  const items: { label: string, path: string }[] = []
  let currentPath = '/dashboard/docs'

  for (const part of slugArray) {
    currentPath += `/${part}`
    const label = part
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    items.push({ label, path: currentPath })
  }

  return items
})

// Set page title dynamically
const pageTitle = computed(() => {
  if (doc.value?.title) return `${doc.value.title} - Construct Docs`
  const lastBreadcrumb = breadcrumbs.value[breadcrumbs.value.length - 1]
  return lastBreadcrumb ? `${lastBreadcrumb.label} - Construct Docs` : 'Documentation - Construct'
})

useSeoMeta({
  title: pageTitle
})
</script>

<template>
  <article class="max-w-4xl">
    <!-- Breadcrumb -->
    <nav class="flex items-center gap-2 text-sm text-app-muted mb-6">
      <NuxtLink
        to="/dashboard/docs"
        class="hover:text-app"
      >Docs</NuxtLink>
      <template
        v-for="(part, index) in breadcrumbs"
        :key="index"
      >
        <UIcon
          name="i-lucide-chevron-right"
          class="w-4 h-4"
        />
        <NuxtLink
          v-if="index < breadcrumbs.length - 1"
          :to="part.path"
          class="hover:text-app"
        >
          {{ part.label }}
        </NuxtLink>
        <span
          v-else
          class="text-app"
        >{{ part.label }}</span>
      </template>
    </nav>

    <!-- Content -->
    <div
      v-if="doc"
      class="docs-content"
    >
      <h1 class="text-3xl font-bold text-app mb-4">
        {{ doc.title }}
      </h1>
      <p
        v-if="doc.description"
        class="text-xl text-app-muted mb-8"
      >
        {{ doc.description }}
      </p>
      <ContentRenderer :value="doc" />
    </div>

    <!-- Not Found -->
    <div
      v-else-if="error"
      class="text-center py-12"
    >
      <UIcon
        name="i-lucide-file-question"
        class="w-16 h-16 text-app-muted mb-4 mx-auto"
      />
      <h1 class="text-2xl font-bold text-app mb-2">
        Page Not Found
      </h1>
      <p class="text-app-muted mb-6">
        The documentation page you're looking for doesn't exist.
      </p>
      <NuxtLink
        to="/dashboard/docs"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-app-accent text-app-accent-foreground font-medium"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="w-4 h-4"
        />
        Back to Docs
      </NuxtLink>
    </div>

    <!-- Loading -->
    <div
      v-else
      class="flex items-center justify-center py-12"
    >
      <UIcon
        name="i-lucide-loader-2"
        class="w-8 h-8 text-app-muted animate-spin"
      />
    </div>
  </article>
</template>

<style scoped>
.docs-content :deep(h1) {
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--app-foreground);
  margin-bottom: 1rem;
}

.docs-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--app-foreground);
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.docs-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--app-foreground);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}

.docs-content :deep(p) {
  color: var(--app-muted);
  margin-bottom: 1rem;
  line-height: 1.625;
}

.docs-content :deep(ul),
.docs-content :deep(ol) {
  color: var(--app-muted);
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.docs-content :deep(ul) {
  list-style-type: disc;
}

.docs-content :deep(ol) {
  list-style-type: decimal;
}

.docs-content :deep(li) {
  line-height: 1.625;
  margin-bottom: 0.5rem;
}

.docs-content :deep(code) {
  background-color: rgb(244 244 245);
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
}

:root.dark .docs-content :deep(code) {
  background-color: rgb(39 39 42);
}

.docs-content :deep(pre) {
  background-color: rgb(24 24 27);
  color: rgb(244 244 245);
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

.docs-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
}

.docs-content :deep(a) {
  color: var(--app-accent);
}

.docs-content :deep(a:hover) {
  text-decoration: underline;
}

.docs-content :deep(table) {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
}

.docs-content :deep(th),
.docs-content :deep(td) {
  border: 1px solid var(--app-border);
  padding: 0.5rem 1rem;
  text-align: left;
}

.docs-content :deep(th) {
  background-color: rgb(244 244 245);
  font-weight: 600;
  color: var(--app-foreground);
}

:root.dark .docs-content :deep(th) {
  background-color: rgb(39 39 42);
}

.docs-content :deep(td) {
  color: var(--app-muted);
}

.docs-content :deep(blockquote) {
  border-left: 4px solid var(--app-accent);
  padding-left: 1rem;
  font-style: italic;
  color: var(--app-muted);
  margin: 1rem 0;
}

.docs-content :deep(strong) {
  font-weight: 600;
  color: var(--app-foreground);
}
</style>
