import { Container, Divider, SummaryContent } from '@/styles/SummaryStyles'
import { Button } from './Button'
import { formatPrice } from '@/utils/FormatPrice'

interface SummaryProps {
  total: number
}

export function Summary({ total }: SummaryProps) {
  const defaultDelivery = 4000
  const priceWithDelivery = formatPrice(total + defaultDelivery)

  return (
    <Container>
      <SummaryContent>
        <h2>Resumo do pedido</h2>

        <div>
          <p>
            Subtotal de produtos <span>{formatPrice(total)}</span>
          </p>
          <p>
            Entrega
            <span>
              {total > 90000 ? 'Grátis' : formatPrice(defaultDelivery)}
            </span>
          </p>
          <Divider />
          <strong>
            Total
            {total > 0 ? (
              <span>
                {total >= 90000 ? formatPrice(total) : priceWithDelivery}
              </span>
            ) : (
              <span>R$ 00,00</span>
            )}
          </strong>
        </div>
        <Button sucess>Finalizar compra</Button>
      </SummaryContent>

      <ul>
        <li>
          <a href="">Ajuda</a>
        </li>
        <li>
          <a href="">Rembolso</a>
        </li>
        <li>
          <a href="">Entregas e fretes</a>
        </li>
        <li>
          <a href="">Troca e devolução</a>
        </li>
      </ul>
    </Container>
  )
}
