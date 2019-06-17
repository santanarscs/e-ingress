import React from 'react';
import {
  Container, Header, Logo, Nav,
} from './styles';
import University from '../../assets/images/university-solid.svg';
import Home from '../../assets/images/home-solid.svg';
import Plus from '../../assets/images/plus-solid.svg';

const Sidebar = () => (
  <Container>
    <Header>
      <Logo src={University} alt="University" />
    </Header>
    <section>
      <Nav>
        <li>
          <a href="/">
            <img src={Home} alt="Home" />
						Home
          </a>
        </li>
        <li>
          <a href="/">
            <img src={Plus} alt="Indicações" />
						Indicações
          </a>
        </li>
      </Nav>
    </section>
  </Container>
);

export default Sidebar;
