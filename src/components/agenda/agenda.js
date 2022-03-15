import React, {  Component,useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './style.css';
import Grid from '@material-ui/core/Grid';
import Agenda_View from './item_agenda_view';
export default class Agenda extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [],
       
    
        }
      
      }
      componentDidMount() {
  
        document.title = "Agenda"
   
      ///Chamadas à API personalities
      fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=eventos`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic YWRtLXRhbjA5MzI6R21wUFBhN295TUdZQ1BrRnVN'
        },
  
      }
      ).then(res => {
        res.json().then(data => {
          this.setState({ items: data })
        });
      });
    }



    render() {
    return (
        <>

<div className={`bannerra`}>
   
   </div>
            <div className={`Div_title`}>
                <h1>Agenda</h1>
            </div>
            <Container>
                <div className={`Section_title`}>
                    <h2>Próximos Eventos</h2>
                </div>
            </Container>
            <Container>
                <Container>
                    <Container>
                        <Grid class={"Form_Cont"} >
                            <Grid container item xs={12} spacing={3}>
                                {this.state.items.map(item => {
                                          let now = new Date;
                                    let vari = compare_dates(new Date(item.x_metadata._conteudo_data_code_value_key), new Date(now));
                                    if (vari == true) {
                                        return <Grid item xs={12} md={4}><Agenda_View key={item.id} item={item} /> </Grid>
                                    } else {
                                        return null;
                                    }
                                })}
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </Container>
            <Container>
                <div className={`Section_title`}>
                    <h2>EVENTOS ANTERIORES</h2>
                </div>
            </Container>
            <Container>
      <Container>
      <Container>
      <Grid>
        <Grid container item xs={12} spacing={3}>
        {this.state.items.map(item => {
                  let now = new Date;
              let vari= compare_dates(new Date(item.x_metadata._conteudo_data_code_value_key), new Date(now));
            if(vari == false){
              return <Grid item xs={12} md={4}><Agenda_View key={item.id} item={item} /> </Grid>
            } else{
              return null;
            }
        })}
          </Grid>
        </Grid>
        </Container>
        </Container>
      </Container>
        </>
    )

      //Function compare two dates

      function compare_dates (date1, date2) {
          if (date1 > date2) return true;
          else if (date1 < date2) return false;
          else return false;
      }
   }

    
  
}


