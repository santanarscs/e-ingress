export const Types = {
  LOAD_ALL_REQUEST: 'events/LOAD_ALL_REQUEST',
  LOAD_ALL_SUCCESS: 'events/LOAD_ALL_SUCCESS',
  LOAD_ONE_REQUEST: 'events/LOAD_ONE_REQUEST',
  LOAD_ONE_SUCCESS: 'events/LOAD_ONE_SUCCESS',
  LOAD_ONE: 'events/LOAD_ONE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  currentEvent: {},
};

export default function events(state = INITIAL_STATE, action) {
  switch (action.type) {
  case Types.LOAD_ALL_REQUEST:
    return { ...state, loading: true };
  case Types.LOAD_ALL_SUCCESS:
    return { ...state, loading: false, data: action.payload.data };
  case Types.LOAD_ONE_REQUEST:
    return { ...state, loading: true };
  case Types.LOAD_ONE_SUCCESS:
    return { ...state, loading: false, currentEvent: action.payload.data };
  case Types.LOAD_ONE:
    return { ...state, currentEvent: state.data.filter(event => event.id === action.payload.eventId) };
  default:
    return state;
  }
}

export const Creators = {
  getEventsRequest: () => ({ type: Types.LOAD_ALL_REQUEST }),
  getEventsSuccess: data => ({
    type: Types.LOAD_ALL_SUCCESS,
    payload: { data },
  }),
  getOneEventRequest: id => ({ type: Types.LOAD_ONE_REQUEST, payload: { id } }),
  getOneEventSuccess: data => ({
    type: Types.LOAD_ONE_SUCCESS,
    payload: { data },
  }),
  getCurrentEvent: id => ({
    type: Types.LOAD_ONE,
    payload: { id },
  }),
};
