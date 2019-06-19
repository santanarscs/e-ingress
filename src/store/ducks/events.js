export const Types = {
  GET_REQUEST: 'events/GET_REQUEST',
  GET_SUCCESS: 'events/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function events(state = INITIAL_STATE, action) {
  console.log(action.type);
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getEventsRequest: () => ({ type: Types.GET_REQUEST }),
  getEventsSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
