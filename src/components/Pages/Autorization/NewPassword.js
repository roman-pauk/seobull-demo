import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import queryString from 'query-string'

import NewPasswordForm from '../../Smart/NewPasswordForm/NewPasswordForm'
import Icon from '../../Dump/Icons/Icon'
import { saveNewPassword } from '../../../actions/auth'
import config from '../../../config'


class NewPassword extends Component {
    state = {
        redirectToLogin: false
    }

    componentDidUpdate(prevProps) {
        const { success } = this.props.new_password
        if (success && success !== prevProps.new_password.success) {
            this.setState({
                redirectToLogin: true
            })
        }
    }

    onFormSubmit = data => {
        const searchSrt = queryString.parse(this.props.location.search)
        this.props.saveNewPassword({
            input: {
                password: data.password,
                longToken: searchSrt['long-token'],
            }
        })
    }
    render() {
        const { user } = this.props
        if (user) {
            return (
                <Redirect to="/" />
            )
        }
        const searchSrt = queryString.parse(this.props.location.search)
        if (this.state.redirectToLogin || !searchSrt['long-token']) {
            return (
                <Redirect to="/login" />
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
                            <span>Введите новый пароль</span>
                        </div>
                        <NewPasswordForm onFormSubmit={this.onFormSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.remote.auth.register.user,
    new_password: state.remote.auth.new_password,
})

export default connect(mapStateToProps, { saveNewPassword })(NewPassword)
