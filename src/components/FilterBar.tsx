import { styled } from 'styled-components'
import { FilterByType, FilterByPriority } from '.'

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;

  position: relative;
  z-index: 10;

  @media (min-width: ${(props) => props.theme.desktopDevice}) {
    flex-direction: row;
    align-items: start;
    gap: 0px;
  }
`

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  )
}
