import React, { Component, useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './style.css';
import Roupa_Item from './roupa_item_view';
import list_of_dicas from './data.json';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Range from '../../components/dicas/Range/Range';
import list_with_vari from './convertjson.json';

export default class Dicas_Filtros extends Component {
    //Altera o title consoante o componente

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            min_preco: 0,
            max_preco: 100000000,
            tamanho: 1,
            categorias: [],
            estado: 1,
            visiable: 100,
            xml:[],
            url: window.location.href,


        }

        this.consol = this.consol(this)
        this.filter_price2 = this.filter_price2.bind(this)
        this.filter_price = this.filter_price.bind(this)
        this.view_4 = this.view_4.bind(this)
        this.vieww = this.vieww.bind(this)
        this.view_all = this.view_all.bind(this)
        this.view = this.view.bind(this);
        this.loadmore = this.loadmore.bind(this);
        this.state.items = list_of_dicas;


    }
    componentDidMount() {

        document.title = "Roupas"
        //console.log(" xml", list_with_vari.document.product)
        {list_with_vari.document.product.map((item) => {
            console.log("Var",item.Extended_Xml_Attributes.variacoes.variacao.length)
        })}
   

    }

    loadmore() {
        this.setState((old) => {

            return { visiable: old.visiable + 100 }
        })
    }

    view() {
        this.setState((old) => {

            return { estado: 2 }

        })
    }
    view_all() {
        this.setState((old) => {

            return { estado: 1 }

        })
    }
    vieww() {
        this.setState((old) => {

            return { estado: 3 }

        })
    }
    view_4() {
        this.setState((old) => {

            return { estado: 4 }

        })
    }
    consol() {
        console.log(this.state.min_preco);
    }
    filter_price() {
        this.setState((old) => {

            return { min_preco: 0 }, { max_preco: 50 }

        })
    }

    filter_price2() {
        this.setState((old) => {

            return { min_preco: 50 }, { max_preco: 100 }

        })
    }


    render() {
     

    
        
        
        
        let counter = -1;


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
                        <Grid container spacing={1}>
                            <Grid container item xs={12} spacing={4}>
                                {list_with_vari.document.product.slice(0, this.state.visiable).map((item) => {

                               

                                        if (this.state.estado == 1) {
                                            return <Grid item xs={12} md={4}><Roupa_Item key={item.id} item={item} /> </Grid>
                                        } else if (this.state.estado == 2) {
                                            if (item.categoria == "VESTIDOS") {
                                                return <Grid item xs={12} md={4}><Roupa_Item key={item.id} item={item} /> </Grid>
                                            }
                                        } else if (this.state.estado == 3) {
                                            if (item.categoria == "CALÇAS") {
                                                return <Grid item xs={12} md={4}><Roupa_Item key={item.id} item={item} /> </Grid>
                                            }
                                        } else if (this.state.estado == 4) {
                                            if (item.categoria == "ACESSORIOS") {
                                                return <Grid item xs={12} md={4}><Roupa_Item key={item.id} item={item} /> </Grid>
                                            }
                                        }

                                
                                })}
                            </Grid>
                        </Grid>



                        <button type="button" onClick={this.loadmore}>load more</button>
                    </div>

                    <div className={`Form_Section`}>
                        <h5>Categorias</h5>
                        <button type="button" onClick={this.view_all}>Todas Categorias</button> <br />
                        <button type="button" onClick={this.view}>Vestidos</button> <br />
                        <button type="button" onClick={this.vieww}>Calças</button>   <br />
                        <button type="button" onClick={this.view_4}>Acessorios</button>   <br />
                        <h5>Preços</h5>
                        <button type="button" onClick={this.filter_price}>0-50</button>   <br />
                        <button type="button" onClick={this.filter_price2}>50-100</button>   <br />
                        <button type="button" onClick={this.consol}>100-150</button>   <br />
                        <div className={'aside-header'}><small>Filters</small></div>
                        <form >
                            <div>
                                <h4 className={'aside-title'}>Preço</h4>
                                <Range
                                    value={this.state.tamanho}
                                    min="0"
                                    max="6"
                                    onChange={(e) => {
                                        this.state.tamanho = e.target.value;

                                    }}

                                />
                            </div>
                            <div>


                            </div>

                            <button type="submit" ><b>Find</b></button>

                        </form>



                    </div>

                </div>

            </Container>


            <div>

            </div>


        </>
        )
    }
}