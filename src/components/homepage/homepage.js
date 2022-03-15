import React, { Component, useEffect, useState } from 'react';
import styles from './homepage.css';
import Post_Home from './home_article_view';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            slideshow: [],
            cod_imagem: null,
            count: 0,
            name: '',
            email: '',
            message: ''

        }
        document.title = "Tiago Almeida Nogueira"
    
    }

    componentDidMount() {
        fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=post&per_page=3`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWRtLXRhbjA5MzI6R21wUFBhN295TUdZQ1BrRnVN'
            },

        }
        ).then(res => {
            res.json().then(data => {
                this.setState({ comments: data })
            });
        });
        fetch(`http://tan.mybrontley.com/wp-json/bspcustom/getposts?post_type=slideshow`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWRtLXRhbjA5MzI6R21wUFBhN295TUdZQ1BrRnVN'
            },

        }
        ).then(res => {
            res.json().then(data => {
                this.setState({ slideshow: data })
            });
        });

    }

    render() {

        console.log(this.state.slideshow)
        {
            this.state.slideshow.map(item => {
                return this.state.cod_imagem = item.x_featured_media_original
            })
        }

        return (
            <>

                <img width="100%" src={this.state.cod_imagem} />
                <div className={`Sub_Email`}>
                    <Container>
                        <Container>
                            <Container>

                                <div className={`Container_Email`}>
                                    <div className={`Sub_Email_Section_Left`}>

                                        <div class="col-lg-4 col-md-4 text-center">
                                            <h3>Receba as minhas novidades no seu email!</h3>
                                        </div>
                                    </div>

                                    <div class="Sub_Email_Section_Right">
                                        <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                            <label>

                                                <input type="text"  placeholder="Nome" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                                            </label>
                                            <label>

                                                <input type="text"  placeholder="E-mail" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                                            </label>
                                            <input type="submit" value="Subscrever" />
                                        </form>

                                    </div>
                                </div>

                            </Container>
                        </Container>
                    </Container>

                </div>
                <div className={`Imagem_Destaque`}>
                    <h1>Tiago Almeida Nogueira</h1>
                    <p>Digital Marketing Specialist</p>
                </div>
                <div className={`Div_Container`}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={4}>
                            {this.state.comments.map(item => {

                                // Render one Item component for each one.
                                return <Grid item xs={12} md={4}> <Post_Home key={item.id} item={item} /> </Grid>;

                            })}
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        if (window.confirm("Pretende confirmar subscrição !")) {
            fetch('http://localhost/Send/send_email.php',{
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              })
              this.resetForm()
          }else {
            alert("Subscrição cancelada")
            this.resetForm()  
        }
        }     
     
     
       
    
      resetForm(){
        this.setState({name:'', email: ''})
     }


 }



















