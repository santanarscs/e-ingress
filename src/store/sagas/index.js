import { all, takeLatest } from 'redux-saga/effects';
import { Types as EventsTypes } from '../ducks/events';
import { getEvents } from './events';

export default function* rootSaga() {
  return yield all([takeLatest(EventsTypes.GET_REQUEST, getEvents)]);
}
