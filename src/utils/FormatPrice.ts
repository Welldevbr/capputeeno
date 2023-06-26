export function formatPrice(cents: number) {
  const real = (cents / 100).toFixed(2)
  return parseFloat(real).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
