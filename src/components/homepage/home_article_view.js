import React, { useEffect, useState } from "react";
import styles from './homepage.css';
import Logo from '../../assets/blog-bg-1.jpg'


/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Post_Home = ({ state, item }) => {

  const date = new Date(item.date);
    console.log(item)
  //Chamada Api para retornar categorias
  const [categorias, setCategorias] = useState([]);
  //Chamada Api para retornar categorias

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

  let count = 0;
  var ids = item.taxonomies.category.ids.split(" ")
  console.log("tamanho ",item)
  return (
    <>
    <div className={`Section`}>
    <div className={`Section_Inside`}>
    <img width="100%" src={item.x_metadata._conteudo_seo_imagem_value_key} />
    <div className={` PublishDate`}>
    {categorias.map(it => {
              count = 0;
              while (count < ids.length) {
                count = count + 1;
                if (ids[count-1] == it.term_id) {
                  return <span><a href="#">{it.name}  </a></span>
         
              
               
                }
              }

            })}




    </div>
    <div className={` Title`}>
      {item.title.rendered}
      </div>
      <div className={`Div_aux`}>
      <span> {date.toDateString()}</span>
      </div>
   
      </div>
      </div>
      <div className={`Botton_Submit`}>
      <a href={`/${ item.id }`}><input type="submit" value="Ler Mais" /></a>
      </div>
    
    </>
  );
};

// Connect the Item to gain access to `state` as a prop
export default Post_Home;

