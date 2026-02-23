import { useEffect, useState } from 'react'
import * as S from './Typewriter.styles'

interface WrittingProps {
  label: string
}

export const Typewriter = ({ label }: WrittingProps) => {
  const [text, setText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setText('');
    setIsComplete(false);

    const timeouts: number[] = [];
    for (let index = 0; index < label.length; index++) {
      const timeoutId = window.setTimeout(() => {
        setText((prev) => prev + label.charAt(index));
        if (index === label.length - 1) setIsComplete(true);
      }, 100 * index);
      timeouts.push(timeoutId);
    }

    return () => {
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [label]);

  //Se for pra ficar repetindo o texto sempre, descomentar esse codigo abaixo e comentar o de cima
  // useEffect(() => {
  //   if (isComplete) return;

  //   const Writing = setInterval(() => {
  //     setText((prev) => {
  //       if (prev.length < label.length) {
  //         return prev + label.charAt(prev.length);
  //       } else {
  //         clearInterval(Writing);
  //         setIsComplete(true);
  //         return prev;
  //       }
  //     });
  //   }, 100);

  //   return () => clearInterval(Writing);
  // }, [label, isComplete]);

  // useEffect(() => {
  //   if (!isComplete) return;

  //   const timeout = setTimeout(() => {
  //     setIsComplete(false);
  //     setText('');
  //   }, 4000);

  //   return () => clearTimeout(timeout);
  // }, [isComplete]);


  return (
    <S.Wrapper>
      <S.Writing>{text}{isComplete && <S.WritingCursor >|</S.WritingCursor>}</S.Writing>
    </S.Wrapper>
  )
}
