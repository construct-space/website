/**
 * App-wide theme composable
 * Provides theme selection with CSS variables
 */

export interface AppTheme {
  id: string
  name: string
  mode: 'light' | 'dark'
  colors: {
    background: string
    foreground: string
    muted: string
    accent: string
    accentForeground: string
    border: string
    cardBg: string
    canvasBg: string
  }
}

// Available app themes - matching CONSTRUCT app
export const appThemes: AppTheme[] = [
  {
    id: 'auto',
    name: 'Auto (System)',
    mode: 'dark',
    colors: {
      background: '#1a1a2e',
      foreground: '#e5e5e5',
      muted: '#6b7280',
      accent: '#ec4899',
      accentForeground: '#ffffff',
      border: '#2a2a40',
      cardBg: '#22223a',
      canvasBg: '#12121e'
    }
  },
  {
    id: 'vs',
    name: 'Light',
    mode: 'light',
    colors: {
      background: '#ffffff',
      foreground: '#1e293b',
      muted: '#64748b',
      accent: '#3b82f6',
      accentForeground: '#ffffff',
      border: '#e5e7eb',
      cardBg: '#ffffff',
      canvasBg: '#f9fafb'
    }
  },
  {
    id: 'vs-dark',
    name: 'Dark',
    mode: 'dark',
    colors: {
      background: '#1e1e1e',
      foreground: '#d4d4d4',
      muted: '#6b7280',
      accent: '#569cd6',
      accentForeground: '#ffffff',
      border: '#333333',
      cardBg: '#252526',
      canvasBg: '#1a1a1a'
    }
  },
  {
    id: 'synthwave-84',
    name: 'Synthwave \'84',
    mode: 'dark',
    colors: {
      background: '#262335',
      foreground: '#ffffff',
      muted: '#848bbd',
      accent: '#ff7edb',
      accentForeground: '#000000',
      border: '#34294f',
      cardBg: '#2a2139',
      canvasBg: '#1e1a29'
    }
  },
  {
    id: 'dracula',
    name: 'Dracula',
    mode: 'dark',
    colors: {
      background: '#282a36',
      foreground: '#f8f8f2',
      muted: '#6272a4',
      accent: '#bd93f9',
      accentForeground: '#000000',
      border: '#44475a',
      cardBg: '#2d2f3d',
      canvasBg: '#21222c'
    }
  },
  {
    id: 'one-dark',
    name: 'One Dark',
    mode: 'dark',
    colors: {
      background: '#282c34',
      foreground: '#abb2bf',
      muted: '#5c6370',
      accent: '#61afef',
      accentForeground: '#000000',
      border: '#3e4451',
      cardBg: '#2c313a',
      canvasBg: '#21252b'
    }
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    mode: 'dark',
    colors: {
      background: '#011627',
      foreground: '#d6deeb',
      muted: '#637777',
      accent: '#82aaff',
      accentForeground: '#000000',
      border: '#122d42',
      cardBg: '#0b253a',
      canvasBg: '#000c1d'
    }
  },
  {
    id: 'github-dark',
    name: 'GitHub Dark',
    mode: 'dark',
    colors: {
      background: '#0d1117',
      foreground: '#c9d1d9',
      muted: '#8b949e',
      accent: '#58a6ff',
      accentForeground: '#000000',
      border: '#21262d',
      cardBg: '#161b22',
      canvasBg: '#010409'
    }
  },
  {
    id: 'monokai',
    name: 'Monokai',
    mode: 'dark',
    colors: {
      background: '#272822',
      foreground: '#f8f8f2',
      muted: '#75715e',
      accent: '#f92672',
      accentForeground: '#ffffff',
      border: '#3e3d32',
      cardBg: '#2d2e27',
      canvasBg: '#1e1f1c'
    }
  },
  {
    id: 'nord',
    name: 'Nord',
    mode: 'dark',
    colors: {
      background: '#2e3440',
      foreground: '#d8dee9',
      muted: '#616e88',
      accent: '#88c0d0',
      accentForeground: '#000000',
      border: '#3b4252',
      cardBg: '#3b4252',
      canvasBg: '#242933'
    }
  },
  {
    id: 'cobalt2',
    name: 'Cobalt2',
    mode: 'dark',
    colors: {
      background: '#193549',
      foreground: '#ffffff',
      muted: '#0088ff',
      accent: '#ffc600',
      accentForeground: '#000000',
      border: '#1f4662',
      cardBg: '#1e3a50',
      canvasBg: '#122738'
    }
  },
  {
    id: 'material',
    name: 'Material',
    mode: 'dark',
    colors: {
      background: '#263238',
      foreground: '#eeffff',
      muted: '#546e7a',
      accent: '#89ddff',
      accentForeground: '#000000',
      border: '#37474f',
      cardBg: '#2c393f',
      canvasBg: '#1e272c'
    }
  },
  {
    id: 'tokyo-night',
    name: 'Tokyo Night',
    mode: 'dark',
    colors: {
      background: '#1a1b26',
      foreground: '#c0caf5',
      muted: '#565f89',
      accent: '#7aa2f7',
      accentForeground: '#ffffff',
      border: '#292e42',
      cardBg: '#1f2335',
      canvasBg: '#16161e'
    }
  },
  {
    id: 'hc-black',
    name: 'High Contrast Dark',
    mode: 'dark',
    colors: {
      background: '#000000',
      foreground: '#ffffff',
      muted: '#808080',
      accent: '#ffff00',
      accentForeground: '#000000',
      border: '#333333',
      cardBg: '#0a0a0a',
      canvasBg: '#000000'
    }
  },
  {
    id: 'hc-light',
    name: 'High Contrast Light',
    mode: 'light',
    colors: {
      background: '#ffffff',
      foreground: '#000000',
      muted: '#808080',
      accent: '#0000ff',
      accentForeground: '#ffffff',
      border: '#cccccc',
      cardBg: '#ffffff',
      canvasBg: '#f5f5f5'
    }
  }
]

// Local storage key for theme
const THEME_STORAGE_KEY = 'construct-website-theme'

export const useAppTheme = () => {
  const colorMode = useColorMode()

  // Current theme ID from localStorage
  const currentThemeId = useState<string>('themeId', () => {
    if (import.meta.client) {
      return localStorage.getItem(THEME_STORAGE_KEY) || 'auto'
    }
    return 'auto'
  })

  // Get the actual theme object
  const currentTheme = computed(() => {
    const id = currentThemeId.value
    if (id === 'auto') {
      // Return theme based on system preference
      return colorMode.value === 'dark'
        ? appThemes.find(t => t.id === 'synthwave-84')! // Default dark theme
        : appThemes.find(t => t.id === 'vs')!
    }
    return appThemes.find(t => t.id === id) || appThemes[0]
  })

  // Set theme by ID
  const setTheme = (themeId: string) => {
    const theme = appThemes.find(t => t.id === themeId)
    if (!theme) return

    currentThemeId.value = themeId

    // Update color mode
    if (themeId === 'auto') {
      colorMode.preference = 'system'
    } else {
      colorMode.preference = theme.mode
    }

    // Save to localStorage
    if (import.meta.client) {
      localStorage.setItem(THEME_STORAGE_KEY, themeId)
    }

    // Apply CSS variables
    applyThemeColors(theme)
  }

  // Apply theme CSS variables to document
  const applyThemeColors = (theme: AppTheme) => {
    if (!import.meta.client) return

    const root = document.documentElement
    root.style.setProperty('--app-background', theme.colors.background)
    root.style.setProperty('--app-foreground', theme.colors.foreground)
    root.style.setProperty('--app-muted', theme.colors.muted)
    root.style.setProperty('--app-accent', theme.colors.accent)
    root.style.setProperty('--app-accent-foreground', theme.colors.accentForeground)
    root.style.setProperty('--app-border', theme.colors.border)
    root.style.setProperty('--app-card-bg', theme.colors.cardBg)
    root.style.setProperty('--app-canvas-bg', theme.colors.canvasBg)
  }

  // Initialize theme on mount
  const initTheme = () => {
    if (!import.meta.client) return

    const storedId = localStorage.getItem(THEME_STORAGE_KEY) || 'auto'
    currentThemeId.value = storedId

    const theme = storedId === 'auto'
      ? (colorMode.value === 'dark' ? appThemes.find(t => t.id === 'synthwave-84')! : appThemes.find(t => t.id === 'vs')!)
      : appThemes.find(t => t.id === storedId) || appThemes[0]

    if (storedId !== 'auto') {
      colorMode.preference = theme.mode
    }

    applyThemeColors(theme)
  }

  return {
    themes: appThemes,
    currentThemeId,
    currentTheme,
    setTheme,
    initTheme
  }
}
