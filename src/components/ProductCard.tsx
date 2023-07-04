import { formatPrice } from '@/utils/FormatPrice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'

interface ProductCardProps {
  id: string
  image: string
  title: string
  price: number
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 0 0 4px 4px;
  transition: 0.3s ease-out all;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    border-radius: 4px 4px 0 0;
  }

  > div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    > h3 {
      color: var(--textos-dark-inputs);
      font-size: 16px;
      font-weight: 300;
      line-height: 150%;
      margin-block: 8px;
    }

    > strong {
      color: var(--shapes-dark);
      font-size: 14px;
      font-weight: 600;
      line-height: 150%;
    }

    > span {
      width: 228px;
      height: 1px;
      margin-block: 8px;
      background: var(--shapes);
    }
  }
`

export function ProductCard({ id, image, title, price }: ProductCardProps) {
  const priceReal = formatPrice(price)
  const { push } = useRouter()

  return (
    <Card onClick={() => push(`product?id=${id}`)}>
      <Image
        draggable="false"
        width={256}
        height={300}
        src={image}
        alt={`Image from product ${title}`}
      />
      <div>
        <h3>{title}</h3>
        <span />
        <strong>{priceReal}</strong>
      </div>
    </Card>
  )
}
