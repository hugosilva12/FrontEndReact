import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './style.css';
import Logo_Img from '../../assets/blog-bg-1.jpg';
const Post_Home = ({ state, item }) => {
    //console.log(" op",item)
    const date = new Date(item.date);
    const [categorias, setCategorias] = useState([]);
    //Obtem dados da api Categorias
    useEffect(() => {
        const resultado = fetch(
            `http://tan.mybrontley.com/wp-json/bspcustom/getterms?taxonomy=category`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWRtLXRhbjA5MzI6R21wUFBhN295TUdZQ1BrRnVN'
            },
            redirect: 'follow'
        }
        ).then(resultado => {
            resultado.json().then(data => {
                setCategorias(data);
            });
        });
    }, []);
    useEffect(() => {
        const resultado = fetch(
            `http://tan.mybrontley.com/wp-json/bspcustom/getterms?taxonomy=category`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWRtLXRhbjA5MzI6R21wUFBhN295TUdZQ1BrRnVN'
            },
            redirect: 'follow'
        }
        ).then(resultado => {
            resultado.json().then(data => {
                setCategorias(data);
            });
        });
    }, []);

    return (
        <>
            <div className={`Div_Item`}>
                <div className={`Logo_Container`}>
                <img width="100%" src={item.x_metadata._conteudo_seo_imagem_value_key}  />
                </div>
                    <div className={`Dicas_Description`}>
                    <h3><a dangerouslySetInnerHTML={{ __html: item.title.rendered }} /></h3>
                    <span>   {date.toDateString()}</span>
                        <div className={`Excerpt`}>
                            <p dangerouslySetInnerHTML={{ __html: item.description }} />
                        </div>
                   
                        <div className={`Botton_Submit`}>
                        <a href={`/${ item.id }`}><input type="submit" value="Ler Mais" /></a>
                            </div>
                    </div>
          
            </div>


        </>
    )
}


export default Post_Home