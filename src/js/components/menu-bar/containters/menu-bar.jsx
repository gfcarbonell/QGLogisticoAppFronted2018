import React from 'react';
import PropTypes from 'prop-types';
import MenuBarItem from '../items/menu-bar-item';

const MenuBar = (props) => {
    let data = props.data !== undefined? props.data:props.propTypes.data;
    return (
        <ul className='module'>
           {
               data.map((item, index)=>{
                    return <MenuBarItem data={item} />
               })
           }
        </ul>
    );
};

MenuBar.propTypes = {
    data: PropTypes.array.isRequired,
}

MenuBar.defaultProps = {
    data: []
};

export default MenuBar;