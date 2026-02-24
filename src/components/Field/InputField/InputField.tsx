import type { InputFieldProps } from './InputField.types';
import * as FieldS from '../Field.styles';
import * as S from './InputField.styles';

export const InputField: React.FC<InputFieldProps> = ({ id, name, label, error, inputType = 'text', ...props }) => {
  const errorId = `${id}-error`;

  return (
    <FieldS.FieldGroup>
      <FieldS.Label htmlFor={id}>{label}</FieldS.Label>
      <S.Input id={id} name={name} type={inputType} aria-invalid={!!error} aria-describedby={error ? errorId : undefined} {...props} />
      {error ? <FieldS.ErrorMessage id={errorId} role='alert'>{error}</FieldS.ErrorMessage> : null}
    </FieldS.FieldGroup>
  );
};
