import { getAPIClient } from '../universal/apiClient'
import { m_paymentStart, m_paymentFinish, q_payments, m_paymentCancel } from '../graphql'
import { commonErrHandler } from '../apiErrors/handler'
import { toggleDemoModal } from './modals'
import { UPDATE_PROJECT } from './project'


export const PAYMENT_START_REQUEST = 'PAYMENT_START_REQUEST'
export const PAYMENT_START_SUCCESS = 'PAYMENT_START_SUCCESS'
export const PAYMENT_START_FAIL = 'PAYMENT_START_FAIL'
export const UPDATE_CORPORATE_INFO = 'UPDATE_CORPORATE_INFO'
export const UPDATE_PENDING_PAYMENT = 'UPDATE_PENDING_PAYMENT'

export const startPayment = (variables, type = null) => {
    return async dispatch => {
        dispatch({
            type: PAYMENT_START_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_paymentStart,
                variables
            })
            if (type === 'expense') {
                dispatch({
                    type: UPDATE_CORPORATE_INFO,
                    payload: variables.input.gateData.corporate
                })
            }
            if (data.data.paymentStart.payment.gateId === 'corporate') {
                dispatch({
                    type: UPDATE_PENDING_PAYMENT,
                    payload: { pendingPayment: data.data.paymentStart.payment.id }
                })
            }
            dispatch({
                type: PAYMENT_START_SUCCESS,
                payload: {
                    url: data.data.paymentStart.url,
                    type,
                }
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: PAYMENT_START_FAIL,
                payload: er
            })
        }
    }
}

export const PAYMENT_FINISH_REQUEST = 'PAYMENT_FINISH_REQUEST'
export const PAYMENT_FINISH_SUCCESS = 'PAYMENT_FINISH_SUCCESS'
export const PAYMENT_FINISH_FAIL = 'PAYMENT_FINISH_FAIL'
export const PAYMENT_FINISH_RESET = 'PAYMENT_FINISH_RESET'

export const resetFinishPayment = () => ({
    type: PAYMENT_FINISH_RESET
})

export const finishPayment = variables => {
    return async dispatch => {
        dispatch({
            type: PAYMENT_FINISH_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_paymentFinish,
                variables,
                refetchQueries: [
                    { query: q_payments }
                ]
            })
            const d = data.data.paymentFinish.payment
            const project = d.purpose ? d.purpose.project : null
            dispatch({
                type: PAYMENT_FINISH_SUCCESS,
                payload: {
                    amount: d.amount,
                    type: d.purpose ? d.purpose.type : null,
                }
            })
            if (project) {
                dispatch({
                    type: UPDATE_PROJECT,
                    payload: project
                })
            }
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: PAYMENT_FINISH_FAIL,
                payload: er
            })
        }
    }
}

export const CANSELBILL_REQUEST = 'CANSELBILL_REQUEST'
export const CANSELBILL_SUCCESS = 'CANSELBILL_SUCCESS'
export const CANSELBILL_FAIL = 'CANSELBILL_FAIL'

export const cancelBillACtion = id => {
    return async dispatch => {
        dispatch({
            type: CANSELBILL_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_paymentCancel,
                variables: {
                    input: {
                        id
                    }
                },
                refetchQueries: [
                    { query: q_payments }
                ]
            })
            dispatch({
                type: CANSELBILL_SUCCESS,
                payload: data.data.paymentCancel.user
            })
        } catch(error) {
            const er = commonErrHandler(error)
            dispatch({
                type: CANSELBILL_FAIL,
                payload: er
            })
        }
    }
}