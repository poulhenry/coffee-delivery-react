import { rgba } from 'polished'
import styled from 'styled-components'
import introBackgroundImg from '../../../../assets/background-intro.png'

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackgroundImg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.white} 0%,
      ${rgba(theme.background, 0.2)} 50%,
      ${theme.background} 100%
    )
  `};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
