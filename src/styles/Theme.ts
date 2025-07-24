import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      base: "#a855f7", 
      hover: "#9333ea", 
      intense: "#7c3aed" 
    },

    dark: {
      background: "#0a0810", 
      surface: "#1a0b2e",     
      border: "#262626"
    },

    text: {
      primary: "#ffffff", 
      secondary: "#a3a3a3",
      accent: "#c084fc" 
    },
    
    semantic: {
      success: "#10b981", 
      warning: "#f59e0b", 
      error: "#ef4444"    
    },

    glow: {
      soft: "0 0 20px rgba(168, 85, 247, 0.5)",
      strong: "0 0 60px rgba(168, 85, 247, 0.8)"
    },

    navbar: "#1A0B2E"
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    xxl: "24px",
    xxxl: "32px", 
    xxxxl: "40px",
    xxxxxl: "48px"
  },

  borderRadius: {
    none: "0",
    sm: "2px", 
    md: "6px", 
    lg: "8px", 
    xl: "12px", 
    xxl: "16px",
    full: "9999px"
  },

  fontFamily: {
    sans: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
    roboto: `"Roboto", sans-serif`,
    plusJakarta: `"Plus Jakarta Sans", sans-serif`,
    poppins: ` "Poppins", sans-serif`
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",  
    xl: "20px",
    xxl: "24px", 
    xxxl: "32px", 
    xxxxl: "36px", 
    xxxxxl: "48px"
  },

  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800"
  },

  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    xxl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    glow: "0 0 20px rgba(168, 85, 247, 0.5)",
    glowLarge: "0 0 40px rgba(168, 85, 247, 0.3)",
    glowIntense: "0 0 60px rgba(168, 85, 247, 0.8)",
    circle: "box-shadow: 0 0 40px 10px rgba(155, 77, 224, 0.5)"
  },

  transitions: {
    fast: "0.15s ease-in-out",
    normal: "0.2s ease-in-out",
    slow: "0.3s ease-in-out",
    slower: "0.5s ease-in-out"
  },

  zIndex: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    navbar: 100,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  }
}
