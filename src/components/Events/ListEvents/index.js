import React from 'react';

import { Container, EventList, EventItem } from './styles';

export default function ListEvents() {
  return (
    <Container>
      <EventList>
        <EventItem>
          <div />
          <strong>Evento 1</strong>
          <span>Descrição do Evento 1</span>
          <a href="#">Detalhes</a>
        </EventItem>
      </EventList>
    </Container>
  );
}
