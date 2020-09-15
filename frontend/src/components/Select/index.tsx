import React, { SelectHTMLAttributes } from 'react';

import { useFormContext } from 'react-hook-form';

import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select = ({ name, label, options, ...rest }: SelectProps) => {
  const { register, errors } = useFormContext();

  return (
    <Container isErrored={!!errors[name]?.message}>
      <label htmlFor={name}>{label}</label>

      <p>{errors[name]?.message}</p>
      <div>
        <select value="" id={name} {...rest} ref={register || ''} name={name}>
          <option value="" disabled hidden>
            Selecione uma opção
          </option>

          {options.map(optionValue => {
            return (
              <option key={optionValue.value} value={optionValue.value}>
                {optionValue.label}
              </option>
            );
          })}
        </select>
      </div>
    </Container>
  );
};

export default Select;
