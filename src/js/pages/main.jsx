import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//Actions
import {logout} from '../actions/session';
import {getUsers} from '../actions/user';
//Main Components 
import Header from '../components/header/containers/header';
import Footer from '../components/footer/containers/footer';
import NavBar from '../components/nav-bar/containers/nav-bar';
import NavBarItem from '../components/nav-bar/items/nav-bar-item';
import Login from '../components/login/containers/login';
//Avatars
//Logo Entity
import logo from '../../media/images/png/QG-1.png'; 
//Pages 
import MenuPage from './menu/containes/menu-page';
import EmployeePage from './employee/containers/employee';
//Routes 
import PrivateRoute from '../utils/private-route';

const header = {
    logo:{
        src: logo,
        alt:this.title
    },
    entity: 'Quality Global',
    slogan: '"Nos gusta lo que hacemos, excelencia en nuestros servicios".'
}

const footer = {
    entity:'Quality Global',
    year: 2018,
    website: 'www.qygconsultores.com'
}

const mapStateToProps = (state, props) => {
    return {
        session:state.sessionReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        logout:bindActionCreators(logout, dispatch),
        getUsers:bindActionCreators(getUsers, dispatch),
    };
    return actions;
}


class Main extends React.Component {
    handleLogout = (event) =>{
        event.preventDefault();
        this.props.logout(this.props.history.location)
        
    }
    handleUser = (event) =>{
        event.preventDefault();
        this.props.getUsers();
    }
    render() {
        let {handleLogout, handleUser} = this;
        return (
            <div className='main'>
                <Header header={header} style={style.header}/>
                <NavBar style={style.navBar}>
                    <NavBarItem to={'/'} name={'home'} handleClick={handleUser}> Inicio </NavBarItem>
                    {this.props.session.authenticated?'':<NavBarItem to={'/login'} name={'login'}> Iniciar sesión </NavBarItem>}
                    {this.props.session.authenticated?<NavBarItem to={'/logout'} name={'logout'} handleClick={handleLogout}> Cerrar sesión </NavBarItem>:''}
                    {this.props.session.authenticated?<NavBarItem to={'/menu'} name={'menu'}> Menu </NavBarItem>:''}
                </NavBar>
                <section>
                    <main>
                        <Switch >
                            <Route exact path='/' component={()=><li> Index </li>} />
                            <Route path='/login/' component={Login} />
                            <PrivateRoute authenticated={this.props.session.authenticated} path='/menu' component={MenuPage} />
                            <PrivateRoute authenticated={this.props.session.authenticated} path='/employees' component={EmployeePage} />
                        </Switch>
                    </main>
                </section>  
                <Footer footer={footer} style={style.footer}/>
            </div>
        );
    }
}

const style = {
    header:{
        background:'#7cb342', 
        borderBottom:'1px solid white'
    },
    footer:{
        background:'#7cb342', 
        borderTop:'1px solid white'
    },
    navBar:{
        background:'#558b2f', 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
