/**
 * Licenses composable for license key and device management
 * Integrates with sync-api licensing endpoints
 */

// License model
export interface License {
  id: number
  key: string
  user_id: number
  subscription_id?: number
  status: 'active' | 'inactive' | 'expired' | 'revoked'
  max_devices: number
  active_devices: number
  expires_at?: string
  activated_at?: string
  created_at: string
  updated_at: string
}

// Device model
export interface Device {
  id: number
  license_id: number
  device_id: string
  device_name: string
  device_type: 'desktop' | 'laptop' | 'tablet' | 'mobile'
  platform: 'macos' | 'windows' | 'linux' | 'ios' | 'android'
  platform_version?: string
  app_version?: string
  last_seen_at: string
  activated_at: string
  is_current: boolean
}

// Request types
interface ActivateLicenseRequest {
  key: string
  device_id?: string
  device_name?: string
  device_type?: string
  platform?: string
  platform_version?: string
  app_version?: string
}

// Response types
interface LicensesResponse {
  licenses: License[]
}

interface DevicesResponse {
  devices: Device[]
}

interface ActivateLicenseResponse {
  license: License
  device?: Device
}

export function useLicenses() {
  const api = useApi()

  const licenses = useState<License[]>('licenses_list', () => [])
  const devices = useState<Device[]>('licenses_devices', () => [])
  const isLoading = useState('licenses_loading', () => false)

  /**
   * Get user's licenses
   */
  async function getLicenses() {
    isLoading.value = true

    try {
      const response = await api.get<LicensesResponse>('/licenses')
      licenses.value = response.licenses
      return { success: true, data: response.licenses }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to fetch licenses'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Activate a license key
   */
  async function activateLicense(
    key: string,
    deviceInfo?: {
      device_id?: string
      device_name?: string
      device_type?: string
      platform?: string
      platform_version?: string
      app_version?: string
    }
  ) {
    isLoading.value = true

    try {
      const response = await api.post<ActivateLicenseResponse>('/licenses/activate', {
        key,
        ...deviceInfo
      } as ActivateLicenseRequest)

      // Refresh licenses list
      await getLicenses()

      return { success: true, data: response }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to activate license'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Deactivate a license
   */
  async function deactivateLicense(licenseId: number) {
    isLoading.value = true

    try {
      await api.delete(`/licenses/${licenseId}`)

      // Refresh licenses list
      await getLicenses()

      return { success: true }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to deactivate license'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Get activated devices for the user
   */
  async function getDevices() {
    isLoading.value = true

    try {
      const response = await api.get<DevicesResponse>('/licenses/devices')
      devices.value = response.devices
      return { success: true, data: response.devices }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to fetch devices'
      }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Revoke a device from a license
   */
  async function revokeDevice(deviceId: number) {
    isLoading.value = true

    try {
      await api.delete(`/licenses/devices/${deviceId}`)

      // Refresh devices list
      await getDevices()

      return { success: true }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string } }
      return {
        success: false,
        error: err.data?.message || 'Failed to revoke device'
      }
    } finally {
      isLoading.value = false
    }
  }

  // Computed helpers
  const activeLicenses = computed(() => {
    return licenses.value.filter(l => l.status === 'active')
  })

  const hasActiveLicense = computed(() => {
    return activeLicenses.value.length > 0
  })

  const totalDeviceSlots = computed(() => {
    return licenses.value.reduce((sum, l) => sum + l.max_devices, 0)
  })

  const usedDeviceSlots = computed(() => {
    return licenses.value.reduce((sum, l) => sum + l.active_devices, 0)
  })

  const availableDeviceSlots = computed(() => {
    return totalDeviceSlots.value - usedDeviceSlots.value
  })

  const currentDevice = computed(() => {
    return devices.value.find(d => d.is_current) || null
  })

  return {
    licenses: readonly(licenses),
    devices: readonly(devices),
    isLoading: readonly(isLoading),
    activeLicenses,
    hasActiveLicense,
    totalDeviceSlots,
    usedDeviceSlots,
    availableDeviceSlots,
    currentDevice,
    getLicenses,
    activateLicense,
    deactivateLicense,
    getDevices,
    revokeDevice
  }
}
