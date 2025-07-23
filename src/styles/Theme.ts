import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7", 
      600: "#9333ea",  
      700: "#7c3aed", 
      800: "#6b21a8", 
      900: "#581c87",
      1000: "#1a0b2e"
    },

    dark: {
      50: "#1e1b4b",
      100: "#1e1a3a", 
      200: "#1a1625", 
      300: "#151218", 
      400: "#0f0d14", 
      500: "#0a0810", 
      600: "#050408", 
      700: "#030205", 
      800: "#020103",
      900: "#010001"
    },
  
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717", 
      950: "#0a0a0a"
    },

    semantic: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444"
    },

    background: {
      backgroundPrimary: "#ffffff",
      backgroundSecondary: "#f9fafb",
      backgroundTertiary: "#f3f4f6"
    },
  
    text: {
      textPrimary: "#111827",
      textSecondary: "#6b7280",
      textTertiary: "#9ca3af"

    }
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    exl: "24px",
    exll: "32px", 
    exlll: "40px",
    exllll: "48px"
  },

  borderRadius: {
    none: "0",
    sm: "2px", 
    md: "6px", 
    lg: "8px", 
    xl: "12px", 
    exl: "16px",
    full: "9999px"
  },
  
  typography: {
    fontFamily: {
      sans: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
      mono: "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
    },

    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",  
      xl: "20px",
      exl: "24px", 
      exll: "30px", 
      exlll: "36px", 
      exllll: "48px"
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
    }
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    glow: "0 0 20px rgba(168, 85, 247, 0.5)",
    glowLarge: "0 0 40px rgba(168, 85, 247, 0.3)",
    glowIntense: "0 0 60px rgba(168, 85, 247, 0.8)"
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
