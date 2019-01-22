import { combineReducers } from "redux"
import { CREATE_PROJECT_REQUEST, 
    CREATE_PROJECT_SUCCESS, 
    CREATE_PROJECT_FAIL,
    SET_ANALITICS_REQUEST,
    SET_ANALITICS_SUCCESS,
    SET_ANALITICS_FAIL,
    SET_SITE_CREDENTIALS_REQUEST,
    SET_SITE_CREDENTIALS_SUCCESS,
    SET_SITE_CREDENTIALS_FAIL,
    SET_ENGINE_REQUEST,
    SET_ENGINE_SUCCESS,
    SET_ENGINE_FAIL,
    SET_ANALITIC_MAIN_REQUEST,
    SET_ANALITIC_MAIN_SUCCESS,
    SET_ANALITIC_MAIN_FAIL,
    // SET_PLAN_REQUEST,
    // SET_PLAN_SUCCESS,
    // SET_PLAN_FAIL,
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAIL,
    GET_ANSWER_REQUEST,
    GET_ANSWER_SUCCESS,
    GET_ANSWER_FAIL, } from '../actions/project'
import { TOGGLE_ANALITIC_ACESS_MODAL } from '../actions/modals'

const initialState = {
    create: {
        fetching: false,
        success: false,
        errors: null
    },
    set_analitic: {
        fetching: false,
        success: false,
        errors: null
    },
    set_site_credentials: {
        fetching: false,
        success: false,
        errors: null
    },
    set_engine: {
        fetching: false,
        success: false,
        errors: null
    },
    set_plan: {
        fetching: false,
        success: false,
        errors: null
    },
    set_analitic_main: {
        fetching: false,
        success: false,
        errors: null
    },
    update_project: {
        fetching: false,
        errors: null,
        success: false
    },
    get_answer: {
        fetching: false,
        errors: null,
        success: false
    },
}

const createProject = (state = initialState.create, action) => {
    switch (action.type) {
    case CREATE_PROJECT_REQUEST:
        return {
            ...initialState.create,
            fetching: true
        }
    case CREATE_PROJECT_SUCCESS:
        return {
            ...initialState.create,
            success: true
        }
    case CREATE_PROJECT_FAIL:
        return {
            ...initialState.create,
            errors: action.payload,
        } 
    default:
        return state
    }
}

const set_analitic = (state = initialState.set_analitic, action) => {
    switch (action.type) {
    case SET_ANALITICS_REQUEST:
        return {
            ...initialState.set_analitic,
            fetching: true
        }
    case SET_ANALITICS_SUCCESS:
        return {
            ...initialState.set_analitic,
            success: true
        }
    case SET_ANALITICS_FAIL:
        return {
            ...initialState.set_analitic,
            errors: action.payload,
        } 
    case TOGGLE_ANALITIC_ACESS_MODAL: {
        return initialState.set_analitic
    }
    default:
        return state
    }
}

const set_site_credentials = (state = initialState.set_site_credentials, action) => {
    switch (action.type) {
    case SET_SITE_CREDENTIALS_REQUEST:
        return {
            ...initialState.set_site_credentials,
            fetching: true
        }
    case SET_SITE_CREDENTIALS_SUCCESS:
        return {
            ...initialState.set_site_credentials,
            success: true
        }
    case SET_SITE_CREDENTIALS_FAIL:
        return {
            ...initialState.set_site_credentials,
            errors: action.payload,
        } 
    default:
        return state
    }
}

const set_engine = (state = initialState.set_engine, action) => {
    switch (action.type) {
    case SET_ENGINE_REQUEST:
        return {
            ...initialState.set_engine,
            fetching: true
        }
    case SET_ENGINE_SUCCESS:
        return {
            ...initialState.set_engine,
            success: true
        }
    case SET_ENGINE_FAIL:
        return {
            ...initialState.set_engine,
            errors: action.payload,
        } 
    default:
        return state
    }
}

// const set_plan = (state = initialState.set_plan, action) => {
//     switch (action.type) {
//         case SET_PLAN_REQUEST:
//             return {
//                 ...initialState.set_plan,
//                 fetching: true
//             }
//         case SET_PLAN_SUCCESS:
//             return {
//                 ...initialState.set_plan,
//                 success: true
//             }
//         case SET_PLAN_FAIL:
//             return {
//                 ...initialState.set_plan,
//                 errors: action.payload,
//             } 
//         default:
//             return state
//     }
// }

const set_analitic_main = (state = initialState.set_analitic_main, action) => {
    switch (action.type) {
    case SET_ANALITIC_MAIN_REQUEST:
        return {
            ...initialState.set_analitic_main,
            fetching: true
        }
    case SET_ANALITIC_MAIN_SUCCESS:
        return {
            ...initialState.set_analitic_main,
            success: true
        }
    case SET_ANALITIC_MAIN_FAIL:
        return {
            ...initialState.set_analitic_main,
            errors: action.payload,
        } 
    default:
        return state
    }
}

const update_project = (state = initialState.update_project, action) => {
    switch (action.type) {
    case UPDATE_PROJECT_REQUEST:
        return {
            ...initialState.update_project,
            fetching: true
        }
    case UPDATE_PROJECT_SUCCESS:
        return {
            ...initialState.update_project,
            success: true
        }
    case UPDATE_PROJECT_FAIL:
        return {
            ...initialState.update_project,
            errors: action.payload,
        }
    default:
        return state
    }
}

const get_answer = (state = initialState.get_answer, action) => {
    switch (action.type) {
    case GET_ANSWER_REQUEST:
        return {
            ...initialState.get_answer,
            fetching: true
        }
    case GET_ANSWER_SUCCESS:
        return {
            ...initialState.get_answer,
            success: true
        }
    case GET_ANSWER_FAIL:
        return {
            ...initialState.get_answer,
            errors: action.payload,
        }
    default:
        return state
    }
}

export default combineReducers({
    create: createProject,
    set_analitic,
    set_analitic_main,
    set_site_credentials,
    set_engine,
    // set_plan,
    update_project,
    get_answer,
})