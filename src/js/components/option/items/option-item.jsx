import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import imageDefault from '../../../../media/images/png/Default-1.png';


const OptionItem = (props) => {
    let image = (props.image !== undefined)? props.data.image : props.propTypes.image;
    let to = (props.to !== undefined)? props.data.to : props.propTypes.to;
    let name = (props.name !== undefined)? props.data.name : props.propTypes.name;
    return (
        <figure className='menu-item'>
            <div>
                <img 
                    className='menu-item-avatar' 
                    src={image.src} 
                    alt={image.alt}
                />
            </div>
           <figcaption className='container'>
                <Link 
                    to={to} onClick={props.handleClick}
                    className='menu-item-name waves-effect z-depth-3 hover-underline waves-light btn border-white-2 light-2'> 
                    {name}
                </Link>
            </figcaption>
        </figure>
    );
};

OptionItem.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}

OptionItem.defaultProps = {
    image: {
        src:imageDefault,
        alt: this.name
    },
    name: 'Name default',
    to: '/menu'
};

export default OptionItem;