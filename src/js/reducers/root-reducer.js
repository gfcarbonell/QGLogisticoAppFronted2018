import {combineReducers} from 'redux';
import authenticateReducer from './authenticate-reducer';
import {sessionReducer} from 'redux-react-session';
const rootReducer = combineReducers({
    authenticateReducer,
    sessionReducer
});

export default rootReducer;