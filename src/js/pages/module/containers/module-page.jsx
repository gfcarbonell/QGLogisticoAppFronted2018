import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import {getModules} from '../../../actions/module';
import {getMenus} from '../../../actions/menu';
import {getSubmenus} from '../../../actions/submenu';
import {Col, ProgressBar} from 'react-materialize';
import ModuleSectionMenu from '../sections/module-section-menu';

import PrivateRoute from '../../../utils/private-route';


const mapStateToProps = (state, props) => {
    return {
        dataModules:state.moduleReducer,
        dataMenus:state.menuReducer,
        dataSubmenus:state.submenuReducer,
        session:state.sessionReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getModules:bindActionCreators(getModules, dispatch),
        getMenus:bindActionCreators(getMenus, dispatch),
        getSubmenus:bindActionCreators(getSubmenus, dispatch),
    };
    return actions;
}


class ModulePage extends React.Component{
    componentWillMount(){
        this.props.getModules();
        this.props.getMenus();
        this.props.getSubmenus();
    }
    render () {
        let modules = this.props.dataModules.modules;
        let menus = this.props.dataMenus.menus;
        let submenus = this.props.dataSubmenus.submenus;
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
            <div className='row'>
                <div className='modules'>
                    <ul className='modules-items'>
                        {
                            modules.map((item, index)=>{
                                return (
                                    <figure className='modules-items-item' key={item.id}>
                                        <img className='modules-items-item-image' src={item.image} alt={item.name} />
                                        <figcaption className='modules-items-item-wrap'>
                                            <Link 
                                                className='modules-items-item-wrap-link hover-underline' 
                                                to={`${this.props.match.url}${item.url}`}>
                                                {item.name}
                                            </Link>
                                        </figcaption>
                                    </figure>
                                )
                            })
                        }
                    </ul>
                </div>
                <ul className='modules-menus'>
                    <div className="row">
                        <div className="col s12 m5 l4"> 
                       
                        </div>
                        <div className="col s12 m7 l8"> 
                            
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulePage);