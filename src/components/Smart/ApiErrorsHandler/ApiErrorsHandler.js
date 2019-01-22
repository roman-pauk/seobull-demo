import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOut } from '../../../actions/auth'

class ApiErrorsHandler extends Component {
    render() {
        const { apiErrors } = this.props
        if (!apiErrors || typeof apiErrors !== 'object') {
            console.error('ApiErrorsHandler. prop "apiErrors" must be an object')
            return null
        }
        const { showLogOut } = apiErrors
        return (
            <div>
                <div className="form-control-errors">
                    {!!apiErrors.message && apiErrors.message.map((e, i) => <span key={`err-${i}`}>{e} </span>)}
                </div>
                {showLogOut &&
                    <div className="logoutBlock">
                        <span className="logoutBlock__text">Необходимо повторно войти</span>
                        <button onClick={this.props.logOut} type="button" className="link-admin-small fix_color-green">
                            <span>Войти</span>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default connect(null, { logOut })(ApiErrorsHandler)
