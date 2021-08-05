import React from 'react';
import { form } from "react-bootstrap";

export const Modal = ({ hide, show, create, gone }) => {
  return (
      <>
      <div className= "d-flex flex-column align-items-center">
          <div className="modal-wrappe m-5 " id="loginModal" style={{width: '60vw', fontSize:"1.1rem", color:"#808080", backgroundColor:"black",
            transform: show ? 'translateY(0vh)' : 'translate (400px)',
            display: show ? 'inline' : 'none',
            opacity: show ? '10' : '0'
      }}>


     <div style = {{fontSize:"1.1rem", color:"white"}} className="modal-header">
        <p >Welcome To Our Site</p>
        <span onClick={hide} className="close-modal-btn">x</span>
      </div>
      <div >
        <div className="modal-body">
           <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" placeholder="Username" class="form-control"></input>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" placeholder="Password" class="form-control"></input>
              </div>
           </form>
        
        </div>
        <div className="modal-footer">
          <button onClick={hide} className="btn-cancel">Close</button>
        </div>
      </div>
 
</div>
</div>


<div className= "d-flex flex-column align-items-center">
<div className="modal-wrappe m-5 " id="loginModal" style={{width: '60vw', fontSize:"1.1rem", color:"#808080", backgroundColor:"black",
  transform: create? 'translateY(0vh)' : 'translate (400px)',
  display: create ? 'inline' : 'none',
  opacity: create ? '10' : '0'
}}>


<div style = {{fontSize:"1.1rem", color:"white"}} className="modal-header">
<p >Welcome To Our Site</p>
<span onClick={gone} className="close-modal-btn">x</span>
</div>
<div >
<div className="modal-body">
 <form>
 <div class="form-group">
      <label for="username">Username</label>
      <input type="text" placeholder="Username" class="form-control"></input>
    </div>
    <div class="form-group">
      <label for="username">Email</label>
      <input type="text" placeholder="Username" class="form-control"></input>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" placeholder="Password" class="form-control"></input>
    </div>
 </form>

</div>
<div className="modal-footer">
<button onClick={gone} className="btn-cancel">Close</button>
</div>
</div>

</div>
</div>
</>
  )
};