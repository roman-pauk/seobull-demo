import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { InputField } from '../../Dump/FormInputs/InputFields'
import { minPassLength, conteinsNum, required } from '../../Dump/FormInputs/validateFunctions'
import Button from '../../Dump/LoadingButton/LoadingButton'
import ApiErrorsHandler from '../ApiErrorsHandler/ApiErrorsHandler'

const validate = values => {
    const errors = {}
    if (values.password_confirm !== values.password) {
        errors.password_confirm = 'Пароли не совпадают'
    }
    return errors
}

function NewPasswordForm({ handleSubmit, pristine, onFormSubmit, new_password }) {
    return (
        <form id="new-password-form" noValidate onSubmit={handleSubmit(onFormSubmit)} className="js-form-check">
            <Field
                name="password"
                type="password"
                label="Пароль"
                component={InputField}
                validate={[required, minPassLength, conteinsNum]} />
            <Field
                name="password_confirm"
                type="password"
                label="Подтвердите пароль"
                component={InputField}
                validate={[required]} />
            {new_password.errors && <ApiErrorsHandler apiErrors={new_password.errors} />}
            <Button type="submit" disabled={pristine || new_password.fetching} loading={new_password.fetching} className="modal-submit-btn js-submit-btn">
                <span>Изменить пароль</span>
            </Button>
        </form>
    )
}

const mapStateToProps = state => ({
    new_password: state.remote.auth.new_password
})

export default connect(mapStateToProps)(reduxForm({
    form: 'new-password-form',
    validate,
    touchOnBlur: false
})(NewPasswordForm))
