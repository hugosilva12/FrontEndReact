import React from 'react'
import styles from './Menu.Module.css'
import Logo_Image from '../../assets/tan_logo.jpeg'
import { NavLink, Link,BrowserRouter } from 'react-router-dom'
import Burger from './Burger';

const Menu = (props) => {
    const { translucent } = props
    return (
        <div className={`root`}>
            <div className={`Logo`}>
            <img width="120" src={Logo_Image}></img>
            </div>
            
            <div className={`menu-links`}>
                 <div className={`navitem`}>
            <NavLink to="/" ><strong>Home</strong></NavLink>
		    <NavLink to="/sobre-mim" ><strong>Sobre-Mim</strong></NavLink>
		   <Link to="/parceiros" ><strong>Parceiros</strong></Link>
           <NavLink to="/agenda" ><strong>Agenda </strong></NavLink>
		    <NavLink to="/dicas" ><strong>Dicas </strong></NavLink>
		   <NavLink to="/ferramentas" ><strong>Ferramentas</strong></NavLink>
           <NavLink to="/contactos" ><strong>Contactos</strong></NavLink>
         
           </div>
           </div>
         
           <Burger/>
         
        </div>
    )
}



export default Menu