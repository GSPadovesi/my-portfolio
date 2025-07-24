import "styled-components"
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        base: string;
        hover: string;
        intense: string;
      };

      dark: {
        background: string;
        surface: string;
        border: string;
      };

      text: {
        primary: string;
        secondary: string;
        accent: string;
      };

      semantic: {
        success: string;
        warning: string;
        error: string;
      };

      glow: {
        soft: string;
        strong: string;
      };

      navbar: string;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
      xxxxxl: string;
    };

    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      full: string;
    };

    fontFamily: {
      sans: string;
      mono: string;
      roboto: string;
      plusJakarta: string;
      poppins: string;
    };

    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
      xxxxxl: string;
    };

    fontWeight: {
      light: string;
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
    };

    lineHeight: {
      tight: number;
      snug: number;
      normal: number;
      relaxed: number;
      loose: number;
    };

    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      glow: string;
      glowLarge: string;
      glowIntense: string;
      circle: string;
    };

    transitions: {
      fast: string;
      normal: string;
      slow: string;
      slower: string;
    };

    zIndex: {
      hide: number;
      auto: string;
      base: number;
      docked: number;
      navbar: number;
      dropdown: number;
      sticky: number;
      banner: number;
      overlay: number;
      modal: number;
      popover: number;
      skipLink: number;
      toast: number;
      tooltip: number;
    };
  }
}

