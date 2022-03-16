import React, { useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './ferramentas_style.css';


const Ferramentas = (props) => {
        //Altera o title consoante o componente
        useEffect(() => {
            document.title = "Ferramentas"
         }, []);
    
    
    //Call to api
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const res = fetch(
            `http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=ferramentas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
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
          <div className={`banner_aa`}>
   
   </div>
            <div className={`Div_title`}>
                <h1>Ferramentas</h1>
            </div>
            <div className={`SectionContaineeer`}>

                    <div className={`Main_Menu___`}>
                        <Container>
                        <ul>
                            <li><a href="#"></a></li>
                            <li><a href="#">Redes Sociais </a></li>
                            <li><a href="#">E-mailMarketing </a></li>
                        </ul>
                        </Container>
                    </div>

             
            </div>
            <Container>
                {comments.map(item => {
                    return <Container>
                        <div className={`Section_Ferramentas`}>
                            <div className={`Logo_lg`}>
                                <img src={item.x_featured_media_original} /> </div>
                            <div className={`Descrition`}>
                                <h2>  {item.title.rendered}</h2>
                                <p dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                            </div>
                            <div className={`Descrition_min`}>
                                <h2>  {item.title.rendered}</h2>
                                <p dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                            </div>
                            <div className={`Logo_lg_min`}>
                                <img src={item.x_featured_media_original} /> </div>
                        </div>
                    </Container>
                })}
            </Container>

        </>
    )
}


export default Ferramentas