import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputField } from '../../Dump/FormInputs/InputFields'
import { email, required } from '../../Dump/FormInputs/validateFunctions'
import ApiErrorsHandler from '../../Smart/ApiErrorsHandler/ApiErrorsHandler'
import Button from '../../Dump/LoadingButton/LoadingButton'

class LoginForm extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const { handleSubmit, pristine, submitting, onUserLogin, login } = this.props
        return (
            <form id="form-signin" noValidate onSubmit={handleSubmit(onUserLogin)} className="js-form-check">
                <Field
                    name="email"
                    type="email"
                    label="Эл. почта"
                    component={InputField}
                    validate={[required, email]} />
                <Field
                    name="password"
                    type="password"
                    label="Пароль"
                    component={InputField}
                    validate={[required]} />
                {login.errors && <ApiErrorsHandler apiErrors={login.errors} />}
                <Button loading={login.fetching} type="submit" disabled={pristine || submitting || login.fetching} className="modal-submit-btn js-submit-btn"><span>Войти</span></Button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'login-form',
    touchOnBlur: false
})(LoginForm)
