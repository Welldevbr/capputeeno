'use client'

import { FilterBar, ProductsList } from '@/components'
import { styled } from 'styled-components'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 20px;
  min-height: 100vh;
  background: var(--bg-light);

  @media (min-width: ${({ theme }) => theme.desktopDevice}) {
    padding: 34px 160px;
  }

  @media (min-width: ${({ theme }) => theme.mobileDevice}) {
    padding: 12px 24px;
  }
`

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductsList />
    </PageWrapper>
  )
}
