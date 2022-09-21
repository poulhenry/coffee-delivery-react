import styled from 'styled-components'

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['base-button']};
  background: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;
  transition: 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme['yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
