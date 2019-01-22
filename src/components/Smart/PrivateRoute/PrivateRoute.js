import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={(props) => (
        !user
            ? <Redirect to='/login' />
            : user.defaultProject
                ? <Component {...props} />
                : <Redirect to='/register' />
    )} />
)

const mapStateToProps = (state) => ({
    user: state.remote.auth.register.user
})

export default connect(mapStateToProps)(PrivateRoute)
