import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  > label {
    color: var(--color-text-in-primary);
    margin-bottom: 8px;
  }

  > p {
    font-size: 14px;
    color: #d80032;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  > div {
    border-radius: 8px;

    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    padding: 0 15px;

    ${props =>
      props.isErrored &&
      css`
        border: 1px solid #d80032;
      `}

    > select {
      width: 100%;
      border: 0;
      background: transparent;
      height: 56px;

      font-family: Archivo;
      font-size: 16px;
      font-weight: 500;
      color: #c1bccc;

      .select-items {
        position: absolute;
        background-color: DodgerBlue;
      }
    }

    option {
      background: var(--color-input-background);
      color: black;
    }
  }
`;
