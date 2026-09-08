/**
 * Guest middleware - redirects logged-in users to dashboard
 */
export default defineNuxtRouteMiddleware(() => {
  const { loggedIn } = useAuth()

  if (loggedIn.value) {
    return navigateTo('/dashboard')
  }
})
