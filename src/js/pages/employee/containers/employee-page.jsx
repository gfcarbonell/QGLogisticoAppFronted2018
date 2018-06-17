import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import defaultImage from '../../../../media/images/png/Default-1.png';
import PrivateRoute from '../../../utils/private-route';

//Section
import AddEmployeeSection from '../sections/add-employee-section';


const mapStateToProps = (state, props) => {
    return {
        session:state.sessionReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {

    };
    return actions;
}

class EmployeePage extends React.Component {
    render(){
        let authenticated = this.props.session.authenticated;

        return (
            <div className='panel row'>
                <div className='panel-left col s12 m5 l3'> 
                    <div className='panel-left-wrapper'>
                        <div>
                            <div>
                            </div>
                            <ul className='dashboard'>
                                {
                                    data.map((item, index)=>(
                                        <figure 
                                            className='dashboard-item'   
                                            key={index}>
                                            <img
                                                className='dashboard-item-image'
                                                src={item.image.src} 
                                                alt={item.name} />
                                            <figcaption
                                                className='dashboard-item-wrapper'
                                                >
                                                <Link
                                                    className='dashboard-item-wrapper-link btn waves-effect waves-light z-depth-3  hover-underline' 
                                                    to={`${this.props.match.url}${item.url}`}>
                                                    {item.name}
                                                </Link>
                                            </figcaption>
                                        </figure>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='panel-right col s12 m7 l8'> 
                    <div className='panel-right-wrapper'>
                        <PrivateRoute
                            authenticated={authenticated}
                            path='/employees/add-employee'
                         component={AddEmployeeSection}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

EmployeePage.propTypes = {
    data: PropTypes.array
};
EmployeePage.defaultProps = {
    data: [
        {
            id:1,
            name:'Default',
            image:{
                src:defaultImage,
                alt:'Default'
            },
            url:'/'
        }
    ]
};

let data = [
    {
        id:1,
        name:'Agregar Empleado',
        image:{
            src: defaultImage,
            alt: 'Add Employee'
        },
        url:'/add-employee'
    },
    {
        id:2,
        name:'Empleados',
        image:{
            src: defaultImage,
            alt: 'Employee'
        },
        url:'/list'
    },
    {
        id:4,
        name:'Imprimir',
        image:{
            src: defaultImage,
            alt: 'Printer'
        },
        url:'/print'
    },
    {
        id:3,
        name:'Dashboard',
        image:{
            src: defaultImage,
            alt: 'Dashboard'
        },
        url:'/dashboard'
    }
]

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);