import { Search } from 'lucide-react'
import { InputHTMLAttributes } from 'react'
import { styled } from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

const PrimaryInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;

  color: var(--text-dark);
  background: var(--bg-secondary);

  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  @media (min-width: ${({ theme }) => theme.desktopDevice}) {
    font-size: 14px;
    line-height: 22px;
  }

  @media (min-width: ${({ theme }) => theme.mobileDevice}) {
    padding: 10px 16px;
  }
`

const InputContainer = styled.div`
  position: relative;
  width: 160px;

  svg {
    position: absolute;
    right: 12px;
    top: 50%;
    width: 18px;
    transform: translateY(-50%);
    color: var(--text-dark);
    cursor: pointer;
    transition: 0.3s all ease-out;

    &:hover {
      color: var(--orange-low);
    }
  }

  @media (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    width: 352px;
  }

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}) {
    width: 250px;

    svg {
      right: 16px;
      width: 32px;
    }
  }
`

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event: { target: { value: string } }) =>
          props.handleChange(event.target.value)
        }
        {...props}
      />
      <Search />
    </InputContainer>
  )
}
