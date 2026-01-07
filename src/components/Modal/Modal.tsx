import * as S from './Modal.styles';

export const Modal = (props: any) => {
  if (!props.isOpen) return null;

  return (
    <S.Modal onClick={() => props.setIsOpen(!props.isOpen)}>
      <S.ModalCard onClick={(e) => e.stopPropagation()}>
        {props.children}
      </S.ModalCard>
    </S.Modal>
  )
}