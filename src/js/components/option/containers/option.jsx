import React from 'react';
import OptionItem from '../items/option-item';

class Option extends React.Component{
    render(){
        let data = this.props.data !== undefined ? this.props.data : props.propTypes.data;
        let title = this.props.title !== undefined ? this.props.title : props.propTypes.title;
        return (
            <div className='option'>
                <div>
                    <h3 className='option-title sub-title center-align'> 
                        {this.props.title}
                    </h3>
                </div>
                <ul className='option-items'>
                   
                </ul>                                                                                       
            </div>
        );
    }
}

Option.propTypes = {
    data: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
}

Option.defaultProps = {
    data: [],
    title: 'Title default'
};

export default Option;