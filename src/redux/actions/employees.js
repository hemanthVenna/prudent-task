import * as type from '../Types/index';

export const getEmployees = (payload) => {
    return {
        type: type.GET_EMPLOYEES_REQUEST,
        payload: payload
    }
}

export const getEmployeesSuccess = (payload) => {
    return {
        type: type.GET_EMPLOYEES_SUCCESS,
        payload: payload
    }
}

export const addEmployees = (payload) => {
    return {
        type: type.ADD_EMPLOYEE_REQUEST,
        payload: payload
    }
}

export const addEmployeesSuccess = (payload) => {
    return {
        type: type.ADD_EMPLOYEE_SUCCESS,
        payload: payload
    }
}

export const editEmployees = (payload) => {
    return {
        type: type.EDIT_EMPLOYEE_REQUEST,
        payload: payload
    }
}

export const editEmployeesSuccess = (payload) => {
    return {
        type: type.EDIT_EMPLOYEE_SUCCESS,
        payload: payload
    }
}

export const deleteEmployees = (payload) => {
    return {
        type: type.DELETE_EMPLOYEE_REQUEST,
        payload: payload
    }
}

export const deleteEmployeesSuccess = (payload) => {
    return {
        type: type.DELETE_EMPLOYEE_SUCCESS,
        payload: payload
    }
}