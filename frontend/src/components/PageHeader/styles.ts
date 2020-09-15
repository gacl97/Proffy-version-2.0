import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-primary);
`;

export const TopHeaderContainer = styled.div`
  height: 50px;
  background: var(--color-primary-dark);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const TopHeaderContent = styled.header`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 16px;
    color: var(--color-title-in-primary);
  }
`;

export const BackIcon = styled.img``;

export const LogoImg = styled.img`
  height: 20px;
`;

export const MiddleHeaderContainer = styled.div`
  height: 340px;
  max-width: 736px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 283px;
    color: var(--color-text-in-primary);

    &:last-child {
      max-width: 200px;
    }
  }
`;

export const MiddleHeaderDescription1 = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    max-width: 373px;
    color: var(--color-title-in-primary);
    font-weight: 700;
  }
`;

export const MiddleHeaderDescription2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Icon = styled.img`
  margin-right: 24px;
`;
