export default defineNuxtPlugin(async () => {
  const { fetchUser, token } = useAuth()

  // Fetch user on app init if token exists
  if (token.value) {
    await fetchUser()
  }
})
