import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import LoginForm from '../../Smart/LoginForm/LoginForm'
import Icon from '../../Dump/Icons/Icon'
import { LoginUser } from '../../../actions/auth'
import config from '../../../config'


class LoginPage extends Component {
    onUserLogin = (data) => {
        this.props.LoginUser({
            input: {
                email: data.email,
                password: data.password,
            }
        })
    }
    demoLogin = () => {
        this.props.LoginUser({
            input: config.demoAccData
        })
    }
    render() {
        const { user, login } = this.props
        if (user) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="c-login_wrap">
                <Helmet>
                    <title>Seobull | Login </title>
                    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
                </Helmet>
                <div className="modal-inner">
                    <a href={config.mainLandingUrl} className="modal-logo">
                        <Icon id="icon-logo-modal" />
                    </a>
                    <div className="modal-content">
                        <div className="modal-content__top">
                            <span>Войти</span>
                            <Link id="link-signin-restore" to="/restore">Забыли пароль?</Link>
                        </div>
                        <LoginForm
                            onUserLogin={this.onUserLogin}
                            login={login}
                        />
                    </div>
                    {/* <div className="modal-footer">
                        <a href="#" className="link-fb">
                            <Icon id="icon-fb" />
                            <span className="desktop-txt">Войти при помощи Facebook</span>
                            <span className="mobile-txt">Войти через Facebook</span>
                        </a>
                    </div> */}
                    <div className="modal-additional">
                        <span>Первый раз тут?</span>
                        <Link id="link-signin-register" to="/register">Создать аккаунт</Link>
                        <button disabled={login.fetching} type="button" onClick={this.demoLogin}>Демо</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.remote.auth.register.user,
    login: state.remote.auth.login
})


export default connect(mapStateToProps, { LoginUser })(LoginPage)
