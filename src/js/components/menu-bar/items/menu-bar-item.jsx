import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import imageDefault from '../../../../media/images/png/Default-1.png';

const MenuBarItem = (props) => {
    return (
        <li className='module-item'>
            
        </li>
    );
};

MenuBarItem.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

MenuBarItem.defaultProps = {
    image: {
        src:imageDefault,
        alt:this.name
    },
    name:'Name default',
    to:'/modules'
};


export default MenuBarItem;