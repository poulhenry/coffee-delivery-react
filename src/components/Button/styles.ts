import styled from 'styled-components'

export const ButtonContainer = styled.button`
  padding: 0.75rem;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.yellow};
  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  border: none;
  border-radius: 6px;
  margin-top: 0.7rem;
  text-transform: uppercase;
  transition: 0.4s;
  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`
