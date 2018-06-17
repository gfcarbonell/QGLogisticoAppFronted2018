import React from 'react';
import {Row, Input} from 'react-materialize';
import * as $ from 'jquery';
import 'materialize-css'

class AddEmployeeSection extends React.Component{
    componentDidMount(){
        $('.datepicker').datepicker();
    }
    render(){
        return (
           <div>
                <div>
                    <Row>
                        <Input s={12} l={6} label='Apellido paterno' validate></Input>
                        <Input s={12} l={6} label='Apellido materno' validate></Input>
                    </Row>
                    <Row>
                        <Input s={12} l={6} label='Nombre(s)' validate></Input>
                    </Row>
                    <Row>
                        <Input s={12} l={4} type='select' label='Tipo documento de identificación' defaultValue='1'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                        <Input s={12} l={4} label='Número' type='number' validate></Input>
                        <Input className='datepicker' s={12} l={4} name={'birthday'} label='Fecha de cumpleaños' type='date' validate></Input>
                    </Row>
                    <Row>
                        
                        <Input s={12} l={3} type='select' label='Estado civil' defaultValue='1'>
                            <option value='1'>Soltero</option>
                            <option value='2'>Casado</option>
                            <option value='3'>Separado</option>
                            <option value='4'>Divorciado</option>
                        </Input>
                        <Input s={12} l={3} type='select' label='Estado civil' defaultValue='1'>
                            <option value='1'>A+</option>
                            <option value='2'>A-</option>
                        </Input>
                        <Input s={12} l={3} name='gender' label='Masculino' type='radio' validate></Input>
                        <Input s={12} l={3} name='gender' label='Femenino' type='radio' validate></Input>
                        
                    </Row>
                </div>
           </div>
        )
    }
}

export default AddEmployeeSection;