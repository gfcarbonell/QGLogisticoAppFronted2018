import {combineReducers} from 'redux';
import {sessionReducer} from 'redux-react-session';
import authenticateReducer from './authenticate-reducer';
import moduleReducer from './module-reducer';
import menuReducer from './menu-reducer';
import submenuReducer from './submenu-reducer';
import userReducer from './user-reducer';


const rootReducer = combineReducers({
    sessionReducer,
    authenticateReducer,
    moduleReducer,
    menuReducer,
    submenuReducer,
    userReducer,
});

export default rootReducer;