import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles/global';
import { Content, Wrapper, Container } from './styles/components';

import store from './store';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
