'use client'
import { styled } from 'styled-components'

export const DefaultPageLayout = styled.section`
  padding: 12px 20px;
  min-height: 100vh;
  background: var(--bg-light);

  @media (min-width: ${({ theme }) => theme.mobileDevice}) {
    padding: 12px 24px;
  }

  @media (min-width: ${({ theme }) => theme.desktopDevice}) {
    padding: 34px 160px;
  }
`
