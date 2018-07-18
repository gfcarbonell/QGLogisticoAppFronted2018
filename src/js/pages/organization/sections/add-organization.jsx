import React from 'react';
import {Row, Input, Button, Icon} from 'react-materialize';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getEntityMain} from '../../../actions/entities';

import $ from 'jquery';
import 'materialize-css';


const mapStateToProps = (state, props) => {
    return {
        entityMainData:state.entityReducer,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const actions = {
        getEntityMain:bindActionCreators(getEntityMain, dispatch),
    };
    return actions;
}

class AddOrganizationSection extends React.Component{
    componentDidMount(){
        $('.tabs').tabs();
    }
    componentWillMount(){
        this.props.getEntityMain();
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
    /* Headquarters */
    setFormHeadquarters = (element) => {
        this.formHeadquarters = element;
    }
    setEntity = (element) => {
        this.entity = element;
    }
    setNameHeadquarters = (element) => {
        this.nameHeadquarters = element;
    }
    setCellPhone = (element) => {
        this.cellPhone = element;
    }
    setTelephone = (element) => {
        this.telephone = element;
    }
    setEmail = (element) => {
        this.email = element;
    }
    setDescription = (element) => {
        this.description = element;
    }
    setObservation = (element) => {
        this.observation = element;
    }
    /* Área */
    setFormArea = (element) => {
        this.formArea = element;
    }
    setHeadquarters = (element) => {
        this.headquarters = element;
    }
    setDependency = (element) => {
        this.dependency = element;
    }
    setAreaType = (element) => {
        this.areaType = element;
    }
    setNominalOrganicStructureType = (element) => {
        this.nominalOrganicStructureType = element;
    }
    setNameArea = (element) => {
        this.nameArea = element;
    }
    setInitials = (element) => {
        this.initials = element;
    }
    setTelephoneAnnex = (element) => {
        this.telephoneAnnex = element;
    }
    setFax = (element) => {
        this.fax = element;
    }
    setLogo = (element) => {
        this.logo = element;
    }
    render(){
        let imageAccept = [
            'image/png',
            'image/gif',
            'image/jpeg'
        ]
        let entityMainData = this.props.entityMainData.entities;
        return (
            <div>
                <Row>
                    <ul id='tabs-swipe-demo' className='tabs tabs-fixed-width'>
                        <li className='tab col s6'>
                            <a className='active' href='#test-swipe-1'>Sede</a>
                        </li>
                        <li className='tab col s6'>
                            <a href='#test-swipe-2'>Area</a>
                        </li>
                    </ul>
                </Row>
                <div id='test-swipe-1' className='col s12'>
                    <form method='post' ref={this.setFormHeadquarters}  action='#' onSubmit={this.handleSubmitHeadquarters}>
                        <div>
                            <Row>
                                <div className='col s12 l6'>
                                    <Input 
                                        ref={this.setEntity}
                                        s={12} l={12} type='select' label='Entidad' 
                                        defaultValue='0'>
                                        <option value='0'>-------</option>    
                                        {
                                            entityMainData.map((item, index)=>{
                                                return <option key={item.id} value={item.id}> {item.name}</option>     
                                            })
                                        }
                                    </Input>
                                </div>
                                <div className='col s12 l6'>
                                    <Input ref={this.setNameHeadquarters} s={12} l={12} label='Sede' validate required={true}/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                    </p>
                                </div>
                            </Row>
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
                                        ref={this.setEmail} 
                                        s={12} l={12} 
                                        label='Correo electrónico' 
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
                            <Row>
                                <Button
                                    className='red right' type='submit' waves='light'>
                                    Guardar <Icon right>send</Icon>
                                </Button>
                            </Row>
                        </div>
                    </form>
                </div>
                <div id='test-swipe-2' className='col s12'>
                    <form method='post' ref={this.setFormArea}  action='#' onSubmit={this.handleSubmitArea}>
                        <div>
                            <Row>
                                <div className='col s12 l4'>
                                    <Input ref={this.setHeadquarters} s={12} l={12} type='select' label='Sede' defaultValue='1'>
                                        
                                    </Input>
                                </div>
                                <div className='col s12 l4'>
                                    <Input ref={this.setDependency} s={12} l={12} type='select' label='Dependencia' defaultValue='1'>
                                        
                                    </Input>
                                </div>
                                <div className='col s12 l4'>
                                    <Input ref={this.setAreaType} s={12} l={12} type='select' label='Tipo Área' defaultValue='1'>
                                        
                                    </Input>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 l4'>
                                    <Input 
                                        ref={this.setNominalOrganicStructureType} s={12} l={12} 
                                        type='select' 
                                        label='Tipo de estructura orgánica nominal' 
                                        defaultValue='No Asignado'>
                                        <option value='No Asignado'>No Asignado</option>
                                        <option value='Alta Dirección'>Alta Dirección</option>
                                        <option value='Dirección'>Dirección</option>
                                        <option value='Consultoría'>Consultoría</option>
                                        <option value='Consejo'>Consejo</option>
                                        <option value='Control'>Control</option>
                                        <option value='Linea'>Linea</option>
                                        <option value='Descentralizado'>Descentralizado</option>
                                    </Input>
                                </div>
                                <div className='col s12 l4'>
                                    <Input ref={this.setNameArea} s={12} l={12} label='Nombre' validate required={true}/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                    </p>
                                </div>
                                <div className='col s12 l4'>
                                    <Input ref={this.setInitials} s={12} l={12} label='Iniciales' validate required={true}></Input>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 

                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className='col s12 l4'>
                                    <Input ref={this.setTelephoneAnnex} s={12} l={12} label='Anexo Telefónico' min="0" type='number'/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                    </p>
                                </div>
                                <div className='col s12 l4'>
                                    <Input ref={this.setFax} s={12} l={12} label='Fax' min="0" type='number'/>
                                    <p className='error col s12 l12 font-style-italic letf-align red-text font-weight-bolder'> 
                                    
                                    </p>
                                </div>
                                <div className='col s12 l4'>
                                    <div className='col input-field s12 l12'>
                                        <Dropzone 
                                            className='dropzone grey lighten-2 border-gray-1' 
                                            accept={imageAccept.toString()}
                                            ref={this.setLogo} 
                                            onDrop={this.handleDrop}
                                            id='logo'
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
                            <Row>
                                <Button
                                    className='red right' type='submit' waves='light'>
                                    Guardar <Icon right>send</Icon>
                                </Button>
                            </Row>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrganizationSection);