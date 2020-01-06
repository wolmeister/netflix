import React from 'react';

import { InputFieldProps } from './types';
import { StyledInputField, Input, Placeholder } from './styles';

function InputField({ type, text, placeholder, onChange }: InputFieldProps) {
  return (
    <StyledInputField>
      <Input
        type={type}
        value={text}
        onChange={e => onChange(e.target.value)}
      />
      <Placeholder hasText={!!text.length}>{placeholder}</Placeholder>
    </StyledInputField>
  );
}

export default InputField;
