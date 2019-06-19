import { all, takeLatest } from 'redux-saga/effects';
import { Types as EventsTypes } from '../ducks/events';
import { getEvents, getEvent } from './events';

export default function* rootSaga() {
  return yield all([
    takeLatest(EventsTypes.LOAD_ALL_REQUEST, getEvents),
    takeLatest(EventsTypes.LOAD_ONE_REQUEST, getEvent),
  ]);
}
