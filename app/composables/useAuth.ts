/**
 * Authentication composable for user management
 * Matches sync-api authentication endpoints
 */

interface User {
  id: number
  first_name: string
  last_name: string
  username: string
  email: string
  phone?: string
  avatar_url?: string
  role_id?: number
  role_name?: string
  company_id?: number
}

interface AuthResponse extends User {
  accessToken: string
  exp: number
}

interface RegisterData {
  first_name: string
  last_name: string
  username?: string
  phone?: string
  email: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

export function useAuth() {
  const api = useApi()
  const router = useRouter()

  const token = useCookie('auth_token', {
    maxAge: 60 * 60 * 24 * 30 // 30 days
  })

  const user = useState<User | null>('auth_user', () => null)
  const isLoading = useState('auth_loading', () => false)
  const initialized = useState('auth_initialized', () => false)

  const loggedIn = computed(() => !!token.value && !!user.value)

  /**
   * Fetch current user from token
   */
  async function fetchUser() {
    if (!token.value || initialized.value) return

    try {
      const response = await api.get<User>('/api/profile')
      user.value = response
    } catch {
      // Token invalid, clear it
      token.value = null
      user.value = null
    } finally {
      initialized.value = true
    }
  }

  // Auto-fetch user if token exists but user is not loaded
  if (import.meta.client && token.value && !user.value && !initialized.value) {
    fetchUser()
  }

  /**
   * Login with email and password
   */
  async function login(email: string, password: string) {
    isLoading.value = true

    try {
      const response = await api.post<AuthResponse>('/api/auth/login', {
        email,
        password
      } as LoginData)

      token.value = response.accessToken
      user.value = {
        id: response.id,
        first_name: response.first_name,
        last_name: response.last_name,
        username: response.username,
        email: response.email,
        phone: response.phone,
        avatar_url: response.avatar_url,
        role_id: response.role_id,
        role_name: response.role_name
      }

      return { success: true }
    } catch (error: unknown) {
      const err = error as { data?: { error?: string } }
      return {
        success: false,
        error: err.data?.error || 'Invalid credentials'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Register a new account
   */
  async function register(data: RegisterData) {
    isLoading.value = true

    try {
      const response = await api.post<AuthResponse>('/api/auth/register', data)

      token.value = response.accessToken
      user.value = {
        id: response.id,
        first_name: response.first_name,
        last_name: response.last_name,
        username: response.username,
        email: response.email,
        phone: response.phone,
        avatar_url: response.avatar_url
      }

      return { success: true }
    } catch (error: unknown) {
      const err = error as { data?: { error?: string } }
      return {
        success: false,
        error: err.data?.error || 'Registration failed'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Logout and clear session
   */
  async function logout() {
    try {
      await api.post('/api/auth/logout')
    } catch {
      // Ignore logout errors
    }

    token.value = null
    user.value = null
    router.push('/login')
  }

  /**
   * Request password reset
   */
  async function forgotPassword(email: string) {
    try {
      await api.post('/api/auth/forgot-password', { email })
      return { success: true }
    } catch (error: unknown) {
      const err = error as { data?: { error?: string } }
      return {
        success: false,
        error: err.data?.error || 'Failed to send reset email'
      }
    }
  }

  /**
   * Reset password with token
   */
  async function resetPassword(email: string, resetToken: string, newPassword: string) {
    try {
      await api.post('/api/auth/reset-password', {
        email,
        token: resetToken,
        new_password: newPassword
      })
      return { success: true }
    } catch (error: unknown) {
      const err = error as { data?: { error?: string } }
      return {
        success: false,
        error: err.data?.error || 'Failed to reset password'
      }
    }
  }

  // Computed name helper
  const userName = computed(() => {
    if (!user.value) return null
    return `${user.value.first_name} ${user.value.last_name}`.trim() || user.value.username
  })

  return {
    user: readonly(user),
    userName,
    token: readonly(token),
    loggedIn,
    isLoading: readonly(isLoading),
    initialized: readonly(initialized),
    fetchUser,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword
  }
}
