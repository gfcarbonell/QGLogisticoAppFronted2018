import React from 'react';
import {Route} from 'react-router-dom';
import SectionLogin from '../sections/login-section';


const Home = ({ match }) => {
    return (
        <div>
            <div>
                <Route exact path={`${match.url}`} component={()=> <li> Inicio </li>} /> {/* Main */}
                <Route path={`${match.url}login`} component={SectionLogin} /> {/* Main */}
            </div>
        </div>
    );
};

export default Home;