import { combineReducers } from "redux"
import auth from './auth'
import project from './project'
import payments from './payment'

export default combineReducers({
    auth,
    project,
    payments,
})
