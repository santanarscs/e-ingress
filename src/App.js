import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Content, Wrapper, Container } from './styles/components';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <Header />
              <Routes />
            </Content>
          </Container>
        </Wrapper>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
