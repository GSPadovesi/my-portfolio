import styled, { css } from "styled-components"

export const Navbar = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary[1000]};
  position: sticky;
  top: 0%;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  color: #fff;
`

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.primary[50]};
  font-size: ${({ theme }) => theme.typography.fontSize.exll};
  font-weight: 800;
  font-family: 'roboto';
`