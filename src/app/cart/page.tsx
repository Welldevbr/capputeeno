'use client'

import { BackButton, CartItem, DefaultPageLayout, Summary } from '@/components'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Container, CartList } from '@/styles/CartStyles'
import { ProductInCart } from '@/types/Product'
import { formatPrice } from '@/utils/FormatPrice'

export default function Cart() {
  const { value } = useLocalStorage('cart-items', [])

  function calculateTotal(value: ProductInCart[]) {
    return value.reduce(
      (sum: number, item: ProductInCart) =>
        (sum += item.price_in_cents * item.quantity),
      0,
    )
  }

  const cartTotal = calculateTotal(value)

  return (
    <DefaultPageLayout>
      <Container>
        <section>
          <BackButton path="/" />
          <CartList>
            <span>
              <h3>Seu carrinho</h3>
              <p>
                Total{' '}
                {value.length > 0
                  ? `(${value.length} Produtos)`
                  : '(Nenhum produto)'}{' '}
                <strong>
                  {cartTotal > 0 ? formatPrice(cartTotal) : 'R$ 00,00'}
                </strong>
              </p>
            </span>
            <ul>
              {value.map((product: ProductInCart) => {
                return (
                  <li key={product.id}>
                    <CartItem
                      id={product.id}
                      imgUrl={product.image_url}
                      name={product.name}
                      description={product.description!}
                      price={product.price_in_cents}
                      quantity={product.quantity}
                    />
                  </li>
                )
              })}
            </ul>
          </CartList>
        </section>
        <Summary total={cartTotal} />
      </Container>
    </DefaultPageLayout>
  )
}
