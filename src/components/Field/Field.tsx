import type { FieldProps } from './Field.types';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';

export const Field: React.FC<FieldProps> = (props) => {
  switch (props.type) {
    case 'textarea': {
      const { type: _type, ...textAreaProps } = props;
      void _type;
      return <TextAreaField {...textAreaProps} />;
    }
    case 'input':
    default: {
      const { type: _type, ...inputProps } = props;
      void _type;
      return <InputField {...inputProps} />;
    }
  }
};
