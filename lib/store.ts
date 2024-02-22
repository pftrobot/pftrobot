import { create } from 'zustand'

export type ThemeType = 'dark' | 'light'

interface ThemeStore {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const isDarkMode =
  typeof window !== 'undefined'
    ? window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    : false

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: isDarkMode ? 'dark' : 'light',
  setTheme: (theme) => set({ theme }),
}))
