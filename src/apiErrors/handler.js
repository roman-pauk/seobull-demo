
import { commonErrs, signUpErrs, signInErrs, passwordRestoreErrs } from './errors'

const errorHandler = (errorMap = commonErrs, logOutSet = new Set(['UNAUTHENTICATED', 'TOKEN_EXPIRED', 'TOKEN_INVALID'])) => errors => {
    const {graphQLErrors, networkError} = errors
    if (graphQLErrors && graphQLErrors.length) {
        const errs = graphQLErrors.reduce((acc, e) => {
            const t = errorMap.get(e.extensions.code)
            if (!t) {
                console.error('Неизвестная ошибка', e.extensions.code)
                acc.message.add('Неизвестная ошибка')
            } else {
                acc.message.add(t)
            }
            if (logOutSet.has(e.extensions.code)) {
                acc.showLogOut = true
            }
            if(e.extensions.code === 'DEMO_RESTRICTION') {
                acc.showDemo = true
            }
            return acc
        }, { message: new Set(), showLogOut: false, showDemo: false })
        return {
            message: Array.from(errs.message),
            showLogOut: errs.showLogOut,
            showDemo: errs.showDemo,
        }
    }
    if (networkError) {
        return { message: ['Ошибка связи с сервером'], showLogOut: false }
    }
    console.error('Неизвестная ошибка', errors)
    return { message: ['Неизвестная ошибка'], showLogOut: false }
}

export const commonErrHandler = errorHandler()
export const registerErrHandler = errorHandler(signUpErrs, new Set())
export const loginErrHandler = errorHandler(signInErrs, new Set())
export const passwordRestoreHandler = errorHandler(passwordRestoreErrs, new Set())
