import styled from 'styled-components';
import { shade } from 'polished';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

export const Container = styled.div`
  padding-bottom: 50px;
`;

export const Main = styled.div`
  max-width: 736px;
  margin: 0 auto;
`;

export const BoxContainer = styled.div`
  background: var(--color-box-base);
  padding: 56px 64px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-top: -64px;

  > form {
    > section {
      display: grid;
      grid-template-columns: 1fr 1fr;

      column-gap: 32px;
    }
  }

  legend {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--color-text-title);
    font-size: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-line-in-white);
    margin-top: 64px;

    &:first-child {
      margin-top: 0;
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      background: transparent;

      font-size: 16px;
      color: var(--color-primary);
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#8257e5')};
      }
    }
  }
`;

export const PlusIcon = styled(FiPlus)`
  margin-right: 12px;
`;

export const AvailableTime = styled.div`
  display: grid;

  grid-template-columns: 2fr 1fr 1fr 20px;
  column-gap: 16px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 30px;
    margin-top: 24px;

    border: 0;
    background: transparent;
  }
`;

export const TrashIcon = styled(FiTrash2)`
  color: #d80032;
`;

export const BoxContainerFooter = styled.footer`
  border-top: 1px solid var(--color-line-in-white);
  background: var(--color-box-footer);
  padding: 40px 63px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const BoxFooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;

    p {
      color: #a0a0b3;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 56px;
    width: 197px;
    border: 0;
    background: var(--color-secundary);
    border-radius: 8px;

    color: var(--color-button-text);
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04bf58')};
    }
  }
`;

export const WarningIcon = styled.img`
  margin-right: 16px;
`;
