import { useEffect, useRef } from 'react';
import * as S from './Modal.styles';
import type { ModalProps } from './Modal.types';

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  if (!isOpen) return null;
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    dialogRef.current?.focus();
  }, [isOpen]);


  return (
    <S.Modal
      onClick={() => setIsOpen(false)}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setIsOpen(false);
      }}
      role='dialog'
      aria-modal='true'
      aria-label='Visualizacao ampliada da imagem do projeto'
    >
      <S.ModalCard ref={dialogRef} tabIndex={-1} onClick={(e) => e.stopPropagation()}>
        <S.CloseButton type='button' aria-label='Fechar modal' onClick={() => setIsOpen(false)}>×</S.CloseButton>
        {children}
      </S.ModalCard>
    </S.Modal>
  )
}
