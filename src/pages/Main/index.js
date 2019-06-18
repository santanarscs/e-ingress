import React from 'react';

import { Container } from './styles';
import ListEvents from '../../components/Events/ListEvents';

export default function Main() {
  return (
    <Container>
      <h1>Eventos disponíveis</h1>
      <ListEvents />
    </Container>
  );
}
