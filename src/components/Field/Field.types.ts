export interface BaseFieldProps {
  id: string;
  name: string;
  label: string;
  error?: string;
}

export interface InputFieldProps extends BaseFieldProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'type'> {
  inputType?: React.HTMLInputTypeAttribute;
}

export interface TextAreaFieldProps extends BaseFieldProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id' | 'name'> {}

export type FieldProps =
  | ({ type: 'input' } & InputFieldProps)
  | ({ type: 'textarea' } & TextAreaFieldProps);
