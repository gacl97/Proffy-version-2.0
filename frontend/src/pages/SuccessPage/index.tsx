import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import { Container, SuccessImg, Backgound } from './styles';

const SuccessPage: React.FC = () => {
  return (
    <>
      <Container>
        <SuccessImg src={successIcon} alt="success Icon" />

        <h1>Cadastro salvo!</h1>
        <p>Tudo certo, seu cadastro está na nossa lista de professores.</p>
        <p>Agora é só ficar de olho no seu whatsapp.</p>

        <div>
          <Link to="/">Menu principal</Link>
          <Link to="/classes">Acessar lista</Link>
        </div>
      </Container>
      <Backgound />
    </>
  );
};

export default SuccessPage;
