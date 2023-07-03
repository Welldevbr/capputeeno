'use client'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FilterContextProvider } from '@/contexts/FilterContexts'
import { ThemeProvider } from 'styled-components'

interface DefaultProviderProps {
  children: ReactNode
}

const theme = {
  desktopDevice: '768px',
  mobileDevice: '500px',
}

export function DefaultProviders({ children }: DefaultProviderProps) {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <FilterContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </FilterContextProvider>
    </QueryClientProvider>
  )
}
