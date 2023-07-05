'use client'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'

import { BackButton, Button, DefaultPageLayout } from '@/components'
import { ProductWrapper, Content } from '@/styles/ProductStyle'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/FormatPrice'

export default function Product({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  const { data } = useProduct(searchParams.id)

  function handleAddToCart() {
    const cartItems = localStorage.getItem('cart-items')

    if (cartItems) {
      const cartItemsArray = JSON.parse(cartItems)

      const existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === searchParams.id,
      )

      if (existingProductIndex !== -1) {
        cartItemsArray[existingProductIndex].quantity += 1
      } else {
        cartItemsArray.push({ ...data, quantity: 1, id: searchParams.id })
      }

      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
    } else {
      const newCart = [
        {
          ...data,
          id: searchParams.id,
          quantity: 1,
        },
      ]

      localStorage.setItem('cart-items', JSON.stringify(newCart))
    }
  }

  return (
    <DefaultPageLayout>
      <ProductWrapper>
        <BackButton path="/" />
        <div>
          <Image
            draggable="false"
            width={640}
            height={620}
            src={data?.image_url!}
            alt="picture for product"
          />
          <Content>
            <div>
              <h4>{data?.category === 'mugs' ? 'Caneca' : 'Camiseta'}</h4>
              <h2>{data?.name}</h2>
              <strong>{formatPrice(data?.price_in_cents!)}</strong>
              <p>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </p>

              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </div>
            <Button onClick={handleAddToCart}>
              <ShoppingBag />
              Adicionar ao carrinho
            </Button>
          </Content>
        </div>
      </ProductWrapper>
    </DefaultPageLayout>
  )
}
