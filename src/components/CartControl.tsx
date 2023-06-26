import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ShoppingBag } from 'lucide-react'
import styled from 'styled-components'

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  padding: 0 5px;

  margin-left: -10px;

  font-size: 10px;
  font-weight: 500;

  border-radius: 100%;
  background: var(--delete-color);
  color: white;
`

const Container = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.3s ease-out all;

  > svg {
    color: var(--text-dark);
  }

  &:hover {
    > svg {
      color: var(--text-dark-inputs);
    }
  }
`

export function CartControl() {
  const { value } = useLocalStorage('Card-items', [])

  return (
    <Container>
      <ShoppingBag />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
