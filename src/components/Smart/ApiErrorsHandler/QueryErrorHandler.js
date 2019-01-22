import React from 'react'
import ApiErrorsHandler from './ApiErrorsHandler'
import { commonErrHandler } from '../../../apiErrors/handler'

function QueryErrorHandler({ errors }) {
    const apiErrors = commonErrHandler(errors)
    return (
        <ApiErrorsHandler apiErrors={apiErrors} />
    )
}

export default QueryErrorHandler
