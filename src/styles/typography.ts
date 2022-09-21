import styled from 'styled-components'

interface TitleTextProps {
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'
  color?: 'title' | 'subtitle' | 'text'
  weight?: string | number
}

interface RegularTextProps {
  size?: 'large' | 'medium' | 'small'
  color?: 'text' | 'subtitle' | 'label'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-${size ?? 'medium'}`]};
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`regular-${size ?? 'medium'}`]};
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`
