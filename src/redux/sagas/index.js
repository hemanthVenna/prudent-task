import { all } from 'redux-saga/effects';
 
import empSaga from "./employeeSaga";

export default function* rootSaga() {
    yield all([
        empSaga()
    ])
}