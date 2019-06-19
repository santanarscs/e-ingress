export const Types = {
  LOAD_ALL_REQUEST: 'events/LOAD_ALL_REQUEST',
  LOAD_ALL_SUCCESS: 'events/LOAD_ALL_SUCCESS',
  LOAD_ONE_REQUEST: 'events/LOAD_ONE_REQUEST',
  LOAD_ONE_SUCCESS: 'events/LOAD_ONE_SUCCESS',
  CREATE_REQUEST: 'events/CREATE_REQUEST',
  CREATE_SUCCESS: 'events/CREATE_SUCCESS',
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
  case Types.CREATE_REQUEST:
    return { ...state, loading: true };
  case Types.CREATE_SUCCESS:
    return { ...state, loading: false, currentEvent: action.payload.data };
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
  createEventRequest: data => ({
    type: Types.CREATE_REQUEST,
    payload: { data },
  }),
  createEventSuccess: data => ({
    type: Types.CREATE_SUCCESS,
    payload: { data },
  }),
};
