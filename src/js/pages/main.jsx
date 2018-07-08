import React from 'react';
import {withRouter, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//Actions
import {logout} from '../actions/session';
//Main Components 
import Header from '../components/header/containers/header';
import Footer from '../components/footer/containers/footer';
import NavBar from '../components/nav-bar/containers/nav-bar';
import NavBarItem from '../components/nav-bar/items/nav-bar-item';
//Avatars
//Logo Entity
import logo from '../../media/images/png/QG-1.png'; 
//Pages 
import MenuPage from './menu/containers/menu-page';
import EmployeePage from './employee/containers/employee-page'
import Login from '../components/login/containers/login';
//Routes 
import PrivateRoute from '../utils/private-route';
import PublicRoute from '../utils/public-route';


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
    };
    return actions;
}


class Main extends React.Component {
    handleLogout = (event) =>{
        event.preventDefault();
        this.props.logout(this.props.history.location)
    }
    handleUser = (event) =>{

    }
    render() {
        let {handleLogout, handleUser} = this;
        let authenticated = this.props.session.authenticated;
        return (
            <div className='main'>
                <Header header={header} style={style.header}/>
                <NavBar style={style.navBar}>
                    {authenticated?<NavBarItem to={'/'} handleClick={handleUser}>Página Principal</NavBarItem>:<NavBarItem to={'/'} name={'index'}>Página Principal</NavBarItem>}
                    {authenticated?'':<NavBarItem to={'/login'}> Iniciar sesión </NavBarItem>}
                    {authenticated?<NavBarItem to={'/logout'} handleClick={handleLogout}> Cerrar sesión </NavBarItem>:''}
                    {authenticated?<NavBarItem to={'/main-menu'}> Menú Principal </NavBarItem>:''}
                </NavBar>
                <section>
                    <main>
                        <Switch >
                            <PublicRoute authenticated={this.props.session.authenticated} path='/login' component={Login} />
                            <PrivateRoute authenticated={this.props.session.authenticated} path='/employees' component={EmployeePage} />
                            <PrivateRoute authenticated={this.props.session.authenticated} path='/main-menu' component={MenuPage} />
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
