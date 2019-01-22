import { m_signUp, m_logIn, q_me, m_checkPromo, m_updateUser, m_userAcceptCookiePolicy, m_passwordReset, m_passwordNew } from '../graphql'
import { getAPIClient } from '../universal/apiClient'
import { saveToken, removeToken, purgeAuthentication } from './helpers'
import { commonErrHandler, registerErrHandler, loginErrHandler, passwordRestoreHandler } from '../apiErrors/handler'
import { toggleDemoModal } from './modals'


export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL'

export const SignUp = (variables) => {
    return async dispatch => {
        dispatch({
            type: SIGN_UP_REQUEST
        })
        removeToken()
        try {
            const data = await getAPIClient().mutate({
                mutation: m_signUp,
                variables
            })
            saveToken(data.data.signUp.accessToken)
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: data.data.signUp.user
            })
        } catch(error) {
            dispatch({
                type: SIGN_UP_FAIL,
                payload: registerErrHandler(error)
            })
        }
    }
}

export const ME_REQUEST = 'ME_REQUEST'
export const ME_SUCCESS = 'ME_SUCCESS'
export const ME_FAIL = 'ME_FAIL'

export const getUserFail = () => ({
    type: ME_FAIL
})

export const getCurrentUser = () => {
    return async dispatch => {
        dispatch({
            type: ME_REQUEST
        })
        try {
            const data = await getAPIClient().query({
                query: q_me
            })
            dispatch({
                type: ME_SUCCESS,
                payload: data.data.userCurrent
            })
        } catch(error) {
            console.log("Get user exception: ", error);
            dispatch({
                type: ME_FAIL
            })
        }
    }
}


export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LoginUser = (variables, isDemo = false) => {
    return async dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        })
        removeToken()
        try {
            let { accessToken } = variables
            if (!accessToken) {
                const data = await getAPIClient().mutate({
                    mutation: m_logIn,
                    variables
                })
                accessToken = data.data.signIn.accessToken
            }
            saveToken(accessToken)
            dispatch({
                type: LOGIN_SUCCESS,
                // payload: data.data.signIn.user
            })
            dispatch(getCurrentUser())
        } catch(error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: {
                    errors: loginErrHandler(error),
                    demoErrors: isDemo
                }
            })
        }
    }
}

export const PROMO_CODE_REQUEST = 'PROMO_CODE_REQUEST'
export const PROMO_CODE_SUCCESS = 'PROMO_CODE_SUCCESS'
export const PROMO_CODE_FAIL = 'PROMO_CODE_FAIL'

export const getPromoCode = (variables, code) => {
    return async dispatch => {
        dispatch({
            type: PROMO_CODE_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_checkPromo,
                variables
            })
            dispatch({
                type: PROMO_CODE_SUCCESS,
                payload: {
                    type: data.data.userCheckPromo.type,
                    code
                }
            })
        } catch(error) {
            dispatch({
                type: PROMO_CODE_FAIL,
                payload: commonErrHandler(error)
            })
        }
    }
}

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL'

export const updateUser = (variables) => {
    return async dispatch => {
        dispatch({
            type: UPDATE_USER_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_updateUser,
                variables
            })
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: data.data.userSelfUpdate.user
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: UPDATE_USER_FAIL,
                payload: er
            })
        }
    }
}

export const HIDE_COOKIES_MESSAGE_REQUEST = 'HIDE_COOKIES_MESSAGE_REQUEST'
export const HIDE_COOKIES_MESSAGE_SUCCESS = 'HIDE_COOKIES_MESSAGE_SUCCESS'
export const HIDE_COOKIES_MESSAGE_FAIL = 'HIDE_COOKIES_MESSAGE_FAIL'

export const hideCookiesMsg = () => {
    return async dispatch => {
        dispatch({
            type: HIDE_COOKIES_MESSAGE_REQUEST
        })
        try {
            const data = await getAPIClient().mutate({
                mutation: m_userAcceptCookiePolicy
            })
            dispatch({
                type: HIDE_COOKIES_MESSAGE_SUCCESS,
                payload: data.data.userAcceptCookiePolicy.user
            })
        } catch(error) {
            const er = commonErrHandler(error)
            if (er.showDemo) {
                dispatch(toggleDemoModal(true))
            }
            dispatch({
                type: HIDE_COOKIES_MESSAGE_FAIL,
                payload: er
            })
        }
    }
}

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL'
export const RESET_PASSWORD_CAST = 'RESET_PASSWORD_CAST'

export const resetPasswordCast = () => ({
    type: RESET_PASSWORD_CAST
})

export const resetPassword = (email = '') => {
    return async dispatch => {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        })
        removeToken()
        try {
            const data = await getAPIClient().mutate({
                mutation: m_passwordReset,
                variables: {
                    input: {
                        email
                    }
                }
            })
            dispatch({
                type: RESET_PASSWORD_SUCCESS,
                payload: data.data.userPasswordResetTokenSend
            })
        } catch(error) {
            dispatch({
                type: RESET_PASSWORD_FAIL,
                payload: passwordRestoreHandler(error)
            })
        }
    }
}

export const SAVE_NEW_PASSWORD_REQUEST = 'SAVE_NEW_PASSWORD_REQUEST'
export const SAVE_NEW_PASSWORD_SUCCESS = 'SAVE_NEW_PASSWORD_SUCCESS'
export const SAVE_NEW_PASSWORD_FAIL = 'SAVE_NEW_PASSWORD_FAIL'

export const saveNewPassword = variables => {
    return async dispatch => {
        dispatch({
            type: SAVE_NEW_PASSWORD_REQUEST
        })
        removeToken()
        try {
            await getAPIClient().mutate({
                mutation: m_passwordNew,
                variables
            })
            dispatch({
                type: SAVE_NEW_PASSWORD_SUCCESS
            })
        } catch(error) {
            dispatch({
                type: SAVE_NEW_PASSWORD_FAIL,
                payload: passwordRestoreHandler(error)
            })
        }
    }
}

export const RESET_STORE = 'RESET_STORE'
export const logOut = () => {
    purgeAuthentication()
    return {
        type: RESET_STORE
    }
}
