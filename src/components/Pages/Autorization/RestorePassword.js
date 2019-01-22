import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import RestoreForm from '../../Smart/RestoreForm/RestoreForm'
import Icon from '../../Dump/Icons/Icon'
import { resetPassword, resetPasswordCast } from '../../../actions/auth'
import config from '../../../config'


class RestorePassword extends Component {
    onFormSubmit = data => {
        this.props.resetPassword(data.email)
    }
    componentWillUnmount () {
        this.props.resetPasswordCast()
    }
    render() {
        const { user, reset_password } = this.props
        if (user) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="c-login_wrap">
                <Helmet>
                    <title>Seobull | Restore </title>
                    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
                </Helmet>
                <div className="modal-inner modal-inner-password">
                    <a href={config.mainLandingUrl} className="modal-logo">
                        <Icon id="icon-logo-modal" />
                    </a>
                    <div className="modal-content">
                        <div className="modal-content__top">
                            {reset_password.success ?
                                <div className="success_msg">
                                    <Icon id="icon-connected" />
                                    <span>Проверьте почту. Ми выслали вам инструкцию по восстановлению пароля</span>
                                </div> :
                                <span>Укажите свою почту для получения инструкций по восстановлению доступа</span>
                            }
                        </div>
                        <RestoreForm
                            onFormSubmit={this.onFormSubmit}
                        />
                    </div>
                    <div className="modal-additional">
                        <span>Вспомнили пароль?</span>
                        <Link id="link-signin-login" to="/login">Войти в аккаунт</Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.remote.auth.register.user,
    reset_password: state.remote.auth.reset_password
})

export default connect(mapStateToProps, { resetPassword, resetPasswordCast })(RestorePassword)
