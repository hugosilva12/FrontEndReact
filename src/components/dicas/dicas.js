import React, { Component, useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './style.css';
import Post_Home from './dicas_item_view';
import list_of_dicas from './data.json';
export default class Dica extends Component {
    //Altera o title consoante o componente


  constructor(props) {
    super(props);
    this.state = {
      items: [],
      items_2: [],
      items_3: [],
      items_4: [],
      categorias: [],
     
      visiable: 5,
      url: window.location.href,

    }
    this.loadmore = this.loadmore.bind(this);
    
  }

  
  componentDidMount() {

   
      
 
    ///Chamadas à API personalities
    fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=post&per_page=200`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },

    }
    ).then(res => {
      res.json().then(data => {
        this.setState({ items: data })
      });
    });
    //Dicas third
    fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=post&per_page=500`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },

    }
    ).then(res => {
      res.json().then(data => {
        this.setState({ items_2: data })
      });
    });
    fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=post&per_page=700`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },

    }
    ).then(res => {
      res.json().then(data => {
        this.setState({ items_3: data })
      });
    });
    fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=post&per_page=3000`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      },

    }
    ).then(res => {
      res.json().then(data => {
        this.setState({ items_4: data })
      });
    });


    fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getterms?taxonomy=category`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
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
      if (old.visiable == 200) {
        this.state.items = this.state.items_2;
      }
      if (old.visiable == 500) {
        this.state.items = this.state.items_3;
      }
      if (old.visiable == 700) {
        this.state.items = this.state.items_4;
      }

      return { visiable: old.visiable + 5 }
    })


  }


  render() {
    let counter = -1;
    
    //console.log(this.state.items)
    return (<>
    
         <div className={`banner_a_a`}>
   
   </div>
   <div className={`Div_title`}>
                <h1>Dicas</h1>
            </div>
  
            <div className={`Div_Dicas_Container`}>
        <div className={`SectionContaneir`}>
          <div className={`Dicas_Container`}>

            {this.state.items.slice(0, this.state.visiable).map((item) => {
              const ids_category = item.taxonomies.category.ids + "// ";
              const ik = ids_category.split(" ");
              console.log(ik.length)
              counter = counter + 1
              const ids = this.state.url.split("/")

              return <>  <Post_Home  key={item.id} item={item} />

              </>


            })}
            
            <div className={`Container_Load_More`}>
            <button  class="Button_button"  onClick={this.loadmore}>Ver Mais</button>
            </div>
          </div>

          <div className={`Form_Section`}>
            <h5>Categorias</h5>
            {this.state.categorias.map(item => {
              return <a href={`/dica/${item.term_id}`}>{item.name}</a>
            })}
          </div>

        </div>
  </div>


      <div>

      </div>


    </>
    )
  }
}