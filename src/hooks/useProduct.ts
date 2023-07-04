import axios, { AxiosPromise } from 'axios'
import { useQuery } from '@tanstack/react-query'
import { ProductFecthResponse } from '@/types/Product'

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (productId: string): AxiosPromise<ProductFecthResponse> => {
  return axios.post(API_URL, {
    query: `
  query {
    Product(id: "${productId}") {
      name
      description
      price_in_cents
      category
      image_url
    }
  }
  `,
  })
}

export function useProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['product', id],
    enabled: !!id,
  })

  return {
    data: data?.data?.data?.Product,
  }
}
