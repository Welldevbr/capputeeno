import { ProductInCart } from '@/types/Product'
import { useLocalStorage } from './useLocalStorage'

export function useProductInCart() {
  const { value, updateLocalStorage } = useLocalStorage('cart-items', [])

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue: any = value.map((item: ProductInCart) => {
      if (item.id !== id) return item
      return { ...item, quantity }
    })
    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item: ProductInCart) => {
      if (item.id !== id) return item
    })
    updateLocalStorage(newValue)
  }

  return { handleDeleteItem, handleUpdateQuantity }
}
