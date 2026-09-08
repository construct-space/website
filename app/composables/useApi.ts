/**
 * Base API composable for sync-api integration
 */
export function useApi() {
  const config = useRuntimeConfig()
  const token = useCookie('auth_token')

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    onRequest({ options }) {
      // Add API key header (required by sync-api)
      options.headers = {
        ...options.headers,
        'X-Api-Key': config.public.apiKey
      }

      // Add auth token if available
      if (token.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token.value}`
        }
      }
    },
    onResponseError({ response }) {
      if (response.status === 401) {
        token.value = null
        navigateTo('/login')
      }
    }
  })

  return {
    get: <T>(url: string) => api<T>(url, { method: 'GET' }),
    post: <T>(url: string, body?: unknown) => api<T>(url, { method: 'POST', body }),
    put: <T>(url: string, body?: unknown) => api<T>(url, { method: 'PUT', body }),
    patch: <T>(url: string, body?: unknown) => api<T>(url, { method: 'PATCH', body }),
    delete: <T>(url: string) => api<T>(url, { method: 'DELETE' })
  }
}
