import type { TextAreaFieldProps } from './TextAreaField.types';
import * as FieldS from '../Field.styles';
import * as S from './TextAreaField.styles';

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, name, label, error, ...props }) => {
  const errorId = `${id}-error`;

  return (
    <FieldS.FieldGroup>
      <FieldS.Label htmlFor={id}>{label}</FieldS.Label>
      <S.TextArea id={id} name={name} aria-invalid={!!error} aria-describedby={error ? errorId : undefined} {...props} />
      {error ? <FieldS.ErrorMessage id={errorId} role='alert'>{error}</FieldS.ErrorMessage> : null}
    </FieldS.FieldGroup>
  );
};
