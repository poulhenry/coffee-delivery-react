import styled from 'styled-components'

interface IconContainerProps {
  iconBg?: string
}

export const InfoWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`
