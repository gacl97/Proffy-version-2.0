import React from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/images/landing.svg';
import logoImg from '../../assets/images/logo.svg';
import bookIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import {
  Container,
  TopSideMain,
  Main,
  TopSide,
  LeftTopSideContent,
  RightTopSideContent,
  BottomSide,
  LeftBottomSideContent,
  RightBottomSideContent,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <TopSideMain>
        <Main>
          <TopSide>
            <LeftTopSideContent>
              <img src={logoImg} alt="Logo" />
              <p>Sua plataforma de estudos online</p>
            </LeftTopSideContent>

            <RightTopSideContent>
              <img src={landingImg} alt="Lading" />
            </RightTopSideContent>
          </TopSide>
        </Main>
      </TopSideMain>

      <Main>
        <BottomSide>
          <LeftBottomSideContent>
            <p>Seja bem-vindo</p>
            <p>
              <strong>O que deseja fazer?</strong>
            </p>
          </LeftBottomSideContent>

          <RightBottomSideContent>
            <p>
              Total de 256 conexões já realizadas
              <img src={purpleHeartIcon} alt="heart" />
            </p>

            <Link to="/classes">
              <img src={bookIcon} alt="book" />
              Estudar
            </Link>

            <Link to="/teacher">
              <img src={giveClassesIcon} alt="Classes" />
              Dar aulas
            </Link>
          </RightBottomSideContent>
        </BottomSide>
      </Main>
    </Container>
  );
};

export default Landing;
