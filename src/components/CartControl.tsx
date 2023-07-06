import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ShoppingBag } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface CartCountProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Container = styled.button<CartCountProps>`
  position: relative;
  cursor: pointer;
  transition: 0.3s ease-out all;
  top: 3px;

  > svg {
    color: var(--text-dark);
    width: 20px;
  }

  &:hover {
    > svg {
      color: var(--orange-low);
    }
  }

  @media (min-width: ${({ theme }) => theme.desktopDevice}) {
    top: 0;

    > svg {
      width: 32px;
    }
  }
`

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  padding: 2px 5px;

  margin-left: -10px;

  font-size: 10px;
  font-weight: 500;

  border-radius: 100%;
  background: var(--delete-color);
  color: white;
`

export function CartControl({ ...props }: CartCountProps) {
  const { value } = useLocalStorage('cart-items', [])

  return (
    <Container {...props}>
      <ShoppingBag />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
