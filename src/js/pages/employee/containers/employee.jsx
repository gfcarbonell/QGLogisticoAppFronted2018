import React from 'react';
import {Route} from 'react-router-dom';


const EmployeePage = ({ match }) => {
    return (
        <div>
            <div>
                <Route path={`${match.url}`} component={()=> <li> Employee </li>} /> {/* Main */}
            </div>
        </div>
    );
};

export default EmployeePage;