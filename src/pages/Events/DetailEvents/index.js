import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as EventsActions } from '../../../store/ducks/events';

import { Container, Card } from '../styles';

class DetailEvents extends Component {
	static propTypes = {
	  match: PropTypes.shape({
	    params: PropTypes.shape({
	      id: PropTypes.number,
	    }),
	  }).isRequired,
	  events: PropTypes.shape({
	    currentEvent: PropTypes.shape({
	      id: PropTypes.number,
	      name: PropTypes.string,
	      description: PropTypes.string,
	    }),
	    loading: PropTypes.bool,
	  }).isRequired,
	  getOneEventRequest: PropTypes.func.isRequired,
	};

	componentDidMount() {
	  this.loadEventDetails();
	}

	componentDidUpdate(prevProps) {
	  if (prevProps.match.params.id !== this.props.match.params.id) {
	    this.loadEventDetails();
	  }
	}

	loadEventDetails = () => {
	  const { id } = this.props.match.params;
	  this.props.getOneEventRequest(id);
	};

	renderDetails = () => {
	  const event = this.props.events.currentEvent;
	  return (
  <Container>
    <Card>
      {event.id}
      <br />
      {event.name} <br />
      {event.description} <br />
      <div>
        <Link to="/events">Voltar</Link> |
        <Link to={`/events/edit/${event.id}`}>Editar</Link>
      </div>
    </Card>
  </Container>
	  );
	};

	render() {
	  return this.props.events.loading ? (
  <Container>
    <Card>
      <h1>Carregando</h1>
    </Card>
  </Container>
	  ) : (
	    this.renderDetails()
	  );
	}
}
const mapStateToProps = state => ({
  events: state.events,
  event: state.events.currentEvent,
});
const mapDispatchToProps = dispatch => bindActionCreators(EventsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DetailEvents);
