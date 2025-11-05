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

}

export const darkTheme: DefaultTheme = {
  colors: {
    primary: {
      base: "#3b82f6",
      hover: "#2563eb",
      intense: "#1d4ed8"
    },
    dark: {
      background: "#0a0a1f",
      surface: "#131336",
      border: "#1e1e2e"
    },
    text: {
      primary: "#ffffff",
      secondary: "#a3a3a3",
      accent: "#60a5fa"
    },
    semantic: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444"
    },
    glow: {
      soft: "0 0 20px rgba(59, 130, 246, 0.5)",
      strong: "0 0 60px rgba(59, 130, 246, 0.8)"
    },
    navbar: "#131336"
  }
}
