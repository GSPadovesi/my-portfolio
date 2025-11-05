import "styled-components";

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
  }
}
