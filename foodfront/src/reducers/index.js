import {combineReducers} from 'redux'
import restaurants from './restaurants'
import authReducer from './auth'

export default combineReducers({
    restaurants,
    auth: authReducer,
})