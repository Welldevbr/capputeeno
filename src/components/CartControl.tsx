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

  :hover {
    color: #cdcccc !important;
  }
`

const Container = styled.div`
  position: relative;
  transition: 0.5ms ease-out;

  :hover {
    opacity: 0.9;
  }
`

export function CartControl() {
  const { value } = useLocalStorage('Cart-items', [1, 2])

  return (
    <Container>
      <ShoppingBag />
      {value.length && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
