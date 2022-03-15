import React, { useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './style.css';
import Calca from '../../assets/calças.png';
import Blazer from '../../assets/blazer.png';
import Cinto from '../../assets/cinto.png';
import Camisa from '../../assets/camisa.png';
import Laco from "../../assets/laço.png";
import Gravata from "../../assets/gravata.png";
import Vestidos from "../../assets/vestidos.png";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
const Roupa_Item = ({ state, item }) => {

    let vari = null;
    if (item.categoria == "ACESSORIOS") {
        vari = Cinto;
    } else if (item.categoria == "CALÇAS") {
        vari = Calca;
    } else if (item.categoria == "CAMISAS") {
        vari = Camisa;
    } else if (item.categoria == "VESTIDOS") {
        vari = Vestidos;

    } else {
        vari = Blazer;
    }
    const [states, setState] = React.useState({
        age: ' ',
        price: item.Extended_Xml_Attributes.variacoes.variacao[0].preco,
    })
    const handleChange = (event) => {
        const name = event.target.name;
        let hello = null ;
        {item.Extended_Xml_Attributes.variacoes.variacao.map(iteme => {
            //console.log(iteme.tamanho) 
            //console.log("ev",event.target.value)
            if(iteme.tamanho == event.target.value ){
                console.log("estou aqui",iteme)
           hello = iteme.preco;
              }
        })}
        console.log("email",event.target.value)
         setState({
           ...state,
           
           price: hello
           //[name]: event.target.value,
         });
        

         
    };

    return (
        <>
            <div className={`rooter`}>
                <div className={`thumb`}>

                    <img width="100%" src={vari} />
                </div>
                <div className={'details'} >

                    <h4 className={'title'}>{item.nome}</h4>
                    <h5>{states.price} €</h5>
                    <FormControl>
                        <InputLabel htmlFor="age-native-simple"></InputLabel>
                        <Select native value={states.age} inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}

                            onChange={handleChange}>

                            {item.Extended_Xml_Attributes.variacoes.variacao.map(iteme => {

                                return <>
                               
                                 <option value={iteme.tamanho}>{iteme.tamanho}</option>
                                  
                                </>

                            })}


                        </Select>
                    </FormControl>

                </div>
            </div>



        </>
    )
}


export default Roupa_Item