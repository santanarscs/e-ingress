import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import Button from '../../../styles/components/Button';
import { Container, Card } from '../styles';

export default function NewEvents() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Input name="name" />
          <Input name="description" />
          <Button type="submit">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
}
