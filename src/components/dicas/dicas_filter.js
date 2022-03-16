import React, { Component, useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './style.css';
import Post_Home from './dicas_item_view';
import list_of_dicas from './data.json';

export default class Dicas_Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categorias:[],
            visiable: 10,
            url: window.location.href,
         
        }
        this.loadmore = this.loadmore.bind(this);
    }
    componentDidMount() {
        fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=post&per_page=200`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
            },

        }
        ).then(res => {
            res.json().then(data => {
                this.setState({ items: data })
            });
        });


        fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getterms?taxonomy=category`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWRtLXRhbjA5MzI6R21wUFBhN295TUdZQ1BrRnVN'
            },

        }
        ).then(res => {
            res.json().then(data => {
                this.setState({ categorias: data })
            });
        });
      
      
    }

    loadmore() {
        this.setState((old) => {
            return { visiable: old.visiable + 3 }
        })


    }


    render() {
        console.log(this.state.items)
        return (<>
            <div className={`Footer_Background`}>
                <img width="100%" src={Img} />
            </div>
            <div className={`Div_title`}>
                <h1>Dicas</h1>
            </div>
            <Container>
                <div className={`SectionContaneir`}>
                    <div className={`Dicas_Container`}>

                        {this.state.items.slice(0, this.state.visiable).map((item) => {
                            const ids_category = item.taxonomies.category.ids + "// ";
                            const ik = ids_category.split(" ");
                            console.log(ik.length)
                            let counter = -1;
                            const ids= this.state.url.split("/")
                          
                            while (counter < ik.length-1) {
                                counter = counter + 1;
                                console.log("counter ",ik[counter]) ;
                                if (ik[counter] == ids[ids.length - 1]) {
                                    return   <Post_Home key={item.id} item={item} />

                                } 
                            }

                        })}

<button type="button" onClick={this.loadmore}>load more</button>
                    </div>
                    
            <div className={`Form_Section`}>
                        <h5>Categorias</h5>
                        {this.state.categorias.map(item => {
                            return <a href={`/dica/${item.term_id}`}>{item.name}</a>
                        })}
                    </div>

                </div>
            </Container>


            <div>

            </div>


        </>
        )
    }
}
