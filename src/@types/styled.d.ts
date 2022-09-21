import 'styled-components'
import { defaultTheme } from '../styles/global'

export type themeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
}