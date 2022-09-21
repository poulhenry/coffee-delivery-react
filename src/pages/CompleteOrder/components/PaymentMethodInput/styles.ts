import styled from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme['base-button']};
  transition: 0.4s;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`
