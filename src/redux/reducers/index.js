import { combineReducers } from "redux";
import employees from './employees';

const rootReducer = combineReducers({
    employeesData: employees
})

export default rootReducer