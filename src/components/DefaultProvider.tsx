'use client'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FilterContextProvider } from '@/contexts/FilterContexts'
import { ThemeProvider } from 'styled-components'

interface DefaultProviderProps {
  children: ReactNode
}

const theme = {
  desktopBreakpoint: '768px',
  mobileBreakpoint: '500px',
}

export function DefaultProvider({ children }: DefaultProviderProps) {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}
