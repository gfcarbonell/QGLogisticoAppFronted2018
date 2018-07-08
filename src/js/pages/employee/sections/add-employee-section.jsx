import React from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from '../../../actions/user';
import {getByUserUsername, getByUserEmail} from '../../../actions/user';
import {getIdentificationDocumentType} from '../../../actions/identification-document-type';
import $ from 'jquery';
import 'materialize-css';


const mapStateToProps = (state, props) => {
    return {
        dataUser:state.userReducer,
        identificationDocumentTypeData: state.identificationDocumentTypeReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        addUser:bindActionCreators(addUser, dispatch),
        getByUserUsername:bindActionCreators(getByUserUsername, dispatch),
        getByUserEmail:bindActionCreators(getByUserEmail, dispatch),
        getIdentificationDocumentType:bindActionCreators(getIdentificationDocumentType, dispatch)
    };
    return actions;
}

class AddEmployeeSection extends React.Component{
    componentDidMount(){
        $('.datepicker').pickadate({
            format: 'dd-mm-yyyy',
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 120 // Creates a dropdown of 15 years to control year
          });
        $('.tabs').tabs();

        this.props.getIdentificationDocumentType();
    }
    setForm = (element) => {
        this.form = element;
    }
    /* Submit */
    handleSubmit = (event) => {
        event.preventDefault();
        let dataUserProfile = {
            name:this.name.input.value,
            last_name:this.lastName.input.value,
            mother_last_name:this.motherLastName.input.value,
            birthday:this.birthday.value.split('-').reverse().join('-'),
            gender: $('input:radio[name=gender]:checked').val(),
            marital_status:this.maritalStatus.state.value,
            auth_user:{
                username:this.username.input.value,
                email:this.email.input.value,
                password:this.password.input.value,
                confirm_password:this.confirmPassword.input.value
            }
        }
        console.log(JSON.stringify(dataUserProfile));
    }
    /* Personal info */
    setLastName = (element) => {
        this.lastName = element;
    }
    setMotherLastName = (element) => {
        this.motherLastName = element;
    }
    setName = (element) => {
        this.name =  element;
    }
    setBirthday = (element) => {
        this.birthday =  element;
    }
    setMaritalStatus = (element) => {
        this.maritalStatus = element;
    }
    setPhotography = (element) => {
        this.photography = element;
    }
    handleDrop = (acceptedFiles, rejectedFiles) => {
        acceptedFiles.map(f => {
            let fileName = f.name.length<20? f.name : `${f.name.substr(0,3)}...${f.name.substr(f.name.length-7,f.name.length)}` 
            return $('.drop-file-info').text(`${fileName} - ${f.size} bytes.`).css({color:'green'})
        })
        rejectedFiles.map(f => {
            return $('.drop-file-info').text(`Error al subir fotografía.`).css({color:'red'})
        })
    }
    /* User info */
    setUsername = (element) => {
        this.username = element;
    }
    setEmail = (element) => {
        this.email = element;
    }
    setPassword = (element) => {
        this.password = element;
    }
    setConfirmPassword = (element) => {
        this.confirmPassword = element;
    }
    handleKeyPressUsername = (event) => {
        let data = JSON.stringify({username:event.target.value})
        //this.props.getByUserUsername(data);
    }
    handleKeyPressEmail = (event) => {
        let data = JSON.stringify({email:event.target.value})
        //this.props.getByUserEmail(data);
    }
    render(){
        let imageAccept = [
            'image/png',
            'image/gif',
            'image/jpeg'
        ]
        let identificationDocumentTypeData = this.props.identificationDocumentTypeData.identificationDocumentType;
        return (
            <div>
                <Row>
                    <ul id='tabs-swipe-demo' className='tabs tabs-fixed-width'>
                        <li className='tab col s3'>
                            <a className='active' href='#test-swipe-1'>Información personal</a>
                        </li>
                        <li className='tab col s3'>
                            <a href='#test-swipe-2'>Información del empleado</a>
                        </li>
                        <li className='tab col s3'>
                            <a href='#test-swipe-3'>Información de usuario</a>
                        </li>
                        <li className='tab col s4'>
                            <a href='#test-swipe-4'>Información de extra</a>
                        </li>
                    </ul>
                </Row>
                <form method='post' ref={this.setForm}  action='#' onSubmit={this.handleSubmit}>
                    <div id='test-swipe-1' className='col s12'>
                        <div>
                            <Row>
                                <div className='col s12 l4'>
                                    <Input ref={this.setLastName} s={12} l={12} label='Apellido paterno' validate required={true}/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                    </p>
                                </div>
                                <div className='col s12 l4'>
                                    <Input ref={this.setMotherLastName} s={12} l={12} label='Apellido materno' validate></Input>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                                <div className='col s12 l4'>
                                    <Input ref={this.setName} s={12} l={12} label='Nombre(s)' validate required={true}/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 l4'>
                                    <Input s={12} l={12} type='select' label='Tipo documento de identificación' defaultValue='1'>
                                        {
                                            identificationDocumentTypeData.map((item, index)=>(
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </Input>
                                </div>
                                <div className='col s12 l4'>
                                    <Input s={12} l={12} label='Número' type='number' validate/>              
                                </div>
                                <div className='col s12 l4'>
                                    <div className='col input-field s12 l12'>
                                        <input 
                                            className='datepicker validate' 
                                            ref={this.setBirthday} 
                                            label='Fecha nacimiento' 
                                            id='birthday' 
                                            type='date'/>
                                        <label htmlFor='birthday'>Fecha de nacimineto</label>
                                    </div>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 l4'>
                                    <Input 
                                        className='with-gap'
                                        s={6} l={6} 
                                        name='gender' 
                                        type='radio' 
                                        checked={true}
                                        value='Masculino' 
                                        label='Masculino' />
                                    <Input   
                                            className='with-gap'
                                            s={6} l={6} 
                                            name='gender' 
                                            type='radio' 
                                            value='Femenino' 
                                            label='Femenino' />
                                </div>
                                <div className='col s12 l4'>
                                    <Input 
                                        ref={this.setMaritalStatus} s={12} l={12} 
                                        type='select' 
                                        label='Estado civil' 
                                        defaultValue='Soltero'>
                                        <option value='Soltero'>Soltero</option>
                                        <option value='Casado'>Casado</option>
                                        <option value='Separado'>Separado</option>
                                        <option value='Divorciado'>Divorciado</option>
                                        <option value='Viudo'>Viudo</option>
                                    </Input>
                                </div>
                                <div className='col s12 l4'>
                                    <div className='col input-field s12 l12'>
                                        <Dropzone 
                                            className='dropzone grey lighten-2 border-gray-1' 
                                            accept={imageAccept.toString()}
                                            ref={this.setPhotography} 
                                            onDrop={this.handleDrop}
                                            id='photography'
                                            >
                                            <p className='drop-icon center-align'> 
                                                <i className='material-icons small'>add_a_photo</i>
                                            </p>
                                        </Dropzone>
                                        <p className='drop-file-info center-align' >
                                                File: Default - 0 bytes. 
                                            </p>
                                        </div>
                                </div> 
                            </Row>
                        </div>                                      
                    </div>
                    <div id='test-swipe-2' className='col s12'>
                        <Row>
                            <div className='col s12 l4'>
                                <Input s={12} l={12} type='select' label='Entidad' defaultValue='1'>
                                    <option value='1'>Option 1</option>
                                    <option value='2'>Option 2</option>
                                    <option value='3'>Option 3</option>
                                </Input>
                            </div>
                            <div className='col s12 l4'>
                                <Input s={12} l={12} type='select' label='Sede' defaultValue='1'>
                                    <option value='1'>Option 1</option>
                                    <option value='2'>Option 2</option>
                                    <option value='3'>Option 3</option>
                                </Input>
                            </div>
                            <div className='col s12 l4'>
                                <Input s={12} l={12} type='select' label='Área' defaultValue='1'>
                                    <option value='1'>Option 1</option>
                                    <option value='2'>Option 2</option>
                                    <option value='3'>Option 3</option>
                                </Input>
                            </div>
                        </Row>
                        <Row>
                            <div className='col s12 l4'>
                                <Input s={12} l={12} type='select' label='Tipoe empleado' defaultValue='1'>
                                    <option value='1'>Option 1</option>
                                    <option value='2'>Option 2</option>
                                    <option value='3'>Option 3</option>
                                </Input>
                            </div>
                            <div className='col s12 l4'>
                                <Input s={12} l={12} type='select' label='Cargo Empleado' defaultValue='1'>
                                    <option value='1'>Option 1</option>
                                    <option value='2'>Option 2</option>
                                    <option value='3'>Option 3</option>
                                </Input>
                            </div>
                            <div className='col s12 l4'>
                                <Input s={12} l={12} type='select' label='Nivel Instrucción' defaultValue='1'>
                                    <option value='Sin nivel'>Sin nivel</option>
                                    <option value='Pre escolar'>Pre escolar</option>
                                    <option value='Primaria'>Primaria</option>
                                    <option value='Secundaria'>Secundaria</option>
                                    <option value='Superior'>Superior</option>
                                </Input>
                            </div>
                        </Row>
                        <Row>
                            <div className='col s12 l4'>
                                <div className='col input-field s12 l12'>
                                    <input 
                                        className='datepicker validate' 
                                        name='start_date_contract'
                                        label='Fecha inicio contratación' 
                                        id='start_date_contract' 
                                        type='date'/>
                                    <label htmlFor='start_date_contract'>Fecha inicio contratación</label>
                                </div>
                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                </p>
                            </div>
                            <div className='col s12 l4'>
                                <div className='col input-field s12 l12'>
                                    <input 
                                         className='datepicker validate' 
                                         name='end_date_contract'
                                         label='Fecha final contratación' 
                                         id='end_date_contract' 
                                         type='date'/>
                                    <label htmlFor='end_date_contract'>Fecha final contratación</label>
                                </div>
                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                </p>
                            </div>
                            <div className='col s12 l4'>
                                <Input 
                                    className='filled-in'
                                    type={'checkbox'}
                                    s={12} l={12} 
                                    label='Activo' 
                                    name={'active'}
                                    validate 
                                    required={true}/>
                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                </p>
                            </div>
                        </Row>
                    </div>
                    <div id='test-swipe-3' className='col s12'>
                        <div>
                            <Row>
                                <div className='col s12 l6'>
                                    <Input 
                                        ref={this.setUsername} 
                                        s={12} l={12} 
                                        label='Nombre de usuario' 
                                        onKeyPress={this.handleKeyPressUsername}
                                        validate 
                                        required={true}/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                                <div className='col s12 l6'>
                                    <Input 
                                        ref={this.setEmail} 
                                        s={12} l={12} 
                                        label='email' 
                                        onKeyPress={this.handleKeyPressEmail}
                                        type={'email'} 
                                        validate 
                                        required={true}/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                        
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 l6'>
                                    <Input 
                                        ref={this.setPassword} 
                                        s={12} l={12} 
                                        label='Constraseña' 
                                        type={'password'}
                                        validate required={true}/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                               
                                    </p>
                                </div>
                                <div className='col s12 l6'>
                                    <Input 
                                        ref={this.setConfirmPassword} 
                                        s={12} l={12} 
                                        label='Confirmar contraseña'      
                                        type={'password'}                         
                                        validate required={true}>
                                    </Input>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                            </Row>
                        </div>
                    </div>
                    <div id='test-swipe-4' className='col s12'>
                        <Row>
                            <div className='col s12 l4'>
                                <Input 
                                    ref={this.setCellPhone} 
                                    s={12} l={12} 
                                    label='Celular' 
                                    validate required={true}/>
                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                </p>
                            </div>
                            <div className='col s12 l4'>
                                <Input 
                                    ref={this.setTelephone} 
                                    s={12} l={12} 
                                    label='Teléfono' 
                                    validate></Input>
                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                </p>
                            </div>
                            <div className='col s12 l4'>
                                <Input 
                                    ref={this.setEmailPersonal} 
                                    s={12} l={12} 
                                    label='Correo electrónico personal' 
                                    validate 
                                    required={true}/>
                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                   
                                </p>
                            </div>
                        </Row>
                        <Row>
                            <div className='col s12 l6'>
                                <Input 
                                    ref={this.setDescription} 
                                    type={'textarea'} 
                                    s={12} l={12} 
                                    label='Descripción'/>
                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                </p>
                            </div>
                            <div className='col s12 l6'>
                                <Input 
                                    ref={this.setObservation} 
                                    type={'textarea'} 
                                    s={12} l={12} 
                                    label='Observación' 
                                    required={true}/>
                                <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                </p>
                            </div>
                        </Row>
                    </div>
                    <Row>
                        <Button
                            className='red right' type='submit' waves='light'
                            onClick={this.handleSubmit}>
                            Guardar <Icon right>send</Icon>
                        </Button>
                    </Row>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployeeSection);