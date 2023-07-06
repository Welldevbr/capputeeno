import { ButtonHTMLAttributes, ReactNode } from 'react'
import { styled } from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  sucess?: boolean
}

interface ButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variation?: boolean
}

const ButtonWraper = styled.button<ButtonWrapperProps>`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: ${({ variation }) =>
    variation ? 'var(--brand-green)' : 'var(--brand-blue)'};
  border-radius: 4px;

  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-transform: uppercase;

  transition: 0.3s all ease-out;

  > svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    filter: brightness(0.93);
  }
`

export function Button({ children, sucess, ...props }: ButtonProps) {
  return (
    <ButtonWraper variation={sucess} {...props}>
      {children}
    </ButtonWraper>
  )
}
