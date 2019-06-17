import React, { Fragment } from 'react';

import { GlobalStyle } from './styles/global';
import { Content, Wrapper, Container } from './styles/components';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
          </Content>
        </Container>
      </Wrapper>
    </Fragment>
  );
}

export default App;
