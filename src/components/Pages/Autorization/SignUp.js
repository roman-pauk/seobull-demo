import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SignUpForm from '../../Smart/SignUpForm/SignUpForm'
import CreateProject from '../../Smart/SignUpForm/CreateProject'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { SignUp, LoginUser, logOut } from '../../../actions/auth'
import { createProject } from '../../../actions/project'

class SignUpPage extends Component {

    componentDidMount() {
        const { location, history, logOut } = this.props
        if (!!location.state && !!location.state.logOutUser) {
            logOut()
            history.replace({
                pathname: location.pathname,
                state: {}
            })
        }
    }

    onSignUp = (data) => {
        const promo = !!this.props.promo.type && this.props.promo.type !== 'unknown_code' ? this.props.promo.code : null
        this.props.SignUp({
            input: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                duty: data.duty.value,
                password: data.password,
                promo
            }
        })
    }
    onCreateProject = (data) => {
        const regions = data.regions.map(el => el.label)
        const webEngine = data.webEngine.value
        this.props.createProject({
            input: {
                domain: data.site_url,
                webEngine: webEngine.length === 0 ? null : webEngine,
                regions
            }
        })
    }
    render() {
        const { register: { user }, location } = this.props
        const needCreateAcc = !!location.state && !!location.state.logOutUser
        const hasDefProject = !!user && !user.defaultProject

        if (user && user.defaultProject && !needCreateAcc) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <div className="c-signUp_wrap">
                <Helmet>
                    <title>Seobull | Register </title>
                    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
                </Helmet>
                {hasDefProject ?
                    <CreateProject
                        user={user}
                        project={this.props.project}
                        onCreateProject={this.onCreateProject}
                    /> :
                    <SignUpForm
                        register={this.props.register}
                        login={this.props.login}
                        onSignUp={this.onSignUp}
                        onLogin={this.props.LoginUser}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    register: state.remote.auth.register,
    login: state.remote.auth.login,
    project: state.remote.project.create,
    promo: state.remote.auth.promo,
})

export default connect(mapStateToProps, { SignUp, createProject, LoginUser, logOut })(SignUpPage)
