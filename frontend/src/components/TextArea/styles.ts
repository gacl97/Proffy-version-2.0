import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  > p {
    font-size: 14px;
    color: #d80032;
    margin-bottom: 5px;
    margin-left: 10px;
  }

  > textarea {
    width: 100%;
    padding: 15px;
    height: 200px;
    border-radius: 8px;

    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);

    &:focus {
      border: 1px solid var(--color-primary);
    }
  }

  > label {
    color: var(--color-text-complement);
    margin-bottom: 8px;
  }
`;
