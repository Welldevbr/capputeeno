import { UseFilter } from '@/hooks'
import { FilterTypes } from '@/types/FilterTypes'
import styled from 'styled-components'

interface FilterItemProps {
  selected?: boolean
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

const FilterItem = styled.li<FilterItemProps>`
  text-align: center;
  font-size: 16px;
  font-weight: ${({ selected }) => (selected ? '600' : '400')};
  line-height: 22px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease-out all;

  color: ${({ selected }) =>
    selected ? 'var(--text-dark-inputs)' : 'var(--text-dark);'};

  border-bottom: ${({ selected }) =>
    selected ? '2px solid var(--orange-low)' : ''};

  &:hover {
    color: black;
  }
`

export function FilterByType() {
  const { type, setType } = UseFilter()

  const handleChangeType = (value: FilterTypes) => {
    setType(value)
  }

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterTypes.ALL}
        onClick={() => handleChangeType(FilterTypes.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterTypes.SHIRT}
        onClick={() => handleChangeType(FilterTypes.SHIRT)}
      >
        Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterTypes.MUG}
        onClick={() => handleChangeType(FilterTypes.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  )
}