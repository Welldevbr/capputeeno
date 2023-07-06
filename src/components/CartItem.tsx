import { useProductInCart } from '@/hooks/useProductInCart'
import { Container, ItemWrapper, SelectQuantity } from '@/styles/CartItemStyle'
import { formatPrice } from '@/utils/FormatPrice'
import { Trash2 as Trash } from 'lucide-react'
import Image from 'next/image'
import { ChangeEvent } from 'react'

interface CartItemProps {
  id: string
  imgUrl: string
  name: string
  description: string
  price: number
  quantity: number
}

export function CartItem({
  id,
  imgUrl,
  name,
  description,
  price,
  quantity,
}: CartItemProps) {
  const parsedPrice = formatPrice(price)
  const { handleUpdateQuantity, handleDeleteItem } = useProductInCart()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleUpdateQuantity(id, Number(e.target.value))
  }

  return (
    <Container>
      <Image
        width={256}
        height={211}
        src={imgUrl}
        alt="Picture of the product"
      />
      <button onClick={() => handleDeleteItem(id)}>
        <Trash />
      </button>
      <ItemWrapper>
        <h4>{name}</h4>
        <p>{description}</p>
        <span>
          <SelectQuantity value={quantity} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </SelectQuantity>
          <strong>{parsedPrice}</strong>
        </span>
      </ItemWrapper>
    </Container>
  )
}
