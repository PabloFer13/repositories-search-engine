import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../services/api';

function* getListSaga({ payload }) {
    try {
        const {
            data: { items },
        } = yield call(api.repository.list, payload);
        yield put(actions.setList(items));
    } catch (err) {
        console.log('err: ', err);
    }
}

export default function* homeSagas() {
    yield takeLatest(actions.getList.type, getListSaga);
}
