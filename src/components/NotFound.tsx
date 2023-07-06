import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export function NotFound() {
  return (
    <Container>
      <h2>Nenhum item encontrado</h2>
    </Container>
  )
}
