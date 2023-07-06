import styled from 'styled-components'
import { Saira_Stencil_One as SairaStencilOne } from 'next/font/google'
import { PrimaryInputWSearchIcon } from './PrimaryInput'
import { CartControl } from './CartControl'
import { useFilter } from '@/hooks/useFilter'
import { useRouter } from 'next/navigation'

const sairaStencil = SairaStencilOne({
  weight: ['400'],
  subsets: ['latin'],
})

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: white;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  @media (min-width: ${({ theme }) => theme.mobileDevice}) {
    padding: 12px 24px;
  }

  @media (min-width: ${(props) => props.theme.desktopDevice}) {
    padding: 20px 160px;

    > div {
      gap: 25px;
    }
  }
`

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.mobileDevice}) {
    font-size: 24px;
  }

  @media (min-width: ${({ theme }) => theme.desktopDevice}) {
    font-size: 40px;
  }
`

export function Header() {
  const { push } = useRouter()
  const { search, setSearch } = useFilter()
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch}
          placeholder="Procurar por algo?"
        />
        <CartControl onClick={() => push('cart')} />
      </div>
    </TagHeader>
  )
}
