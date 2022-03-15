import React, { useEffect, useState } from 'react';


import Container from '@material-ui/core/Container';
import Img from '../../assets/banner_page.jpg';
import Style from './contactos_style.css';
import axios from 'axios';
import { SocialMediaIconsReact } from 'social-media-icons-react';
class Contactos extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        assunto: '',
        message: '',
        mailSent: false,
        erro: null
      }
    }
    render() {
        return(
            <>
                 <div className={`banner_a_a_a`}>
   
   </div>
   <div className={`Div_title`}>
                <h1>Contactos</h1>
            </div>
            <Container>
                <Container>
                    <Container>
                        <div className={`SectionContainer`}>
                            <div className={`Section_Contact`}>

                                <h5>Contactos</h5>
                                <p><b>Telefone</b> </p>
                                <p> <span>+351 910 000 000</span> </p>
                                <p><b>Email</b></p>
                                <p> <span><a href="">me@tiagoalmeidanogueira.com </a></span> </p>
                                <p><b>Redes Sociais</b></p>

                                <div className={`SocialNetwork_icons`}>
                                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(37,147,138,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />


                                    <b>
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(37,147,138,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                                    </b>
                                    <b>
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(37,147,138,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                                    </b>

                                    <b>
                                        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="skype" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(37,147,138,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
                                    </b>
                                </div>

                            
                            </div>
                            <div className={`Section_Contact`}>
                                    <h5>Fale comigo!</h5>
                                    <form id="contact-form" onSubmit={this.handlerSubmit.bind(this)} method="POST">
                                    <input type="text" name="name" id="name" required="true" value={this.state.name}  placeholder="Nome" value={this.state.name} onChange={this.onNameChange.bind(this)}></input>
                                    <input type="email" name="email" id="email" required="" placeholder="E-mail" value={this.state.email} onChange={this.onEmailChange.bind(this)} ></input>
                                    <input type="text" name="subject" id="subject" value={this.state.assunto} onChange={this.onAssuntoChange.bind(this)} placeholder="Assunto"></input>
                                    <textarea type="text" name="subject" id="subject" placeholder="Mensagem" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
                                    <input type="submit" name="Enviar"></input>
                                    </form>
                                </div>
                        </div>
                    </Container>
                </Container>
            </Container>
        </>
        );
       }
       
         onNameChange(event) {
           this.setState({name: event.target.value})
         }
       
         onEmailChange(event) {
           this.setState({email: event.target.value})
         }
       
         onMessageChange(event) {
           this.setState({message: event.target.value})
         }
         onAssuntoChange(event) {
            this.setState({ assunto: event.target.value })
        }
       
         handlerSubmit(event) {
        event.preventDefault();
        if (window.confirm("Pretende confirmar mensagem !")) {
          axios({
            method: "POST", 
            url:"http://localhost/Send/send_email_contact.php", 
            data:  this.state
          })
          this.resetForm()
        }else{
          this.resetForm()  
        }


      

       }


      resetForm(){
    
        this.setState({name:'', email: '',assunto:''})
     }




 }
       
       export default Contactos;

