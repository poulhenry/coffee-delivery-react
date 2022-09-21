import { createGlobalStyle } from 'styled-components'

export const defaultTheme = {
  'yellow-dark': '#C47F17',
  'yellow-light': '#F1E9C9',
  yellow: '#DBAC2C',
  'purple-dark': '#4B2995',
  'purple-light': '#EBE5F9',
  purple: '#8047F8',

  white: '#FFFFFF',
  background: '#FAFAFA',
  'base-card': '#F3F2F2',
  'base-input': '#EDEDED',
  'base-button': '#E6E5E5',
  'base-hover': '#D7D5D5',
  'base-label': '#8D8686',
  'base-text': '#574F4D',
  'base-subtitle': '#403937',
  'base-title': '#272221',

  textSizes: {
    'title-xsmall': '1.125rem',
    'title-small': '1.2rem',
    'title-medium': '1.5rem',
    'title-large': '2rem',
    'title-xlarge': '3rem',
    'regular-small': '0.875rem',
    'regular-medium': '1rem',
    'regular-large': '1.25rem',
    'bold-small': '0.75rem',
    'bold-medium': '1rem',
    'bold-large': '1.25rem',
    'components-tag': '0.625rem',
    'components-button-g': '0.875rem',
    'components-button-s': '0.75rem',
  },
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`
