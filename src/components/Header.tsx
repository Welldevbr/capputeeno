import styled from 'styled-components'
import { Saira_Stencil_One as SairaStencilOne } from 'next/font/google'
import { PrimaryInputWSearchIcon } from './PrimaryInput'
import { CartControl } from './CartControl'
import { useFilter } from '@/hooks'

const sairaStencil = SairaStencilOne({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`

export function Header() {
  const { search, setSearch } = useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procura por algo específico?"
        />
        <CartControl />
      </div>
    </TagHeader>
  )
}
