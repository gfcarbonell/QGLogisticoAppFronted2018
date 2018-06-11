import React from 'react';
import {Route} from 'react-router-dom';


const EmployeePage = ({ match }) => {
    return (
        <div className='row'>
            <div className='col s12 m4 l4'> 
                <figure>
                    <img />
                    <figcaption>
                        <a> Dashboard </a>
                    </figcaption>
                </figure>
            </div>
            <div className='col s12 m8 l8'>
                <Route path={`${match.url}`} component={()=> <li> Employee </li>} /> {/* Main */}
            </div>
        </div>
    );
};

export default EmployeePage;