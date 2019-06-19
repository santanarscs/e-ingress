import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as EventsActions } from '../../../store/ducks/events';

import {
  Container, Card, EventsList, EventsItem,
} from '../styles';

class ListEvents extends Component {
	static propTypes = {
	  getEventsRequest: PropTypes.func.isRequired,
	  events: PropTypes.shape({
	    data: PropTypes.arrayOf(
	      PropTypes.shape({
	        id: PropTypes.number,
	        name: PropTypes.string,
	        description: PropTypes.string,
	      }),
	    ),
	    loading: PropTypes.bool,
	  }).isRequired,
	};

	componentDidMount() {
	  const { getEventsRequest } = this.props;
	  getEventsRequest();
	}

	render() {
	  const { events } = this.props;
	  return (
  <Container>
    <h1>Lista de eventos</h1>
    <Card>
      <EventsList>
        <thead>
          <th>Nome</th>
          <th>Descrição</th>
          <th />
        </thead>
        <tbody>
          {!events.data ? (
            <tr>
              <td colSpan={3}>nenhum evento cadastrado</td>
            </tr>
          ) : (
							  events.data.map(event => (
  <EventsItem key={event.id}>
    <td>{event.name}</td>
    <td>{event.description}</td>
    <td>
      <Link to={`/events/detail/${event.id}`}>Detalhes</Link> |
      <Link to={`/events/edit/${event.id}`}>Editar</Link> |
      <a href="#">Remover</a>
    </td>
  </EventsItem>
							  ))
          )}
        </tbody>
      </EventsList>
    </Card>
  </Container>
	  );
	}
}

const mapStateToProps = state => ({
  events: state.events,
});
const mapDispatchToProps = dispatch => bindActionCreators(EventsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListEvents);
