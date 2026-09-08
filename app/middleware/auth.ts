/**
 * Auth middleware - protects dashboard routes
 */
export default defineNuxtRouteMiddleware(async (to) => {
  const { loggedIn, fetchUser, token } = useAuth()

  // If we have a token but no user, try to fetch
  if (token.value && !loggedIn.value) {
    await fetchUser()
  }

  // Redirect to login if not authenticated
  if (!loggedIn.value) {
    return navigateTo({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
})
