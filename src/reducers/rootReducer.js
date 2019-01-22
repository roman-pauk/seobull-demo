import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import remote from './remote'
import local from './local'

export default combineReducers({
    remote,
    local,
    // FIXME: Придумать какой-то механизм args после их использования
    args: (state) => state || {},
    form: formReducer,
})
