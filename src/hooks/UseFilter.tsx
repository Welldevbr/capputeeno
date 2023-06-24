import { FilterContext } from '@/contexts/FilterContexts'
import { useContext } from 'react'

export function UseFilter() {
  return useContext(FilterContext)
}
