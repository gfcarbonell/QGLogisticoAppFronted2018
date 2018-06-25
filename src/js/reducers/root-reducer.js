import {combineReducers} from 'redux';
import {sessionReducer} from 'redux-react-session';
import authenticateReducer from './authenticate-reducer';
import userProfileReducer from './user-profile-reducer';
import userReducer from './user-reducer';
import identificationDocumentTypeReducer from './identification-document-type';

const rootReducer = combineReducers({
    sessionReducer,
    authenticateReducer,
    userProfileReducer,
    userReducer,
    identificationDocumentTypeReducer
});

export default rootReducer;