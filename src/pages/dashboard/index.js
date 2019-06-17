import React from 'react';

import { Container, Title, Card } from './styles';
import Circle from '../../assets/images/Ellipse.png';

const Dashboard = () => (
  <Container>
    <Title>Indicações Abertas</Title>
    <Card>
      <img src={Circle} alt="circle" />
      <strong>CLBI</strong>
      <span>Curso de Linux Básico com uma descrição</span>
      <a href="#">Inscrever</a>
    </Card>
  </Container>
);

export default Dashboard;
