import React, { useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './parceiros_style.css';


const Parceiros = (props) => {
    //Altera o title consoante o componente
    useEffect(() => {
        document.title = "Parceiros"
     }, []);


    const [comments, setComments] = useState([]);
    useEffect(() => {
        const res = fetch(
            ` http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=page`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWRtLXRhbjA5MzI6R21wUFBhN295TUdZQ1BrRnVN'
            },
            redirect: 'follow'
        }
        ).then(res => {
            res.json().then(data => {
                setComments(data);

            });
        });
    }, []);
    //Array Obter dados   
    let array_titulo = [];
    let array_descricao = [];
    let array_url_imagem = [];

    let count = 0;
    let count_layout = 0;
    {
        comments.map((item => {

            if (item.id == 23) {

                const itemm = item.x_metadata._conteudo_informacoes_informacoes_value_key;
                {
                    if (itemm != undefined) {

                        itemm.map(iteem => {
                            count = count + 1;
                            return array_titulo[count] = iteem.titulo, array_descricao[count] = iteem.descricao, array_url_imagem[count] = iteem.img;

                        })
                    } else {
                        return null;
                    }

                }
            } else {
                return null;
            }
        }))
    }
    return (
        <>
           <div className={`bannerrr`}>
   
   </div>
            <div className={`Div_title`}>
                <h1>Parceiros</h1>
            </div>
            {array_titulo.map(iteem => {
        count_layout = count_layout + 1;
        console.log(count)

        if (array_titulo.length < 2) {
          return null;
        } else {
            return  <Container>
                  <Container>
                  <Container>
             
               <div className={`SectionContainerr_p`}>
               <div className={`Des`}>
               <h2>{array_titulo[count_layout]}</h2>
                <p>{array_descricao[count_layout]}</p>
               </div>
               <div className={`Logo_Parceiros`}>
               <img width="200" height="200"src={array_url_imagem[count_layout]} />
               
               </div>

               </div>

         </Container>
         </Container>
         </Container>
       
        }
    })}

        </>
    )
}


export default Parceiros