import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  flex-direction: column;
  background: white;
  padding: 24px;

  > ul {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    a {
      color: var(--text-dark);
      font-size: 12px;
      font-weight: 500;
      line-height: 150%;
      text-decoration-line: underline;
      text-transform: uppercase;
      transition: 0.3s all ease-out;

      &:hover {
        filter: brightness(0.65);
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.desktopDevice}) {
    flex: 2;

    > ul {
      flex-direction: column;

      a {
        font-size: 14px;
      }
    }
  }
`

export const SummaryContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;

  > button {
    margin-top: 10px;
  }

  > h2 {
    color: var(--text-dark-inputs);
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
    text-transform: uppercase;
  }

  > div {
    width: 100%;
    display: grid;
    gap: 12px;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: var(--text-dark);
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }

    strong {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--shapes);
  margin-top: 24px;
  margin-bottom: 8px;
`
