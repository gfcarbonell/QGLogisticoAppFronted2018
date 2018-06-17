import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getMenus} from '../../../actions/menu';
import {getSubmenus} from '../../../actions/submenu';
import PrivateRoute from '../../../utils/private-route';

const mapStateToProps = (state, props) => {
    return {
        dataMenus:state.menuReducer,
        dataSubmenus:state.submenuReducer,
        session:state.sessionReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getMenus:bindActionCreators(getMenus, dispatch),
        getSubmenus:bindActionCreators(getSubmenus, dispatch),
    };
    return actions;
}

class MenuSectionMenu extends React.Component{
    componentWillMount(){
        this.props.getMenus();
        this.props.getSubmenus();
    }
    render(){
        let module = this.props.module
        let menus = this.props.dataMenus.menus
        let submenus = this.props.dataSubmenus.submenus
        let rootURL = this.props.match.url
        let authenticated = this.props.session.authenticated
        return (
            <div>
                {
                    <div>
                        <div>
                        {
                            menus.map((menu, index)=>{
                                return menu.module.url===module.url?
                                    <ul key={index}>
                                        <li> {menu.name} </li>
                                        {
                                            submenus.map((submenu, index)=>{
                                                return menu.url===submenu.menu.url?
                                                    <Link 
                                                        to={`${rootURL}${module.url}${menu.url}${submenu}`}
                                                        key={index}> {submenu.name} 
                                                    </Link>
                                                    :''})
                                        }
                                    </ul>:''}) 
                        }
                        </div>
                        <div>
                        {
                            menus.map((menu, index)=>{
                                return menu.module.url===module.url?
                                    <ul key={index}>
                                        {
                                            submenus.map((submenu, index)=>{
                                                return menu.url===submenu.menu.url?
                                                    <PrivateRoute 
                                                    path={`${rootURL}${module.url}${menu.url}${submenu}`}
                                                    authenticated={authenticated} 
                                                    key={index} 
                                                    component={()=><li> jol </li>}
                                                    
                                                    />
                                                    :''})
                                        }
                                    </ul>:''}) 
                        }
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSectionMenu);
