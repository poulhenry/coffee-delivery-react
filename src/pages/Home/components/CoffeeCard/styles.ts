import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${({ theme }) => theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -25px;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  > p {
    line-height: 130%;
    text-align: center;
    margin: 0 1.25rem 2.065rem 1.25rem;
  }

  > div {
    margin: 0 1.5rem 1.25rem 1.5rem;
    display: flex;
    align-items: center;
  }
`

export const ContainerTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;

  > span {
    background: ${({ theme }) => theme['yellow-light']};
    color: ${({ theme }) => theme['yellow-dark']};
    border-radius: 15px;
    font-family: 'Roboto', sans-serif;
    padding: 5px;
    font-size: 0.675rem;
    line-height: 130%;
    font-weight: bold;
    width: 5rem;
    text-align: center;
    text-transform: uppercase;
    margin: 0.75rem 0 1rem 0;
  }
`

export const ButtonCounter = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme['base-button']};
  border-radius: 6px;
  margin-right: 0.5rem;
  margin-left: 1.4rem;

  span {
    margin: 0;
  }

  span:nth-child(odd) {
    background: ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme.purple};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`

export const ButtonAddCart = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme.white};
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`
