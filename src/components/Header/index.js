import React from 'react';
import { Container, User } from './styles';

const Header = () => (
  <Container>
    <h1>Dashboard</h1>
    <User>
      <img src="https://avatars3.githubusercontent.com/u/8572296?v=4" alt="Avatar" />
      <span>Usuário Logado</span>
    </User>
  </Container>
);

export default Header;
