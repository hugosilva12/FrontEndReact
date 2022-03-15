import React, {Component, styled, connect } from "react";
import { Row, Column } from 'react-foundation'
import { Container } from "@material-ui/core"
import Phone_logo from '../../assets/email.png'
import Mail_logo from '../../assets/phone.png'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import styles from './Style.css'

// Component that provides scroll to top functionality


export default class Footer extends Component {

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
  render() {
    return (
      <>
        <div className={`SiteFooterInner`}>
          <div className={`SiteFooterInner`}>
  
            <Container>
              <Container>
                <Container>
                  <div className={`Credits`}>
                    <div className={`Rows_First`}>
                      <div className={`Rows_First_View`}>
                        <Row>
                          <Column>
                            <Column>
                              <div className={`Title_color`}>
                                Mapa do Site
                                </div>
                            </Column>
                            <div className={`Copyright`}>
                              Home
                          </div>
  
  
                          </Column>
                          <Column>
                            <div className={`Copyright`}>
                              Sobre mim
                </div>
                          </Column>
                          <Column>
                            <div className={`Copyright`}>
                              Parceiros
                </div>
                          </Column>
                          <Column>
                            <div className={`Copyright`}>
                              Agenda
                </div>
                          </Column>
                          <Column>
                            <div className={`Copyright`}>
                              Dicas
                </div>
                          </Column>
                          <Column>
                            <div className={`Copyright`}>
                              Ferramentas
                </div>
                          </Column>
                          <Column>
                            <div className={`Copyright`}>
                              Contactos
                </div>
                          </Column>
  
                        </Row>
                      </div>
                      <div className={`Rows_First_View_drop`}>
                        <div class="dropdown">
                          <button class="dropbtn">Mapa do Site
                           <i class="fa fa-caret-down"></i>
                          </button>
                          <div class="dropdown-content">
                            <a href="#">Home</a>
                            <a href="#">  Sobre mim</a>
                            <a href="#"> Ferramentas</a>
                            <a href="#"> Agenda</a>
                            <a href="#"> Parceiros</a>
                            <a href="#"> Contactos</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`Rows_`}>
                    <div className={`Rows_First_View_drop`}>
                        <div class="dropdown">
                          <button class="dropbtn">Contactos
                        <i class="fa fa-caret-down"></i>
                          </button>
                          <div class="dropdown-content">
                            <a href="#">               <img width="22px" overflow="hidden" src={Mail_logo}/> +351 220 993 488</a>
                            <a href="#">     <img width="25px" src={Phone_logo}/> me@tiagoalmeidanogueira.com </a>
                          </div>
                        </div>
                      </div>
                      <Row>
                      <div className={`Rows_First_View`}>
                        <div className={`Title_color`}>
                          CONTACTOS
  </div>
  
                        <Column>
                        <div className={`Copyright_img`}>  <img width="22px" overflow="hidden" src={Phone_logo}></img>  </div>
                         
                          <div className={`Copyright_fone`}>   +351 220 993 488</div>
                        </Column>
                        <Column>
                          <Column></Column>
                          <div className={`Copyright_img`}>   <img width="25px" src={Mail_logo}></img>  </div>
                      
                          <div className={`Copyright_fone`}>    me@tiagoalmeidanogueira.com</div>
                        </Column>
                        </div>
                      </Row>
                  
                    </div>
  
  
  
  
                    <div className={`Rows_`}>
  
                      <Row>
                        <div className={`Title_color`}>
                          FIQUE LIGADO!
  </div>
  
                        <Column>
  
                          <div className={`Div_socialicons`}>
                            <SocialMediaIconsReact borderColor="rgba(239,229,229,0.79)" borderWidth="1" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0)" iconSize="3" roundness="47%" url="https://some-website.com/my-social-media-url" size="33" />
  
                            <SocialMediaIconsReact borderColor="rgba(239,229,229,0.79)" borderWidth="1" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0)" iconSize="3" roundness="47%" url="https://some-website.com/my-social-media-url" size="33" />
                            <SocialMediaIconsReact borderColor="rgba(239,229,229,0.79)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,0)" iconSize="3" roundness="47%" url="https://some-website.com/my-social-media-url" size="33" />
                          </div>
                        </Column>
  
                      </Row>
                    </div>
                    <div className={`Rows_`}>
  
                      <Row>
                        <div className={`Title_color`}>
                          NEWSLETTER
  </div>
  
                        <Column>
  
                          <div className={`Input_form`}>
                            <form  onSubmit={this.handleSubmit.bind(this)} method="POST">
                              <label>
                                <input type="text" placeholder="Nome" name="name"  value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                              </label>
                              <label>
                                <input type="text" placeholder="Email" name="name" value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
                              </label>
                              <input type="submit" value="Subscrever" />
                            </form>
                          </div>
                        </Column>
  
  
                      </Row>
                    </div>
  
                  </div>
  
                </Container>
              </Container>
            </Container>
            <Container>
              <Container>
                <Container>
                  <div className={`Section_Copyright`}>
                    <div className={`Cop_right`}>
                      <p>&copy; 2020 Tiago Almeida Nogueira. Todos os Direitos Reservados</p>
  
                      <ul>
                        <li><a href="#">Termos e Condições</a></li>
                        <li><a href="#">Resolução Alternativa de Litígios</a></li>
                        <li><a href="#">Livro de Reclamações</a></li>
                      </ul>
  
                    </div>
                    <div className={`Link_Basicamente`}>
  
                    </div>
                  </div>
  
  
                </Container>
              </Container>
            </Container>
          </div>
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
    alert("Obrigado por subscrever a newsletter!")
    fetch('http://localhost/Send/send_email.php',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      this.resetForm()
  }
   

  resetForm(){
    this.setState({name:'', email: ''})
 }


}
