import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as EventsActions } from '../ducks/events';

export function* getEvents() {
  try {
    const response = yield call(api.get, '/events');
    yield put(EventsActions.getEventsSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}
