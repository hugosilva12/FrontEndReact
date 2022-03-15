import React, { useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/teste_b.jpg';
import Calendar_Icon from '../../assets/calendar.png';
import Location_Icon from '../../assets/pin.png';
import Style from './style.css';


const Sobre_Mim = (props) => {
  //Altera o title consoante o componente
  useEffect(() => {
    document.title = "Detalhes-Evento"
  }, []);
  let url = window.location.href;
  var ids = url.split("/");
  console.log(ids)
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const res = fetch(
      `http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=eventos`, {
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

  return (
    <>
      {comments.map(item => {
        if (item.id == ids[4]) {
          const date = new Date(item.date);
          return <> <div className={` Section_titlee`}>
            <Container>
              <div className={` Style_of_Title`}>
                <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              </div>
            </Container>
          </div>

            <Container>
              <div className={` SectionContainer`}>
                <div className={` Section_Img`}>
                  <img width="100%" src={item.x_metadata._conteudo_seo_imagem_value_key} />
                </div>

                <div className={` Section_description`}>
                  <div className={` Section_Data_Location`}>
                    <div className={` Section_Calendar_Icon`}>
                      <img width="40px" src={Calendar_Icon} />

                       </div>
                     <div className={` Style_Data_Location`}>
                     <p> {date.toDateString()}</p>
                    </div>
                  </div>
                  <div className={` Section_Data_Location`}>
                  <div className={` Section_Location_Icon`}>
                        <img width="40px" src={Location_Icon} />
                    
                    </div>
                    <div className={` Style_Data_Location`}>
                    <h5 dangerouslySetInnerHTML={{ __html: item.x_metadata._conteudo_localizacao_code_value_key }} />
                    </div>
                </div>
                <div className={`Description_butoon`}>
                <p dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                    <a href="/agenda">Voltar Atrás</a>
                  </div>
          
                </div>
              </div>
            </Container>

          </>

        }
      })}

    </>
  )
}


export default Sobre_Mim