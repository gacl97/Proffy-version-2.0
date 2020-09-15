import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 50px;
`;

export const Main = styled.div`
  max-width: 736px;
  margin: 0 auto;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    color: var(--color-text-complement);
  }
`;

export const ContainerHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  margin-top: -84px;
`;

export const TeacherCards = styled.div`
  margin-top: 40px;
`;
