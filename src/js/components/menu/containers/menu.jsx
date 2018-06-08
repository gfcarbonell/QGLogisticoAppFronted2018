import React from 'react';
import MenuItem from '../items/menu-item';
//Logo Módulo
import Employees from '../../../../media/images/png/Employees-1.png'; 

const menu = [
    {
        id:1,
        name:'Empleados',
        image: {
            src:Employees,
            alt:this.name
        },
        path: '/employees',
        order: 1
    },
    {
        id:2,
        name:'Empleados',
        image: {
            src:Employees,
            alt:this.name
        },
        path: '/employees',
        order: 2
    },
    {
        id:3,
        name:'Empleados',
        image: {
            src:Employees,
            alt:this.name
        },
        path: '/employees',
        order: 1
    },
    {
        id:4,
        name:'Empleados',
        image: {
            src:Employees,
            alt:this.name
        },
        path: '/employees'
    },
    {
        id:5,
        name:'Empleados',
        image: {
            src:Employees,
            alt:this.name
        },
        path: '/employees'
    },
    {
        id:6,
        name:'Empleados',
        image: {
            src:Employees,
            alt:this.name
        },
        path: '/employees'
    },
    {
        id:7,
        name:'Empleados',
        image: {
            src:Employees,
            alt:this.name
        },
        path: '/employees'
    }
]

class Menu extends React.Component{
    
    render(){
        return (
            <div className='menu'>
                <div>
                    <h3 className='menu-title sub-title center-align'> 
                        Menu Principal
                    </h3>
                </div>
                <ul className='menu-items'>
                    {
                        menu.map((item, index)=>{
                            return <MenuItem data={item} key={index}/>
                        })
                    }
                </ul>                                                                                       
            </div>
        );
    }
}
export default Menu;