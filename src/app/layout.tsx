import { ReactNode } from 'react'
import { Metadata } from 'next'
import './globals.css'
import { Saira } from 'next/font/google'
import { Header } from '@/components'
import { FilterContextProvider } from '@/contexts/FilterContexts'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'Powered by well dev',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={saira.className}>
        <FilterContextProvider>
          <Header />
          {children}
        </FilterContextProvider>
      </body>
    </html>
  )
}
