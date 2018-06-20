import {combineReducers} from 'redux';
import {sessionReducer} from 'redux-react-session';
import authenticateReducer from './authenticate-reducer';
import userProfileReducer from './user-profile-reducer';
import moduleReducer from './module-reducer';
import menuReducer from './menu-reducer';
import submenuReducer from './submenu-reducer';
import userReducer from './user-reducer';


const rootReducer = combineReducers({
    sessionReducer,
    authenticateReducer,
    userProfileReducer,
    userReducer,
    
    moduleReducer,
    menuReducer,
    submenuReducer,
    userReducer,
});

export default rootReducer;