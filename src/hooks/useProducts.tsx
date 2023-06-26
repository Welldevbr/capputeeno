import { Product } from '@/types/Product'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosPromise } from 'axios'
import { useFilter } from '.'
import { mountQuery } from '@/utils/graphqlFilters'
import { useDeferredValue } from 'react'

interface ProductsFecthResponse {
  data: {
    allProducts: Product[]
  }
}

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFecthResponse> => {
  return axios.post(API_URL, { query })
}

export function useProducts() {
  const { type, priority, search } = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(type, priority)
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ['products', type, priority],
  })

  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase()),
  )

  return {
    data: filteredProducts,
  }
}
