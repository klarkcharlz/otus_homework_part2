import { put, takeLatest } from 'redux-saga/effects';
import {
  SAVE_STATE,
  loadState,
  SaveStateAction
} from './actions';

export function* saveStateSaga(action: SaveStateAction) {
  localStorage.setItem('appState', JSON.stringify(action.payload));
  yield put(loadState());
}

export function* watchSaveState() {
  yield takeLatest(SAVE_STATE, saveStateSaga);
}
