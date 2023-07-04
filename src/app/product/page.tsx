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
            <Button>
              <ShoppingBag />
              Adicionar ao carrinho
            </Button>
          </Content>
        </div>
      </ProductWrapper>
    </DefaultPageLayout>
  )
}
