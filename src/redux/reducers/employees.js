import { bindActionCreators } from 'redux';
import * as type from '../Types/index';

const initialState = {
    employees: []
}

export default function employees(state = initialState, action) {
    console.log("333333333")
    switch(action.type) {
        case type.GET_EMPLOYEES_SUCCESS :
            console.log(action, 1111333333333)
            return {
                employees: action.payload
            }
        default:
            return state
    }
}