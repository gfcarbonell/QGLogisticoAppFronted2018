import React from 'react';

const MenuItem = (props) => {
    return (
        <figure className='menu-item'>
            <div>
                <img 
                    className='menu-item-avatar' 
                    src={props.data.image.src} 
                    alt={props.data.name}
                />
            </div>
           <figcaption className='container'>
               <a className='menu-item-name waves-effect z-depth-3 hover-underline waves-light btn border-white-2 red light-2'> {props.data.name}</a>
            </figcaption>
        </figure>
    );
};



export default MenuItem;