import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Link} from 'react-router-dom';
import {getModules} from '../../../actions/module';
import {getMenus} from '../../../actions/menu';
import {Col, ProgressBar} from 'react-materialize';
import ModuleSectionMenu from '../sections/module-section-menu';


const mapStateToProps = (state, props) => {
    return {
        dataModules:state.moduleReducer,
        dataMenus:state.menuReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getModules:bindActionCreators(getModules, dispatch),
        getMenus:bindActionCreators(getMenus, dispatch)
    };
    return actions;
}


class ModulePage extends React.Component{
    componentWillMount(){
        this.props.getModules();
        this.props.getMenus();
    }
    render () {
        let modules = this.props.dataModules.modules;
        let menus = this.props.dataMenus.menus;

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
                    {
                        menus.map((item, index)=>{
                            return <Route  
                                key={index} 
                                path={`${this.props.match.url}${item.module.url}`} 
                                component={()=><ModuleSectionMenu data={item} />} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModulePage);