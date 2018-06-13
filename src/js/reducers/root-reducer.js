import {combineReducers} from 'redux';
import {sessionReducer} from 'redux-react-session';
import authenticateReducer from './authenticate-reducer';
import moduleReducer from './module-reducer';
import menuReducer from './menu-reducer';
import userReducer from './user-reducer';


const rootReducer = combineReducers({
    authenticateReducer,
    moduleReducer,
    menuReducer,
    userReducer,
    sessionReducer
});

export default rootReducer;