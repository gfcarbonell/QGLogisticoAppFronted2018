import React from 'react';
import {Link} from 'react-router-dom';


class MenuSectionMenu extends React.Component{
    render(){
        return (
            <figure className='modules-menus-item'>
                <img 
                    className='modules-menus-item-image'
                    src={this.props.data.image} 
                    alt={this.props.data.name}/>
                <figcaption>
                    <a> {this.props.data.name} </a>
                </figcaption>
            </figure>
        );
    }
}

export default MenuSectionMenu;