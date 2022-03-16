import React, { useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './style.css';
import Logo_Img from '../../assets/blog-bg-1.jpg';
import Dicas from './dicas_item_view';
const Dicas_View = ({ state, item }) => {
    const [categorias, setCategorias] = useState([]);
    const [comments, setComments] = useState([]);
    let url = window.location.href;
    var ids = url.split("/");
    let count = 0;
    let count_aux = 0;
    let estado = false;
    let count_auxx = 0;
    //console.log(ids[ids.length - 1]);
    //console.log(item)
    //const date = new Date(item.date);
    //Obtem dados da api Categorias
    useEffect(() => {
        const resultado = fetch(
            `http://tan.mybrontley.com/wp-json/bspcustom/getterms?taxonomy=category`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            },
            redirect: 'follow'
        }
        ).then(resultado => {
            resultado.json().then(data => {
                setCategorias(data);
            });
        });
    }, []);


    //Obtem dados da api DICAS
    useEffect(() => {
        const res = fetch(
            `http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=post`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            },
            redirect: 'follow'
        }
        ).then(res => {
            res.json().then(data => {
                setComments(data);
                console.log(res.json)
            });
        });
    }, []);

    //var ids = item.taxonomies.category.ids.split(" ")
    return (
        <>
            {comments.map(item => {

                if (item.id == ids[ids.length - 1]) {
                    //console.log("hello ",item)

                    return <>  <div className={`Section_titlee`}>
                        <Container>
                            <div className={`Style_of_Title`}>
                                <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                            </div>
                        </Container>

                    </div>
                        <Container>
                            <div className={`SectionContaneir`}>
                                <div className={`Dicas_Container`}>
                                    <div className={`Data_and_Categories`}>
                                        {categorias.map(it => {
                                            var ids = item.taxonomies.category.ids.split(" ")
                                            count = 0;
                                            while (count < ids.length) {
                                                count = count + 1;
                                                if (ids[count - 1] == it.term_id) {
                                                    return <span><a href="#">{it.name}  </a></span>
                                                }
                                            }

                                        })}
                                    </div>
                                    <img width="100%" src={item.x_metadata._conteudo_seo_imagem_value_key} />
                                    <div className={`Data_and_Categories`}>
                                        <h6 dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                    </div>

                                </div>

                                <div className={`Form_Section`}>
                                    <h5>Categorias</h5>
                                    {categorias.map(item => {
                                        return <a href="#">{item.name}</a>
                                    })}
                                </div>

                            </div>
                        </Container>
                        <Container>
                            <div className={`Dicas_Container`}>
                                {comments.map(it => {
                                    if (count_aux < 3) {
                                        var ids = item.taxonomies.category.ids.split(" ")
                                        count_auxx = count_auxx + 1;
                                        var idss = it.taxonomies.category.ids.split(" ")
                                        if (ids[0] == idss[0]) {

                                            if (count_auxx > 0 && estado == false) {
                                                estado = true;
                                                return <h2>Artigos Relacionados</h2>
                                            }

                                            if (item.id != it.id) {

                                                return <>
                                                    <Dicas key={it.id} item={it} />

                                                </>
                                            }

                                        } else {
                                            return null;
                                        }
                                    }
                                })}
                            </div>
                        </Container>
                    </>
                } else {
                    return null;
                }
            })}




        </>
    )
}


export default Dicas_View