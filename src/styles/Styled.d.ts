import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: { [key: number]: string },
      dark: { [key: number]: string },
      neutral: { [key: number]: string },
      semantic: {
        success: string,
        warning: string,
        error: string
      },
      background: {
        backgroundPrimary: string,
        backgroundSecondary: string,
        backgroundTertiary: string
      },
      text: {
        textPrimary: string,
        textSecondary: string,
        textTertiary: string
      }
    },
    spacing: {
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      exl: string,
      exll: string,
      exlll: string,
      exllll: string
    },
    borderRadius: {
      none: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      exl: string,
      full: string
    },
    typography: {
      fontFamily: {
        sans: string,
        mono: string
      },
      fontSize: {
        xs: string,
        sm: string,
        base: string,
        lg: string,
        xl: string,
        exl: string,
        exll: string,
        exlll: string,
        exllll: string
      },
      fontWeight: {
        light: string,
        normal: string,
        medium: string,
        semibold: string,
        bold: string,
        extrabold: string
      },
      lineHeight: {
        tight: number,
        snug: number,
        normal: number,
        relaxed: number,
        loose: number
      }
    },
    shadows: {
      sm: string,
      md: string,
      lg: string,
      xl: string,
      "2xl": string,
      glow: string,
      glowLarge: string,
      glowIntense: string
    },
    transitions: {
      fast: string,
      normal: string,
      slow: string,
      slower: string
    },
    zIndex: {
      hide: number,
      auto: string,
      base: number,
      docked: number,
      dropdown: number,
      sticky: number,
      banner: number,
      overlay: number,
      modal: number,
      popover: number,
      skipLink: number,
      toast: number,
      tooltip: number
    }
  }
}
