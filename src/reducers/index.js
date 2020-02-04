import { combineReducers } from 'redux'
import userReducers from './userReducers'
import dataReducers from './dataReducers'

export default combineReducers({
    users: userReducers,
    posts: dataReducers
});