import { useEffect, useState } from 'react'
import * as S from './Typewriter.styles'

interface WrittingProps {
  label: string
}

export const Typewriter = ({ label }: WrittingProps) => {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const Writing = (text: string, index = 0) => {
    if (index < text.length) {
      setText(text.slice(0, index++))
      setTimeout(() => Writing(text, index++), 100)
    } else {
      setIsComplete(true);
    }
  }

  useEffect(() => {
    setTimeout(() => Writing(label))
  }, [])

  return (
    <S.Wrapper>
      <S.Writing>{text}{isComplete && <S.WritingCursor >|</S.WritingCursor>}</S.Writing>
    </S.Wrapper>
  )
}