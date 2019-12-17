import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../services/api';

function* getListSaga({ payload }) {
    try {
        const res = yield call(api.repository.list, payload);
        console.log('====================================');
        console.log('items: ', res);
        console.log('====================================');
    } catch (err) {
        console.log('err: ', err);
    }
}

export default function* homeSagas() {
    yield takeLatest(actions.getList.type, getListSaga);
}
