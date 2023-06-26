import { FilterContext } from '@/contexts/FilterContexts'
import { useContext } from 'react'

export function useFilter() {
  return useContext(FilterContext)
}
