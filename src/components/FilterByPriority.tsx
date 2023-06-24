// interface FilterByPriorityProps {}

import { UseFilter } from '@/hooks'
import { PriorityTypes } from '@/types/PriorityTypes'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > button {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    transition: 0.3s ease-out all;

    > svg {
      width: 16px;
      height: auto;
    }

    &:hover {
      color: var(--text-dark-inputs);
    }
  }
`

const PriorityFilter = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  width: 176px;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 12px 16px;
  margin-top: 4px;

  li {
    color: var(--text-dark);
    font-size: 14px;
    font-family: inherit;
    line-height: 22px;
    cursor: pointer;
    transition: 0.3s ease-out all;

    &:hover {
      color: var(--text-dark-inputs);
    }
  }

  li + li {
    margin-top: 4px;
  }
`

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = UseFilter()

  const handleOpen = () => setIsOpen((prev) => !prev)

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <ChevronDown />
      </button>

      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  )
}
