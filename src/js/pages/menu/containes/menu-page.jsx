import React from 'react';
import {Route} from 'react-router-dom';
import Menu from '../../../components/menu/containers/menu';


const MenuPage = ({ match }) => {
    return (
        <div>
            <div>
                <Route path={`${match.url}/`} component={Menu} />
            </div>
        </div>
    );
};

export default MenuPage;