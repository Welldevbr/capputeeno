import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  flex-direction: column;

  > section {
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
  }

  @media (min-width: ${({ theme }) => theme.desktopDevice}) {
    flex-direction: row;
    > section {
      flex: 5;
    }
  }
`

export const CartList = styled.div`
  > span {
    > h3 {
      margin-bottom: 6px;
      color: var(--text-dark-inputs);
      font-size: 24px;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
    }

    > p {
      color: var(--text-dark);
      font-size: 16px;
      font-weight: 300;
      line-height: 150%;

      > strong {
        color: var(--text-dark-inputs);
      }
    }
  }

  > ul {
    margin-top: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;

    li {
      width: 100%;
      height: fit-content;
    }
  }
`
