import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-bottom: 9.8rem;
`

export const Intro = styled.div`
  margin-top: 94px;
  margin-bottom: 140px;

  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    height: 360px;
    margin-left: 3.5rem;
  }
`

export const IntroContainerTitle = styled.div`
  height: 12rem;
  width: 36.75rem;
  margin-bottom: 4.125rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const IntroItems = styled.div`
  width: 35.5rem;
  height: 5.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
`

export const BaseIcon = styled.span`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`

export const IconCart = styled(BaseIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const IconTimer = styled(BaseIcon)`
  background: ${(props) => props.theme.yellow};
`

export const IconPackage = styled(BaseIcon)`
  background: ${(props) => props.theme['base-text']};
`

export const IconCoffee = styled(BaseIcon)`
  background: ${(props) => props.theme.purple};
`

export const CoffeeListTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 3.375rem;
`

export const CoffeeListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
  column-gap: 1.25rem;
`
