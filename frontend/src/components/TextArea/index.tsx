import React, { TextareaHTMLAttributes } from 'react';

import { useFormContext } from 'react-hook-form';

import { Container } from './styles';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const TextArea = ({ label, name }: TextAreaProps) => {
  const { register, errors } = useFormContext();

  return (
    <Container>
      <label htmlFor={name}>{label}</label>

      <p>{errors[name]?.message}</p>

      <textarea name={name} ref={register} />
    </Container>
  );
};

export default TextArea;
