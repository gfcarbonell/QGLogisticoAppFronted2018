import React  from 'react';
import {Row, Input, Button} from 'react-materialize'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getEmployees} from '../../../actions/employee';
import ReactTable from "react-table";
import "react-table/react-table.css";

import $ from 'jquery';
import 'materialize-css';


const mapStateToProps = (state, props) => {
    return {
        employeeData: state.employeeReducer,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getEmployees:bindActionCreators(getEmployees, dispatch)
    };
    return actions;
}


class EmployeesSection extends React.Component{
    componentWillMount(){
        this.props.getEmployees();
        this.setState({
            search: ''
        })
    }
    getColumns(){
        let columns=[
            {
                columns: [
                    {
                        Header: 'Nombre Completo',
                        id: 'person', 
                        accessor: element => `${element.person.last_name} ${element.person.mother_last_name}, ${element.person.name}`
                    }
                ]
            }, 
            {
                columns: [
                    {
                        Header: 'Cargo del Empleado',
                        id: 'employee_position', 
                        accessor: element => `${element.employee_position.name}`
                    }
                ]
            }, 
            {
                columns: [
                    {
                        Header: 'Tipo Empleado',
                        id: 'employee_type', 
                        accessor: element => `${element.employee_type.name}`
                    }
                ]
            }, 
            {
                columns: [
                    {
                        Header: 'Area',
                        id: 'area', 
                        accessor: element => `${element.area.name}`
                    }
                ]
            }, 
            {
                columns: [
                    {
                        Header: 'Nombre usuario',
                        id: 'auth_user_username', 
                        accessor: element => `${element.auth_user.username}`
                    }
                ]
            }, 
            {
                columns: [
                    {
                        Header: 'Correo Electrónico',
                        id: 'auth_user_email', 
                        accessor: element => `${element.auth_user.email}`
                    }
                ]
            }, 
            {
                columns: [
                    {
                        Header: 'Fecha Inicio Contrato',
                        id: 'start_date_contract', 
                        accessor: element => `${element.start_date_contract}`
                    }
                ]
            }, 
            {
                columns: [
                    {
                        Header: 'Fecha Fin Contrato',
                        id: 'end_date_contract', 
                        accessor: element => `${element.end_date_contract}`
                    }
                ]
            }, 
            {
                columns: [
                    {
                        Header: 'Editar',
                        id: 'edit', 
                        Cell: row => (
                            <a id={row.original.id} className='red-text center icon-pencil display-block-100'>  </a>
                        )
                    }
                ]
            },
            {
                columns: [
                    {
                        Header: 'Eliminar',
                        id: 'remove',
                        Cell: row => (
                            <a id={row.original.id} className='red-text center icon-trash display-block-100'>  </a>
                        )
                    }
                ]
            }
        ]
        return columns;
    }
    setInputSearchRef = element => {
        this.inputSearch = element;
    }
    handleInputChange = event => {
        this.setState({
            search: event.target.value.toUpperCase() 
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
    }
    handleKeyPress = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }
    render () {
        let employeeData = this.props.employeeData.employees;
        let search = this.state.search === null || this.state.search === undefined? '': this.state.search ; 
        const items =  employeeData.filter(item => {
            return  item.person.name.toUpperCase().indexOf(search) !== -1 || 
                    item.person.last_name.toUpperCase().indexOf(search) !== -1 ||
                    item.person.mother_last_name.toUpperCase().indexOf(search) !== -1 ||
                    item.area.name.toUpperCase().indexOf(search) !== -1;
        });
        return (  
            <div>
                <div className='row'>
                    <h4 className='center-align'> 
                        Lista de Empleados
                    </h4>
                </div>
                <form className='search' onSubmit={this.props.handleSubmit}>
                    <Row>
                        <div className='col s12 m12 l9'>
                            <Input 
                                ref={this.setInputSearchRef} 
                                onKeyPress={this.handleKeyPress} 
                                onChange={this.handleInputChange} 
                                s={12} l={12} label='Buscar' required={true}/>
                        </div>
                        <div className='col s12 m12 l3'>
                            <div className='col input-field s12 l12'>
                                <a className="waves-effect waves-light btn display-block-100">Eliminar Todo</a>
                            </div>
                        </div>
                    </Row>
                </form>
                <ReactTable
                    data={items}
                    columns={this.getColumns()}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesSection);