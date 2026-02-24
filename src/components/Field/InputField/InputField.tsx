import type { InputFieldProps } from './InputField.types';
import * as FieldS from '../Field.styles';
import * as S from './InputField.styles';

export const InputField: React.FC<InputFieldProps> = ({ id, name, label, error, inputType = 'text', ...props }) => {
  return (
    <FieldS.FieldGroup>
      <FieldS.Label htmlFor={id}>{label}</FieldS.Label>
      <S.Input id={id} name={name} type={inputType} {...props} />
      {error ? <FieldS.ErrorMessage>{error}</FieldS.ErrorMessage> : null}
    </FieldS.FieldGroup>
  );
};
