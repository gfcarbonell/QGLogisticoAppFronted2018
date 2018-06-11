import React from 'react';
import {Route, Link} from 'react-router-dom';
import Dashboard from '../.././../../media/images/png/Dashboard-2.png';
import EmpleadoAdd from '../.././../../media/images/png/Employee-2.png';

const EmployeePage = ({ match }) => {
    return (
        <div className='dashboard row'>
            <div className='dashboard-panel-left col s12 m5 l3'> 
                <ul>
                    <figure className='dashboard-panel-left-item'>
                        <img className='dashboard-panel-left-item-avatar' 
                            src={Dashboard} />
                        <figcaption className='container'>
                            <Link 
                                className='dashboard-panel-left-item-link waves-effect z-depth-3 hover-underline waves-light btn border-white-2 blue accent-4 center-align' 
                                to={`${match.url}/dashboard`}> Dashboard 
                            </Link>
                        </figcaption>
                    </figure>
                    <figure className='dashboard-panel-left-item'>
                        <img className='dashboard-panel-left-item-avatar' 
                            src={EmpleadoAdd} />
                        <figcaption className='container'>
                            <Link 
                                className='dashboard-panel-left-item-link waves-effect z-depth-3 hover-underline waves-light btn border-white-2 blue accent-4 center-align' 
                                to={`${match.url}/add`}> Agregar 
                            </Link>
                        </figcaption>
                    </figure>
                </ul>
            </div>
            <div className='dashboard-panel-right col s12 m9 l9'>
                <Route path={`${match.url}`} component={()=> <li> Employee </li>} /> {/* Main */}
            </div>
        </div>
    );
};

export default EmployeePage;