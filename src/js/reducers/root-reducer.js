import {combineReducers} from 'redux';
import authenticateReducer from './authenticate-reducer';
import userReducer from './user-reducer';
import {sessionReducer} from 'redux-react-session';
const rootReducer = combineReducers({
    authenticateReducer,
    userReducer,
    sessionReducer
});

export default rootReducer;