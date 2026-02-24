import type { TextAreaFieldProps } from './TextAreaField.types';
import * as FieldS from '../Field.styles';
import * as S from './TextAreaField.styles';

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, name, label, error, ...props }) => {
  return (
    <FieldS.FieldGroup>
      <FieldS.Label htmlFor={id}>{label}</FieldS.Label>
      <S.TextArea id={id} name={name} {...props} />
      {error ? <FieldS.ErrorMessage>{error}</FieldS.ErrorMessage> : null}
    </FieldS.FieldGroup>
  );
};
