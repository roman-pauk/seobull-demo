import { m_createProject, m_analiticAccess, m_siteAccess, m_setEngine, m_setAnalitic, m_payment, q_progress, m_setPlan, m_setProjectState,
    m_updateProject } from '../graphql'
import { getAPIClient } from '../universal/apiClient'
import { commonErrHandler } from '../apiErrors/handler'
import { toggleDemoModal } from './modals'

export const UPDATE_PROJECT = 'UPDATE_PROJECT'

export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST'
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS'
export const CREATE_PROJECT_FAIL = 'CREATE_PROJECT_FAIL'

export const createProject = (variables) => {
    return async dispatch => {
        dispatch({
            type: CREATE_PROJECT_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_createProject,
                variables
            })
            dispatch({
                type: CREATE_PROJECT_SUCCESS,
                payload: data.data.projectCreate
            })
        } catch(error) {
            dispatch({
                type: CREATE_PROJECT_FAIL,
                payload: commonErrHandler(error)
            })
        }
    }
}

export const SET_ANALITICS_REQUEST = 'SET_ANALITICS_REQUEST'
export const SET_ANALITICS_SUCCESS = 'SET_ANALITICS_SUCCESS'
export const SET_ANALITICS_FAIL = 'SET_ANALITICS_FAIL'

export const setAnalitics = (variables) => {
    return async dispatch => {
        dispatch({
            type: SET_ANALITICS_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_analiticAccess,
                variables
            })
            dispatch({
                type: SET_ANALITICS_SUCCESS,
                payload: data.data.projectSetAnalyticsCredentials.project
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: SET_ANALITICS_FAIL,
                payload: er
            })
        }
    }
}

export const SET_SITE_CREDENTIALS_REQUEST = 'SET_SITE_CREDENTIALS_REQUEST'
export const SET_SITE_CREDENTIALS_SUCCESS = 'SET_SITE_CREDENTIALS_SUCCESS'
export const SET_SITE_CREDENTIALS_FAIL = 'SET_SITE_CREDENTIALS_FAIL'

export const setSiteCredentials = (variables) => {
    return async dispatch => {
        dispatch({
            type: SET_SITE_CREDENTIALS_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_siteAccess,
                variables
            })
            dispatch({
                type: SET_SITE_CREDENTIALS_SUCCESS,
                payload: data.data.projectSetSiteCredentials.project
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: SET_SITE_CREDENTIALS_FAIL,
                payload: er
            })
        }
    }
}

export const SET_ENGINE_REQUEST = 'SET_ENGINE_REQUEST'
export const SET_ENGINE_SUCCESS = 'SET_ENGINE_SUCCESS'
export const SET_ENGINE_FAIL = 'SET_ENGINE_FAIL'

export const setProjectEngine = (variables) => {
    return async dispatch => {
        dispatch({
            type: SET_ENGINE_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_setEngine,
                variables
            })
            dispatch({
                type: SET_ENGINE_SUCCESS,
                payload: data.data.projectSetWebEngine.project
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: SET_ENGINE_FAIL,
                payload: er
            })
        }
    }
}

export const SET_ANALITIC_MAIN_REQUEST = 'SET_ANALITIC_MAIN_REQUEST'
export const SET_ANALITIC_MAIN_SUCCESS = 'SET_ANALITIC_MAIN_SUCCESS'
export const SET_ANALITIC_MAIN_FAIL = 'SET_ANALITIC_MAIN_FAIL'

export const setAnaliticsMain = (variables) => {
    return async dispatch => {
        dispatch({
            type: SET_ANALITIC_MAIN_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_setAnalitic,
                variables
            })
            dispatch({
                type: SET_ANALITIC_MAIN_SUCCESS,
                payload: data.data.projectAnalyticsSet.project
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: SET_ANALITIC_MAIN_FAIL,
                payload: er
            })
        }
    }
}

// export const SET_PLAN_REQUEST = 'SET_PLAN_REQUEST'
// export const SET_PLAN_SUCCESS = 'SET_PLAN_SUCCESS'
// export const SET_PLAN_FAIL = 'SET_PLAN_FAIL'

// export const setProjectPlan = variables => {
//     return async dispatch => {
//         dispatch({
//             type: SET_PLAN_REQUEST
//         })
//         try {
//           const data = await getAPIClient().mutate({
//               mutation: m_setPlan,
//               variables
//           })
//           console.log(data)
//           dispatch({
//               type: SET_PLAN_SUCCESS,
//               payload: data.data.projectSetPlan.project
//           })
//         } catch(error) {
//             console.log(error)
//             dispatch({
//                 type: SET_PLAN_FAIL,
//                 payload: commonErrHandler(error)
//             })
//         }
//     }
// }

// fake payment
export const PROJECT_PAYMENT_REQUEST = 'PROJECT_PAYMENT_REQUEST'
export const PROJECT_PAYMENT_SUCCESS = 'PROJECT_PAYMENT_SUCCESS'
export const PROJECT_PAYMENT_FAIL = 'PROJECT_PAYMENT_FAIL'

export const projectPay = (variables) => {
    return async dispatch => {
        dispatch({
            type: PROJECT_PAYMENT_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_payment,
                variables,
                refetchQueries: [
                    { query: q_progress }
                ]
            })
            dispatch({
                type: PROJECT_PAYMENT_SUCCESS,
                payload: data.data.projectFirstPaymentStub.project
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: PROJECT_PAYMENT_FAIL,
                payload: er
            })
        }
    }
}

// change project state
export const PROJECT_SET_STATE_REQUEST = 'PROJECT_SET_STATE_REQUEST'
export const PROJECT_SET_STATE_SUCCESS = 'PROJECT_SET_STATE_SUCCESS'
export const PROJECT_SET_STATE_FAIL = 'PROJECT_SET_STATE_FAIL'

export const projectSetState = variables => {
    return async dispatch => {
        dispatch({
            type: PROJECT_SET_STATE_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_setProjectState,
                variables,
            })
            dispatch({
                type: PROJECT_SET_STATE_SUCCESS,
                payload: data.data.projectSetState.project
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: PROJECT_SET_STATE_FAIL,
                payload: er
            })
        }
    }
}

export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST'
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS'
export const UPDATE_PROJECT_FAIL = 'UPDATE_PROJECT_FAIL'

export const updateProject = (variables) => {
    return async dispatch => {
        dispatch({
            type: UPDATE_PROJECT_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_updateProject,
                variables
            })
            dispatch({
                type: UPDATE_PROJECT_SUCCESS,
                payload: data.data
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: UPDATE_PROJECT_FAIL,
                payload: er
            })
        }
    }
}

export const GET_ANSWER_REQUEST = 'GET_ANSWER_REQUEST'
export const GET_ANSWER_SUCCESS = 'GET_ANSWER_SUCCESS'
export const GET_ANSWER_FAIL = 'GET_ANSWER_FAIL'

export const getAnswer = (variables) => {
    return async dispatch => {
        dispatch({
            type: GET_ANSWER_REQUEST
        })
        try {
        //   const data = await getAPIClient().mutate({
        //       mutation: m_updateProject,
        //       variables
        //   })
        //   console.log(data)
            await new Promise(res => setTimeout(() => res(), 3000))
            dispatch({
                type: GET_ANSWER_SUCCESS
            })
        } catch(error) {
            dispatch({
                type: GET_ANSWER_FAIL,
                payload: commonErrHandler(error)
            })
        }
    }
}

export const CHANGE_PROJECT_STATE = 'CHANGE_PROJECT_STATE'

export const changeProjectState = state => ({
    type: CHANGE_PROJECT_STATE,
    payload: state
})