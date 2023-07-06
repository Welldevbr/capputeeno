import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 12px;

  background: white;
  border-radius: 5px;
  position: relative;

  > img {
    width: 50%;
    height: 50%;
    border-radius: 8px 8px 8px 8px;
  }

  > button {
    position: absolute;
    top: 16px;
    right: 20px;
    color: var(--delete-color);

    > svg {
      width: 24px;
      height: 24px;
    }
  }

  @media (min-width: ${({ theme }) => theme.mobileDevice}) {
    padding: 0;
    display: flex;
    flex-direction: row;
    gap: 32px;

    > img {
      border-radius: 8px 0 0 8px;
    }
  }
`

export const ItemWrapper = styled.div`
  width: 100%;
  padding: 16px 20px 24px 0;

  > h4 {
    color: var(--text-dark-inputs);
    font-size: 20px;
    font-weight: 300;
    line-height: 150%;
  }

  > p {
    color: var(--text-dark-inputs);
    font-size: 12px;
    font-weight: 400;
    line-height: 150%;
    margin: 12px 0 24px 0;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid var(--text-dark);
      background: #f3f5f6;

      color: var(--text-dark);
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      text-transform: uppercase;

      > svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`

export const SelectQuantity = styled.select`
  padding: 8px;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background: var(--shapes-alt);
  color: var(--text-dark);
  font-weight: 400;
  font-size: 16px;
`
