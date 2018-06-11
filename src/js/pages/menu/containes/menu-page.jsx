import React from 'react';
import {Route} from 'react-router-dom';


const MenuPage = ({ match }) => {
    return (
        <div>
            <div>
                <Route path={`${match.url}/`} component={()=> <li> Menu </li>} />
            </div>
        </div>
    );
};

export default MenuPage;