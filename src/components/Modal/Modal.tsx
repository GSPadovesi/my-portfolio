import * as S from './Modal.styles';
import type { ModalProps } from './Modal.types';

export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <S.Modal onClick={() => setIsOpen(!isOpen)}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        {children}
      </S.ModalCard>
    </S.Modal>
  )
}
