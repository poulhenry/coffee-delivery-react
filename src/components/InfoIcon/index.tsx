import { ReactNode } from 'react'
import { IconContainer, InfoWithIconContainer } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: ReactNode | string
  iconBg: string
}

export function InfoIcon({ icon, text, iconBg }: InfoIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
