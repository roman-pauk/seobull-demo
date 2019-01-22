import { getAPIClient } from '../universal/apiClient'


export const saveToken = token => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', token)
    }
}

export const removeToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt')
    }
}

export const purgeAuthentication = () => {
    removeToken()
    getAPIClient().resetStore()
}
