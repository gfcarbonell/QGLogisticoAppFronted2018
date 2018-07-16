import {combineReducers} from 'redux';
import {sessionReducer} from 'redux-react-session';
import authenticateReducer from './authenticate-reducer';
import userProfileReducer from './user-profile-reducer';
import userReducer from './user-reducer';
import identificationDocumentTypeReducer from './identification-document-type-reducer';

import employeeReducer from './employee-reducer';
import employeeTypeReducer from './employee-type-reducer';
import employeePositionReducer from './employee-position-reducer';
import entityReducer from './entity-reducer';
import headquartersReducer from './headquarters-reducer';
import areaReducer from './area-reducer';


const rootReducer = combineReducers({
    sessionReducer,
    authenticateReducer,
    userProfileReducer,
    userReducer,
    identificationDocumentTypeReducer, 
    employeeReducer,
    employeeTypeReducer,
    employeePositionReducer,

    entityReducer,
    headquartersReducer,
    areaReducer
});

export default rootReducer;