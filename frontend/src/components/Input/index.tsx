import React, { InputHTMLAttributes } from 'react';

import { useFormContext } from 'react-hook-form';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  description?: string;
}

const Input = ({ name, label, description, ...rest }: InputProps) => {
  const { register, errors } = useFormContext();

  return (
    <Container isErrored={!!errors[name]?.message}>
      <div>
        <label htmlFor={name}>{label}</label>
        {description && <span>{description}</span>}
      </div>

      <p>{errors[name]?.message}</p>

      <input id={name} type="text" ref={register} name={name} {...rest} />
    </Container>
  );
};

export default Input;
