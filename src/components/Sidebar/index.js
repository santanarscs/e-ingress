import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink
            to="/"
            activeStyle={{
					    background: 'rgba(0, 0, 0, 0.2)',
					  }}
          >
            <img src={Home} alt="Home" />
						Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            activeStyle={{
					    background: 'rgba(0, 0, 0, 0.2)',
					  }}
          >
            <img src={Bell} alt="Eventos" />
						Eventos
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src={Plus} alt="Indicações" />
						Indicações
          </NavLink>
        </li>
      </Nav>
    </section>
  </Container>
);

export default Sidebar;
