import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface DisabledDays {
  isDisabled: boolean;
}

export const Container = styled.div`
  padding: 32px;
  background: var(--color-box-base);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;

  h1 {
    color: var(--color-text-title);
    font-size: 24px;
  }

  span {
    color: var(--color-text-base);
    font-size: 16px;
  }
`;

export const ProfileImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  margin-right: 24px;
`;

export const Content = styled.div`
  margin-top: 32px;

  > p {
    font-family: Poppins;
    font-size: 16px;
    color: var(--color-text-base);

    & + p {
      margin-top: 20px;
    }
  }
`;

export const DaysCards = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 16px;
`;

export const AvailableDaysCard = styled.div<DisabledDays>`
  border-radius: 8px;
  padding: 16px;

  border: 1px solid var(--color-line-in-white);
  background: var(--color-box-footer);

  ${props =>
    props.isDisabled &&
    css`
      opacity: 0.4;
    `}

  > div {
    > span {
      font-size: 12px;
      color: var(--color-text-complement);
    }

    > h1 {
      font-size: 16px;
    }

    & + div {
      margin-top: 12px;
    }
  }
`;

export const BoxContainerFooter = styled.footer`
  padding: 32px;
  border-top: 1px solid var(--color-line-in-white);
  background: var(--color-box-footer);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BoxContainerFooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;

    > span {
      color: var(--color-text-complement);
      font-size: 14px;
      font-family: Poppins;
      margin-right: 16px;
    }

    > h1 {
      color: var(--color-primary);
      font-size: 20px;
    }
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 56px;
    width: 250px;

    border: 0;
    border-radius: 8px;
    background: var(--color-secundary);
    font-weight: 600;
    color: var(--color-button-text);
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04bf58')};
    }
  }
`;

export const WhatsappImg = styled.img`
  margin-right: 16px;
`;
