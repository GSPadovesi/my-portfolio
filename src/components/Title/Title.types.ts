export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  $variant?: 'h1' | 'h2' | 'h3' | 'h4';
  $fontWeight?: string; 
  $textAlign?: 'left' | 'center' | 'right' | 'justify', 
  $fontColor?: string;
  children: React.ReactNode;
}