import styled from 'styled-components'

export const ProductWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;
  margin-block: auto;

  > div {
    display: flex;
    gap: 32px;

    > img {
      flex: 1;
      width: 640px;
      height: 580px;
      border-radius: 4px;
    }
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    color: var(--text-dark-inputs);

    > h4 {
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }

    > h2 {
      font-size: 32px;
      font-weight: 300;
      line-height: 150%;
      margin-top: 12px;
      margin-bottom: 4px;
    }

    > strong {
      color: var(--shapes-dark);
      font-size: 20px;
      font-weight: 600;
      line-height: 150%;
      margin-bottom: 24px;
    }

    > p {
      color: var(--text-dark-inputs);
      font-size: 12px;
      font-weight: 400;
      line-height: 150%;
      margin-top: 24px;
    }

    > div {
      margin-top: 58px;

      > h3 {
        color: var(--text-dark);
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
      }

      > p {
        color: var(--text-dark-inputs);
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        margin-top: 8px;
      }
    }
  }
`
