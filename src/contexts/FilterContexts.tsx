'use client'
import { FilterTypes } from '@/types/FilterTypes'
import { PriorityTypes } from '@/types/PriorityTypes'
import { ReactNode, createContext, useState } from 'react'

export const FilterContext = createContext({
  search: '',
  page: 0,
  type: FilterTypes.ALL,
  priority: PriorityTypes.NEWS,
  setPriority: (value: PriorityTypes) => {},
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterTypes) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [type, setType] = useState(FilterTypes.ALL)
  const [priority, setPriority] = useState(PriorityTypes.POPULARITY)

  return (
    <FilterContext.Provider
      value={{
        search,
        page,
        type,
        priority,
        setSearch,
        setType,
        setPage,
        setPriority,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
