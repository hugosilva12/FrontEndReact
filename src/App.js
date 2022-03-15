import React from 'react';
import logo from './logo.svg';
import  list_of_dicas from "./data.json";
import { View, Text, FlatList } from "react";
import Menu from './components/menu/menu';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import HomePage from './components/homepage/homepage';
import Dicas from './components/dicas/dicas';
import Footer from './components/Footer/footer';
import Sobre_Mim from './components/sobre_mim/sobre_mim';
import Parceiros from './components/parceiros/parceiros';
import Agenda from './components/agenda/agenda';
import Ferramentas from './components/Ferramentas/ferramentas';
import Contactos from './components/Contactos/contactos';
import Dicas_View from './components/dicas/dicas_view';
import Dicas_Filter from './components/dicas/dicas_filter';
import Sobre_Miim from './components/agenda/agenda_detail';
import Dicas_Filtros from './components/dicas/Dicas_Filter_Test';
function App() {
  //const { pathname } = useLocation()
  return (
    <BrowserRouter>
     <Menu />
        <Switch>
  
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/sobre-mim" component={Sobre_Mim} />
            <Route path="/parceiros" component={Parceiros} />
            <Route path="/agendas/:agenda" component={Sobre_Miim}/>
            <Route path="/agenda" component={Agenda}/>
            <Route path="/ferramentas"exact={true} component={Ferramentas}/>
            <Route path="/contactos" component={Contactos}/>
            <Route path ="/dica/:dicas" component={Dicas_Filter}/>
            <Route path="/dicas" component={Dicas} />
            <Route path="/:dicas" component={Dicas_View}/>
        
           
        </Switch>
    <Footer/>
</ BrowserRouter>

  );
}

export default App;
