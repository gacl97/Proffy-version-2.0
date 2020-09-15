import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const TopSideMain = styled.div`
  background: var(--color-primary-darker);
  max-height: 527px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const TopSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftTopSideContent = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: var(--color-text-in-primary);
    font-size: 30px;
    max-width: 302px;
  }
`;

export const RightTopSideContent = styled.div``;

export const BottomSide = styled.div`
  margin-top: 58px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftBottomSideContent = styled.div`
  > p {
    color: var(--color-text-base);
  }
`;

export const RightBottomSideContent = styled.div`
  display: flex;
  align-items: center;

  > p {
    margin-right: 53px;
    font-size: 12px;
    max-width: 144px;
    text-align: end;
    color: var(--color-text-complement);

    > img {
      margin-left: 5px;
    }
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 301px;
    height: 104px;
    border-radius: 0.8rem;
    margin-right: 16px;
    text-decoration: none;
    color: var(--color-button-text);
    font-weight: 700;
    font-size: 20px;

    background: var(--color-primary-lighter);
    transition: background-color 0.2s;

    &:last-child {
      background: var(--color-secundary);
      width: 301px;
      margin-right: 0;

      &:hover {
        background: ${shade(0.2, '#04BF58')};
      }
    }

    > img {
      margin-right: 16px;
    }

    &:hover {
      background: ${shade(0.2, '#774dd6')};
    }
  }
`;
