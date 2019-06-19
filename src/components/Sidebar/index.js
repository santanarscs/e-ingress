import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Header, Logo, Nav,
} from './styles';
import University from '../../assets/images/university-solid.svg';
import Home from '../../assets/images/home-solid.svg';
import Plus from '../../assets/images/plus-solid.svg';
import Bell from '../../assets/images/bell-solid.svg';

const Sidebar = () => (
  <Container>
    <Header>
      <Logo src={University} alt="University" />
    </Header>
    <section>
      <Nav>
        <li>
          <Link to="/">
            <img src={Home} alt="Home" />
						Home
          </Link>
        </li>
        <li>
          <Link to="/events">
            <img src={Bell} alt="Eventos" />
						Eventos
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={Plus} alt="Indicações" />
						Indicações
          </Link>
        </li>
      </Nav>
    </section>
  </Container>
);

export default Sidebar;
