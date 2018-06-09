import React from 'react';
import {withRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
//Actions
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
        
    };
    return actions;
}


class Main extends React.Component {
    render() {
        return (
            <div className='main'>
                <Header header={header} style={style.header}/>
                <NavBar style={style.navBar}>
                    <NavBarItem to={'/'}> Inicio </NavBarItem>
                    {this.props.session.authenticated?'':<NavBarItem to={'/login'} > Iniciar sesión </NavBarItem>}
                    {this.props.session.authenticated?<NavBarItem to={'/logout'} > Cerrar sesión </NavBarItem>:''}
                    {this.props.session.authenticated?<NavBarItem to={'/menu'} > Menu </NavBarItem>:''}
                </NavBar>
                <section>
                    <main>
                        <Switch >
                            <Route exact path='/' component={()=><li> Index </li>} />
                            <Route path='/login/' component={Login} />
                            <PrivateRoute authenticated={this.props.session.authenticated} path='/menu' component={MenuPage} />
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
