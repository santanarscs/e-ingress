import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as EventsActions } from '../../../store/ducks/events';

import { Container, EventList, EventItem } from './styles';

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
    <EventList>
      {events.data.map(event => (
        <EventItem key={event.id}>
          <div />
          <strong>{event.name}</strong>
          <span>{event.description}</span>
          <Link to="/">Detalhes</Link>
        </EventItem>
      ))}
    </EventList>
  </Container>
	  );
	}
}

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = dispatch => bindActionCreators(EventsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListEvents);
