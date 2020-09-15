import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  > p {
    font-size: 14px;
    color: #d80032;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  > input {
    width: 100%;
    padding: 15px;
    height: 56px;
    border-radius: 8px;

    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);

    ${props =>
      props.isErrored &&
      css`
        border: 1px solid #d80032;
      `}

    &:focus {
      border-bottom: 2.5px solid var(--color-primary);
    }
  }

  > div {
    margin-bottom: 8px;

    > label {
      color: var(--color-text-complement);
    }

    > span {
      font-size: 12px;
      margin-left: 12px;
      color: #c1bccc;
    }
  }
`;
