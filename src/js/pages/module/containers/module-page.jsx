import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getModules} from '../../../actions/module';

import {Col, ProgressBar} from 'react-materialize';
import ModuleSectionMenu from '../sections/module-section-menu';

import PrivateRoute from '../../../utils/private-route';


const mapStateToProps = (state, props) => {
    return {
        dataModules:state.moduleReducer,
        //dataMenus:state.menuReducer,
        //dataSubmenus:state.submenuReducer,
        session:state.sessionReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getModules:bindActionCreators(getModules, dispatch),
        //getMenus:bindActionCreators(getMenus, dispatch),
        //getSubmenus:bindActionCreators(getSubmenus, dispatch),
    };
    return actions;
}


class ModulePage extends React.Component{
    componentWillMount(){
        this.props.getModules();
    }
    render () {
        let modules = this.props.dataModules.modules;
        let authenticated = this.props.session.authenticated;
        
        if(this.props.dataModules.loading){
            return (
                <div className='margin-top-bottom-4'>
                    <Col s={12} className='container-center'>
                        <ProgressBar color='green'/>
                    </Col>
                </div>
            )
        }
        return (
            
            <div>
                <div className='modules'>
                {
                    modules.map((module, index)=>(
                        <figure className='modules-item' key={index}>
                            <img className='modules-item-image' src={module.image} alt={module.name}/>
                            <figcaption className='modules-item-wrapper'>
                                <Link 
                                    className='modules-item-wrapper-link hover-underline text-shadow-black' 
                                    to={`${this.props.match.url}${module.url}`}>
                                    {module.name}
                                </Link>
                            </figcaption>
                        </figure>
                    ))
                }
               </div>
               <div className='menus'>
                {
                    modules.map((module, index)=>(
                        <PrivateRoute
                            key={index}
                            authenticated={authenticated}  
                            path={`${this.props.match.url}${module.url}`}
                            component={()=> <ModuleSectionMenu match={this.props.match}  module={module}/>}/>
                    ))
                }
               </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulePage);