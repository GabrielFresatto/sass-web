import { combineReducers } from 'redux'
import { reducer as toastr } from 'react-redux-toastr'
import auth from './auth'

const reducers = combineReducers({
	auth,
	toastr,
})

export default reducers