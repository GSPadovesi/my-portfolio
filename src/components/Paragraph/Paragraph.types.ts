export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  $fontSize?: string,
  $fontWeight?: string,
  $textAlign?: 'left' | 'center' | 'right' | 'justify',
  $fontColor?: string,
  $lineHeight?: string,
  $fontStyle?: string,
  children: React.ReactNode
}