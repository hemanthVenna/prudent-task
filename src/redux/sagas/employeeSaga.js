import { call, put, takeEvery } from 'redux-saga/effects';
import * as Constants from '../Types/index';
import { doGetApi, doPostApi } from '../ApiClient';
import * as actions from '../actions/employees';

function* getEmployees() {
    const res = yield call(doGetApi, Constants.GET_EMPLOYEES_URL);
    yield put(actions.getEmployeesSuccess(res.data.data))
}
function* editEmployees(action) {
    const res = yield call(doPostApi, Constants.EDIT_EMPLOYEE_URL, action.payload);
    if(res.status && res.status === "200") {
        yield put(actions.getEmployees())
    }
}

function* deleteEmployees(action) {
    const res = yield call(doPostApi, Constants.DELETE_EMPLOYEE_URL, action.payload);
    if(res.status && res.status === "200") {
        yield put(actions.getEmployees())
    }
}

function* addEmployees(action) {
    const res = yield call(doPostApi, Constants.ADD_EMPLOYEE_URL, action.payload);
}

function* login() {
    const res = yield call(doPostApi, Constants.LOGIN_URL, action.payload)
}

export default function* empSaga() {
    yield takeEvery(Constants.GET_EMPLOYEES_REQUEST, getEmployees)
    yield takeEvery(Constants.EDIT_EMPLOYEE_REQUEST, editEmployees)
    yield takeEvery(Constants.DELETE_EMPLOYEE_REQUEST, deleteEmployees)
    yield takeEvery(Constants.ADD_EMPLOYEE_REQUEST, addEmployees)
}