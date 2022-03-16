import React, { useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/teste_b.jpg';
import Style from './style.css';


const Sobre_Mim = (props) => {
  //Altera o title consoante o componente
  useEffect(() => {
    document.title = "Sobre-Mim"
  }, []);



  const [sobre_mim, setSobre_mim] = useState([]);

  useEffect(() => {
    const res = fetch(
      `http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=page`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },
      redirect: 'follow'
    }
    ).then(res => {
      res.json().then(data => {
        setSobre_mim(data);

      });
    });
  }, []);

  //Variaveis auxliares titulo
  let text = null;
  let text2 = null;
  // imagem
  let img = null;
  let img2 = null;
  // descricao
  let descricao = null;
  let descricao2 = null;

  return (
    <>
      {sobre_mim.map(item => {
        //const itemm = item.x_metadata._conteudo_informacoes_informacoes_value_key;
        if (item.id == 20) {
          {
            let cont = 0;
            item.x_metadata._conteudo_informacoes_informacoes_value_key.map(item => {
              cont = cont + 1;
              if (cont == 1) {
                return text = item.titulo, img = item.img, descricao = item.descricao;
              } else {
                return text2 = item.titulo, img2 = item.img, descricao2 = item.descricao;

              }

            })
          }
        }
      })}

      <div className={`bannerr`}>
   
      </div>
      <div className={`Div_title`}>
        <h1>Sobre-Mim</h1>
      </div>
      <div className={`Div_Container`}>
        <div className={`SectionContainerr`}>
          <div className={`About`}>
            <div className={`Image_1`}>
              <img width="100%" src={img} />
            </div>
            <div className={`Const_about_rigth_section`}>
              <h2>{text}</h2>
              <p> {descricao} </p>
            </div>

          </div>
        </div>

        </div>
        <div className={`Div_Container`}>
        <div className={`SectionContainerr`}>
          <div className={`About`}>
            <div className={`Const_about_2`}>
              <h2>{text2}</h2>
              <p> {descricao2} </p>

            </div>
            <div className={`Image_1`}>
              <img width="100%" src={img2} />
            </div>
          </div>
        </div>
        </div>

    </>
  )
}


export default Sobre_Mim