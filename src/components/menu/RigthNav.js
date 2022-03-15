import React from 'react';
import styled from 'styled-components';
import { NavLink, Link,BrowserRouter } from 'react-router-dom';
const Ul = styled.ul`
  list-style: none;
 
  flex-flow: row nowrap;
  a {
    padding: 18px 10px;
  }
  display:none;
  @media (max-width: 900px) {
    flex-flow: column nowrap;
    display: flex;
    text-decoration:none;
    background-color: #0b0b0b;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: auto;
    width: 400px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      text-decoration: none;
      color: #fff;
    
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
              <NavLink to="/" ><strong>Home</strong></NavLink>
		    <NavLink to="/sobre-mim" ><strong>Sobre-Mim</strong></NavLink>
		   <Link to="/parceiros" ><strong>Parceiros</strong></Link>
           <NavLink to="/agenda" ><strong>Agenda </strong></NavLink>
		    <NavLink to="/dicas" ><strong>Dicas </strong></NavLink>
		   <NavLink to="/ferramentas" ><strong>Ferramentas</strong></NavLink>
           <NavLink to="/contactos" ><strong>Contactos</strong></NavLink>
    </Ul>
  )
}

export default RightNav