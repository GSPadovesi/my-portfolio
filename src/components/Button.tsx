import type React from "react"
import styled, { css } from "styled-components"
import type { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "small" | "medium" | "large"
  children: React.ReactNode
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  ${(props) =>
    props.variant === "primary" &&
    css`
    background-color: ${props.theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${props.theme.colors.neutral[50]};
      transform: translateY(-2px);
      box-shadow: ${props.theme.shadows.md};
    }
  `}
  
  ${(props) =>
    props.variant === "secondary" &&
    css`
    background-color: transparent;
    color: ${props.theme.colors.primary};
    border: 2px solid ${props.theme.colors.primary};
    
    &:hover {
      background-color: ${props.theme.colors.primary};
      color: white;
    }
  `}
  
  ${(props) =>
    props.size === "large" &&
    css`
    padding: ${props.theme.spacing.lg} ${props.theme.spacing.xl};
    font-size: 1.2rem;
  `}
  
  ${(props) =>
    props.size === "small" &&
    css`
    padding: ${props.theme.spacing.sm} ${props.theme.spacing.md};
    font-size: 0.9rem;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "medium", ...props }) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  )
}
