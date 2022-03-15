import React, { useEffect, useState } from 'react';
import Location_Icon from '../../assets/pin.png';
import Calendar_Icon from '../../assets/calendar.png';

import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './style.css';
import Grid from '@material-ui/core/Grid';

const Agenda_Item = ({ state, item }) => {

    return (
        <>

            <div className={`Descricao_Parceiros`}>
                <img width="100%" src={item.x_metadata._conteudo_seo_imagem_value_key} />
                <h2 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

                <div className={`Contact_icons`}>
                    <div className={`Icons_layout`}>

                        <img width="25px" src={Calendar_Icon} />
                    </div>
                    <div className={`Section_paragraph`}>
                        <h1>   {item.x_metadata._conteudo_data_code_value_key} </h1>
                    </div>

                </div>
                
                <div className={`Contact_icons`}>
                    <div className={`Icons_layout`}>

                        <img width="25px" src={Location_Icon} />
                    </div>
                    <div className={`Section_paragraph`}>
                    <h1 dangerouslySetInnerHTML={{ __html: item.x_metadata._conteudo_localizacao_code_value_key }} />
                    </div>

                </div>
           
                <div className={`Botton_Submit`}>
            <a href={`/agendas/${item.id}`} >Saber Mais</a>
            </div>
            </div>
         
            


        </>
    )
}


export default Agenda_Item 