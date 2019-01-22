import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { InputField } from '../../Dump/FormInputs/InputFields'
import { email, required } from '../../Dump/FormInputs/validateFunctions'
import Button from '../../Dump/LoadingButton/LoadingButton'
import ApiErrorsHandler from '../ApiErrorsHandler/ApiErrorsHandler'

function RestoreFrom({ handleSubmit, pristine, onFormSubmit, reset_password }) {
    return (
        <form id="form-restore" noValidate onSubmit={handleSubmit(onFormSubmit)} className="js-form-check">
            <Field
                name="email"
                type="email"
                label="Эл. почта"
                component={InputField}
                validate={[required, email]} />
            {reset_password.errors && <ApiErrorsHandler apiErrors={reset_password.errors} />}
            <Button type="submit" disabled={pristine || reset_password.fetching} loading={reset_password.fetching} className="modal-submit-btn js-submit-btn">
                <span>Отправить</span>
            </Button>
        </form>
    )
}

const mapStateToProps = state => ({
    reset_password: state.remote.auth.reset_password
})

export default connect(mapStateToProps)(reduxForm({
    form: 'restore-form',
    touchOnBlur: false
})(RestoreFrom))
