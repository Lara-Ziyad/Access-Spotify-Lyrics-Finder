
import { nav } from "react-bootstrap";
import React, { Component } from 'react';
import {Modal} from "../Modal/modal.js";

class NavBar extends Component {


  state = {
    sign: false,
    create: false,

}

hideModal = ()=> {
    this.setState ({sign:false})
}
 hideRegister = () => {

    this.setState ({create:false})

 }
  render() {
    return (
      < > 
           { this.state.sign ? <div onClick={this.hideModal} style={{ position:"fixed", backgroundColor:"rgba(63, 61, 61, 0.692)", height:"100%", transition:"all 1.3s ", width: "100%" }}>
           
           </div> : null }

           { this.state.create ? <div onClick={this.hideModal} style={{ position:"fixed", backgroundColor:"rgba(63, 61, 61, 0.692)", height:"100%", transition:"all 1.3s ", width: "100%" }}>
           
           </div> : null }
             
                      <nav className="navbar navbar-expand-lg navbar-dark  d-flex justify-content-between " style = {{backgroundColor:"rgba(0, 10, 30)"}}>
                      <div className="container">
                      <a className="navbar-brand  h" href="/">Lyrics</a>
                     
              <div class="d-flex flex-row-reverse  ">
                     
                     <button className="navbar-toggler navbar-dark text-light" type="button"                data-toggle="collapse" data-target="#navbarSupportedContent"                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle                navigation">
                       <span className="navbar-toggler-icon"></span>
                      </button>
         
        
      <ul class="navbar-nav">
        
          <li className="nav-item">
            <a className="nav-link btn " data-toggle="modal" data-target="#loginModal" id="signIn" onClick={() => this.setState({ sign: true })}>Log In </a>
          </li> 
           
           
           
            <li className="nav-item">
            <a className=" nav-link btn" data-toggle="modal" data-target="#loginModal" id="create" onClick={() => this.setState({ create: true })}>Sign Up</a>
           
          </li>
        </ul>    

       
        
      </div></div>
    </nav>

    <Modal show={this.state.sign} hide={this.hideModal}/>

   < Modal create={this.state.create} gone={this.hideRegister}/>
     </>
                           
                           
                           
                             
//      <Form inline className= "mb-0 mx-auto" className = "mb-5" >
//     <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
//     <Button type="submit">Submit</Button>
//   </Form> 
  
    
   

  
              
    );
  }
}

export default NavBar;

