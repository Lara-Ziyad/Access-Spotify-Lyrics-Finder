import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from "../../context";
class Search extends Component {
    state = {

trackTitle:[]

    }
    submitFinder = (dispatch, e) => {
        e.preventDefault();
        axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.trackTitle}&page_size=10 &page=1&s_track_rating=desc&apikey=903a47aa00a8ae3027094e2be4d8d337`
      )
      .then(res => {
        dispatch({

type: 'SearchTracks',
payload: res.data.message.body.track_list


        })
        this.setState ({trackTitle:['']})
      
      });

    }
    onChange = (e) => {
        this.setState ({[e.target.name]: e.target.value })
       
         
      }

      
    render() {
        return (
            <Consumer> 
                
                {value =>{
                    return (
                  
    <div className="rounded card card-body bg-dark border border-dark" 
         text='light' 
         style={{ width: '100vw',  background: `rgba(0, 10, 30)` }}
    >
         <h4 className="display-4 text-center pt-4"  
             style = {{ color:"#d29034"}}  > <strong>
         Music of Us</strong>
         </h4>
            <p className="lead text-center" 
               style = {{fontSize:"1.3rem", color:"#20639B"}}>
            <i 
               className="fas fa-music" />  Get the lyrics song That Suits Your Mood</p>


         <form onSubmit={this.submitFinder.bind (this, value.dispatch)} >

           
            <div className="form-group d-flex flex-column align-items-center ">
              <input  style={{ background: `rgba(0, 10, 30, 0.8)`, width: '40vw' }}
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            name="trackTitle"
            value={this.trackTitle}
            onChange={this.Change}
              />
           
            <button style={{ background: `rgba(0, 10, 30, 0.8)`, width: '40vw' }} className="btn btn-primary btn-lg mb-5 mt-3" type="submit">
             Get Track Lyrics
            </button> </div>
          </form>
  </div>
)
   }} 
            </Consumer>
          
        );
    }
}

export default Search;