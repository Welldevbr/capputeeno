import { Search } from 'lucide-react'
import { InputHTMLAttributes } from 'react'
import { styled } from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

const PrimaryInput = styled.input`
  width: 352px;
  padding: 10px 16px;
  border-radius: 8px;

  color: var(--text-dark);
  background: var(--bg-secondary);

  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`

const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-dark);
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
