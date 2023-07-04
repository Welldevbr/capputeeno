import { ButtonHTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

interface ButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonWraper = styled.button<ButtonWrapperProps>`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: var(--brand-blue);
  border-radius: 4px;

  color: var(--shapes-light);
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;

  transition: 0.3s all ease-out;
  cursor: pointer;

  > svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    filter: brightness(0.93);
  }
`

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonWraper {...props}>{children}</ButtonWraper>
}
