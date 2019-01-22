import { combineReducers } from 'redux'

import {
    PAYMENT_START_REQUEST,
    PAYMENT_START_SUCCESS,
    PAYMENT_START_FAIL,
    PAYMENT_FINISH_REQUEST,
    PAYMENT_FINISH_SUCCESS,
    PAYMENT_FINISH_FAIL,
    PAYMENT_FINISH_RESET,
    CANSELBILL_REQUEST,
    CANSELBILL_SUCCESS,
    CANSELBILL_FAIL,
} from '../actions/payment'

const initialState = {
    start_payment: {
        fetching: false,
        redirect: null,
        type: null,
        success: false,
        errors: null
    },
    finish_payment: {
        fetching: false,
        success: false,
        payment: null,
        errors: null
    },
    cansel_payment: {
        fetching: false,
        success: false,
        errors: null
    }
}

const start_payment = (state = initialState.start_payment, action) => {
    switch (action.type) {
    case PAYMENT_START_REQUEST:
        return {
            ...initialState.start_payment,
            fetching: true
        }
    case PAYMENT_START_SUCCESS:
        return {
            ...initialState.start_payment,
            success: true,
            redirect: action.payload.url,
            type: action.payload.type,
        }
    case PAYMENT_START_FAIL:
        return {
            ...initialState.start_payment,
            errors: action.payload,
        } 
    default:
        return state
    }
}

const finish_payment = (state = initialState.finish_payment, action) => {
    switch (action.type) {
    case PAYMENT_FINISH_REQUEST:
        return {
            ...initialState.finish_payment,
            fetching: true
        }
    case PAYMENT_FINISH_SUCCESS:
        return {
            ...initialState.finish_payment,
            success: true,
            payment: action.payload,
        }
    case PAYMENT_FINISH_FAIL:
        return {
            ...initialState.finish_payment,
            errors: action.payload,
        }
    case PAYMENT_FINISH_RESET:
        return {
            ...state,
            success: false,
        }
    default:
        return state
    }
}

const cansel_payment = (state = initialState.cansel_payment, action) => {
    switch (action.type) {
    case CANSELBILL_REQUEST:
        return {
            ...initialState.cansel_payment,
            fetching: true
        }
    case CANSELBILL_SUCCESS:
        return {
            ...initialState.cansel_payment,
            success: true,
        }
    case CANSELBILL_FAIL:
        return {
            ...initialState.cansel_payment,
            errors: action.payload,
        }
    default:
        return state
    }
}

export default combineReducers({
    start_payment,
    finish_payment,
    cansel_payment,
})