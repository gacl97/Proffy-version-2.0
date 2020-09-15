import styled from 'styled-components';

import { shade } from 'polished';
import successBackground from '../../assets/images/success-background.svg';

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: var(--color-primary);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    z-index: 999;
    font-family: Archivo;
    font-weight: bold;
    font-size: 54px;
    color: var(--color-title-in-primary);
    margin-bottom: 24px;
  }

  > p {
    z-index: 999;
    color: var(--color-text-in-primary);
    font-family: Poppins;
    font-size: 16px;
  }

  > div {
    margin-top: 80px;
    display: flex;
    z-index: 999;

    > a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 176px;
      text-decoration: none;
      border-radius: 8px;
      height: 56px;
      background: var(--color-secundary);
      border: 0;
      font-size: 16px;
      color: var(--color-title-in-primary);
      transition: background-color 0.2s;

      & + a {
        margin-left: 20px;
      }

      &:first-child {
        background: var(--color-primary-darker);

        &:hover {
          background: ${shade(0.2, '#6842c2')};
        }
      }

      &:hover {
        background: ${shade(0.2, '#04bf58')};
      }
    }
  }
`;

export const SuccessImg = styled.img`
  margin-bottom: 40px;
`;

export const Backgound = styled.div`
  position: relative;
  height: 100vh;
  flex: 1;
  background: url(${successBackground}) no-repeat center;
`;
