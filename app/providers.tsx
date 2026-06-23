'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

function ThemedToaster() {
  const { resolvedTheme } = useTheme()
  return <Toaster richColors position='bottom-right' theme={(resolvedTheme as 'light' | 'dark') ?? 'dark'} />
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
      <ThemedToaster />
    </ThemeProvider>
  )
}
