import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, change } from 'redux-form'

import { InputField, MaskedField, SelectField, CheckField } from '../../Dump/FormInputs/InputFields'
import { email, required, validatePhone, minPassLength, conteinsNum } from '../../Dump/FormInputs/validateFunctions'
import PromoForm from './PromoForm'
import { Link } from 'react-router-dom'
import Icon from '../../Dump/Icons/Icon'
import { CSSTransition } from 'react-transition-group'
import ApiErrorsHandler from '../ApiErrorsHandler/ApiErrorsHandler'
import Button from '../../Dump/LoadingButton/LoadingButton'
import config from '../../../config'


const options = [
    { value: 'ceo', label: 'СЕО' },
    { value: 'owner', label: 'Владелец' },
    { value: 'cmo', label: 'CMO' },
    { value: 'marketing', label: 'Маркетолог' },
    { value: 'other', label: 'Другое' },
]

class SignUpForm extends Component {
    state = {
        showPromo: false
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    onFieldChange = (name, val) => {
        this.props.dispatch(change('register-form', name, val))
    }
    changeShowPropmo = () => {
        this.setState(state => ({
            showPromo: !state.showPromo
        }))
    }
    demoLogin = () => {
        this.props.onLogin({
            input: config.demoAccData
        })
    }
    render() {
        const { handleSubmit, pristine, onSignUp, register, login } = this.props
        return (
            <form id="form-signup" noValidate onSubmit={handleSubmit(onSignUp)} className="modal-inner">
                <a href={config.mainLandingUrl} className="modal-logo">
                    <Icon id="icon-logo-modal" />
                    <Icon id="icon-logo-white" />
                </a>
                <div className="modal-content">
                    <div className="modal-content__top">
                        <span>Добро пожаловать!</span>
                        <span>До продвижения сайта осталось 2 шага</span>
                    </div>
                    <div className="modal-content-fields">
                        <div className="form-box fix_mobile-width-100">
                            <Field
                                name="name"
                                label="Имя"
                                component={InputField}
                                validate={[required]} />
                            <Field
                                name="duty"
                                label="Должность"
                                options={options}
                                onFieldChange={this.onFieldChange}
                                component={SelectField}
                                validate={required}
                            />
                        </div>
                        <Field
                            name="email"
                            type="email"
                            label="Эл. почта"
                            component={InputField}
                            validate={[required, email]} />

                        <Field
                            name="password"
                            label="Пароль"
                            type="password"
                            component={InputField}
                            validate={[required, minPassLength, conteinsNum]} />

                        <div className="form-box fix_mobile-width-100">
                            <Field
                                name="phone"
                                type="tel"
                                label="Телефон"
                                mask="+ 7(999)999-99-99"
                                validate={[required, validatePhone]}
                                component={MaskedField} />
                            {/* <Field
                                name="user_code"
                                label="код СМС"
                                component={InputField} /> */}
                        </div>
                        {/* <div className="modal-sms-txt">
                            <p>Код выслан, если не пришел можно <a href="#">выслать снова</a></p>
                        </div> */}
                    </div>
                    {register.errors && <ApiErrorsHandler apiErrors={register.errors} />}
                    <div className="modal-content-promo js-edit-wrap">
                        <button onClick={this.changeShowPropmo} type="button" className="js-edit-btn"><span>Есть промокод?</span></button>
                        <CSSTransition
                            classNames="promo-animation"
                            in={this.state.showPromo}
                            unmountOnExit
                            timeout={300}>
                            <PromoForm
                                hideForm={this.changeShowPropmo}
                                opened={this.state.showPromo} />
                        </CSSTransition>
                    </div>
                </div>
                <div className="modal-footer">
                    <Field
                        name="policity"
                        type="checkbox"
                        validate={required}
                        component={CheckField}
                    />
                    <Button loading={register.fetching} type="submit" disabled={pristine || register.fetching || login.fetching} className="modal-submit-btn">
                        <span>Зарегистрироваться</span>
                        <Icon id="icon-arrow-right" />
                    </Button>
                </div>
                <div className="modal-additional">
                    <span>Уже есть регистрация?</span>
                    <Link to="/login">Войти в свой аккаунт</Link>
                    <button disabled={login.fetching} type="button" onClick={this.demoLogin}>Демо</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        form: 'register-form',
        touchOnBlur: false,
        initialValues: {
            policity: true
        }
    }
}


export default connect(mapStateToProps)(reduxForm()(SignUpForm))
