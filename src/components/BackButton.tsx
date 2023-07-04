import Link from 'next/link'

import { Undo2 as Back } from 'lucide-react'
import { styled } from 'styled-components'

interface BackProps {
  path: string
}

const Container = styled.div`
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-size: 14px;
    font-weight: 500;
    line-height: 150%;

    > svg {
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 1px solid var(--text-dark-inputs);
      padding: 2px;
    }
  }
`

export function BackButton({ path }: BackProps) {
  return (
    <Container>
      <Link href={path}>
        <Back /> Voltar
      </Link>
    </Container>
  )
}
