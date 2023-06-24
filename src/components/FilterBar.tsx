import { styled } from 'styled-components'
import { FilterByType, FilterByPriority } from '.'

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
`

export function FilterBar() {
  return (
    <FilterContainer>
      <FilterByType />
      <FilterByPriority />
    </FilterContainer>
  )
}
