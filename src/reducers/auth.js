import { combineReducers } from 'redux'
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,
    ME_REQUEST, ME_SUCCESS, ME_FAIL,
    PROMO_CODE_REQUEST, PROMO_CODE_SUCCESS, PROMO_CODE_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    RESET_STORE,
    HIDE_COOKIES_MESSAGE_REQUEST,
    HIDE_COOKIES_MESSAGE_SUCCESS,
    HIDE_COOKIES_MESSAGE_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CAST,
    SAVE_NEW_PASSWORD_REQUEST,
    SAVE_NEW_PASSWORD_SUCCESS,
    SAVE_NEW_PASSWORD_FAIL, } from '../actions/auth'

import { CREATE_PROJECT_SUCCESS,
    SET_SITE_CREDENTIALS_SUCCESS,
    SET_ENGINE_SUCCESS,
    SET_ANALITICS_SUCCESS,
    SET_ANALITIC_MAIN_SUCCESS,
    PROJECT_PAYMENT_SUCCESS,
    // SET_PLAN_SUCCESS,
    PROJECT_SET_STATE_SUCCESS,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT,
    CHANGE_PROJECT_STATE, } from '../actions/project'
import { UPDATE_CORPORATE_INFO, CANSELBILL_SUCCESS, UPDATE_PENDING_PAYMENT } from '../actions/payment'

const initialState = {
    register: {
        fetching: false,
        errors: null,
        user: null
    },
    login: {
        fetching: false,
        errors: null,
        demoErrors: false,
        success: false
    },
    me: {
        fetching: false,
        errors: false,
        success: false
    },
    promo: {
        fetching: false,
        errors: null,
        success: false,
        code: '',
        type: ''
    },
    update_user: {
        fetching: false,
        errors: null,
        success: false
    },
    reset_password: {
        fetching: false,
        success: false,
        errors: null,
    },
    new_password: {
        fetching: false,
        success: false,
        errors: null,
    },
    cookie_msg: {
        fetching: false,
        errors: null,
    }
}

const register = (state = initialState.register, action) => {
    switch (action.type) {
    case SIGN_UP_REQUEST:
        return {
            ...initialState.register,
            fetching: true
        }
    case SIGN_UP_SUCCESS:
    case UPDATE_USER_SUCCESS:
        return {
            ...initialState.register,
            user: action.payload,
        }
    case SIGN_UP_FAIL:
        return {
            ...initialState.register,
            errors: action.payload,
        }
    // case LOGIN_SUCCESS:
    case ME_SUCCESS:
        return {
            ...initialState.register,
            user: action.payload,
        }
        // case SET_PLAN_SUCCESS:
    case SET_SITE_CREDENTIALS_SUCCESS:
    case SET_ANALITICS_SUCCESS:
    case SET_ENGINE_SUCCESS:
    case PROJECT_PAYMENT_SUCCESS:
    case SET_ANALITIC_MAIN_SUCCESS:
    case PROJECT_SET_STATE_SUCCESS:
    case CREATE_PROJECT_SUCCESS:
    case UPDATE_PROJECT:
    case UPDATE_PROJECT_SUCCESS: {
        return {
            ...state,
            user: {
                ...state.user,
                defaultProject: action.payload
            }
        }
    }
    case UPDATE_CORPORATE_INFO: {
        return {
            ...state,
            user: {
                ...state.user,
                lastCorporateInfo: action.payload
            }
        }
    }
    case CHANGE_PROJECT_STATE: {
        return {
            ...state,
            user: {
                ...state.user,
                defaultProject: {
                    ...state.user.defaultProject,
                    state: action.payload,
                }
            }
        }
    }
    case CANSELBILL_SUCCESS:
    case UPDATE_PENDING_PAYMENT:
    case HIDE_COOKIES_MESSAGE_SUCCESS: {
        return {
            ...state,
            user: {
                ...state.user,
                ...action.payload
            }
        }
    }
    case RESET_STORE: {
        return initialState.register
    }
    default:
        return state
    }
}

const login = (state = initialState.login, action) => {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
            ...initialState.login,
            fetching: true
        }
    case LOGIN_SUCCESS:
        return {
            ...initialState.login,
            success: true
        }
    case LOGIN_FAIL:
        return {
            ...initialState.login,
            errors: action.payload.errors,
            demoErrors: action.payload.demoErrors,
        }
    case RESET_STORE: {
        return initialState.login
    }
    default:
        return state
    }
}

const me = (state = initialState.me, action) => {
    switch (action.type) {
    case ME_REQUEST:
        return {
            ...initialState.me,
            fetching: true
        }
    case ME_SUCCESS:
        return {
            ...initialState.me,
            success: true
        }
    case ME_FAIL:
        return {
            ...initialState.me,
            errors: true,
        }
    case RESET_STORE: {
        return {
            ...initialState.me,
            errors: true,
        }
    }
    default:
        return state
    }
}

const promo = (state = initialState.promo, action) => {
    switch (action.type) {
    case PROMO_CODE_REQUEST:
        return {
            ...initialState.promo,
            fetching: true
        }
    case PROMO_CODE_SUCCESS:
        return {
            ...initialState.promo,
            type: action.payload.type,
            code: action.payload.code,
            success: true
        }
    case PROMO_CODE_FAIL:
        return {
            ...initialState.promo,
            errors: action.payload,
        }
    case RESET_STORE: {
        return initialState.promo
    }
    default:
        return state
    }
}

const update_user = (state = initialState.update_user, action) => {
    switch (action.type) {
    case UPDATE_USER_REQUEST:
        return {
            ...initialState.update_user,
            fetching: true
        }
    case UPDATE_USER_SUCCESS:
        return {
            ...initialState.update_user,
            success: true
        }
    case UPDATE_USER_FAIL:
        return {
            ...initialState.update_user,
            errors: action.payload,
        }
    case RESET_STORE: {
        return initialState.update_user
    }
    default:
        return state
    }
}

const cookie_msg = (state = initialState.cookie_msg, action) => {
    switch (action.type) {
    case HIDE_COOKIES_MESSAGE_REQUEST:
        return {
            errors: null,
            fetching: true,
        }
    case HIDE_COOKIES_MESSAGE_SUCCESS:
        return {
            errors: null,
            fetching: false,
        }
    case HIDE_COOKIES_MESSAGE_FAIL:
        return {
            errors: action.payload,
            fetching: false,
        }
    case RESET_STORE:
        return initialState.cookie_msg
    default:
        return state
    }
}

const reset_password = (state = initialState.reset_password, action) => {
    switch (action.type) {
    case RESET_PASSWORD_REQUEST:
        return {
            ...initialState.reset_password,
            fetching: true,
        }
    case RESET_PASSWORD_SUCCESS:
        return {
            ...initialState.reset_password,
            success: true,
        }
    case RESET_PASSWORD_FAIL:
        return {
            ...initialState.reset_password,
            errors: action.payload,
        }
    case RESET_PASSWORD_CAST:
    case RESET_STORE:
        return initialState.reset_password
    default:
        return state
    }
}

const new_password = (state = initialState.new_password, action) => {
    switch (action.type) {
    case SAVE_NEW_PASSWORD_REQUEST:
        return {
            ...initialState.new_password,
            fetching: true,
        }
    case SAVE_NEW_PASSWORD_SUCCESS:
        return {
            ...initialState.new_password,
            success: true,
        }
    case SAVE_NEW_PASSWORD_FAIL:
        return {
            ...initialState.new_password,
            errors: action.payload,
        }
    case RESET_STORE:
        return initialState.new_password
    default:
        return state
    }
}

export default combineReducers({
    register,
    login,
    me,
    promo,
    update_user,
    reset_password,
    new_password,
    cookie_msg,
})
