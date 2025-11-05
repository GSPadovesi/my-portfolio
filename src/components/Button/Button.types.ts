export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $variant?: 'primary' | 'secondary';
  $size?: 'small' | 'medium' | 'large';
  $fontSize?: string;
  $fontWeight?: string;
  children: React.ReactNode;
}