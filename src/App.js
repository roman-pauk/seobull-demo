import React, { Component } from 'react'
import { connect } from 'react-redux'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import { Helmet } from 'react-helmet'
import queryString from 'query-string'
import { withRouter } from 'react-router'
import routes from './routes'
import PrivateRoute from './components/Smart/PrivateRoute/PrivateRoute'
import { getCurrentUser, LoginUser, getUserFail } from './actions/auth'
import SvgIcons from './SvgIcons'
import AppCatchErr from './components/Smart/CatchError/AppCatchErr'
import config from './config'
import '../public/css/all.css'

const { demoAccData } = config


class App extends Component {
    componentDidMount() {
        const { location, history } = this.props
        const searchStr = queryString.parse(location.search)
        if (searchStr.enterDemo === 'true') {
            this.props.LoginUser({
                input: demoAccData
            }, true)
            history.replace({
                pathname: location.pathname,
                state: {}
            })
        } else if (searchStr.externalAuth) {
            this.props.LoginUser({accessToken: searchStr.externalAuth})
            history.replace({
                pathname: location.pathname,
                state: {}
            })
        } else if (location.pathname === '/register') {
            this.props.getUserFail()
        } else {
            this.props.getCurrentUser()
        }
    }
    render () {
        const { me, user, demoErrors } = this.props
        if (!user && !me.errors && !demoErrors) {
            return (
                <div className="admin-preloader page-preloader">
                    <div className="spinner"></div>
                </div>
            )
        }
        return (
            <div>
                <SvgIcons />
                <AppCatchErr>
                    <Helmet>
                        <title>Seobull</title>
                        <meta name="viewport" content="width=1270" />
                        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                    </Helmet>
                    <Switch>
                        {routes.map(route => {
                            if (route.private) {
                                return <PrivateRoute key={route.name} {...route} />
                            }
                            return <Route key={route.name} {...route} />
                        })}
                    </Switch>
                </AppCatchErr>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.remote.auth.register.user,
    me: state.remote.auth.me,
    demoErrors: state.remote.auth.login.demoErrors,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getCurrentUser, LoginUser, getUserFail },
        null,
        { pure: false }
    )(App)
)
