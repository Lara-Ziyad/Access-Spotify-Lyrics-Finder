
//*** 2.2.a create the component */

import React, { Component } from 'react';
import axios from 'axios'
// import Spinner from '../layout/spinner'
import { Link } from 'react-router-dom';
// import Moment from "react-moment";
class Lyrics extends Component {
//*** 2.2.b create the state  */
    state = {

        track:{},
        lyrics:{}
        
       
    };
//*** 2.2.c *** fetch data after import axios */
//*** 2.2.d *** change the id to be dynamic using match as i pass the id in the link   */
    componentDidAmount(){ 
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id
          } `)
        .then (result => {
          console.log(result.data);

//*** 2.2.e *** set the state   */
          this.setState({lyrics: result.data.message.body.lyrics
        
        })
 //*** 2.2.f *** fetch the track data  */
        return axios.get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
             this.props.match.params.id
            }&apikey=803cc4eab054b9ec34fbcfc9828eb981`
                    
          ); 
        })
          .then (result => {

          this.setState({lyrics: result.data.message.body.lyrics })
        })
        .catch (err => console.log (err) );
    }
    
    render()
   
    
    {
        console.log (this.state.track)
        console.log (this.props.match)
         //*** 2.2.g *** load the snipper and import it  */

         //const{tarack, lyrics} = this.state
        // if (
        //     this.state.track === undefined ||
        //     this.state.lyrics === undefined ||
        //     // object an key value... key = proparties
        //     Object.keys(this.state.track).length === 0 ||
        //     Object.keys(this.state.lyrics).length === 0
        //   ){
        //   return <Spinner />;
      
        // } else {
            return (
                 //*** 2.2.h ***  create our page design   */
                <>
          


         <div className="card">
         <h5 className="card-header">
         Track Name {/* {this.track.track.track_name} by{" "} */}
            <span className="text-secondary">{/*{this.track.track.artist_name}*/}</span> 
         </h5>
         <div className="card-body">
           <p className="card-text">
           lyrics {/* {this.lyrics.lyrics.lyrics_body} */}
           </p>
         </div>
       </div>

       <ul className="list-group mt-3" style = {{paddingBottom :"57rem"}}>
         <li className="list-group-item">
           <strong>Album </strong>: 
           {/* {this.track.track.album_id} */}
         </li>
         <li className="list-group-item">
            <strong>Music Genra Name:</strong>
            </li>

            <li className="list-group-item">
            <strong>Explicit Words</strong>
            </li>

            <li className="list-group-item">
            <strong>Release Date</strong>
            </li>
   <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
            {/* //*** 2.2.i ***  create some condtions   */ }

            {/* <li className="list-group-item">
            <strong>Song Genre</strong>:{" "}
            {track.track.primary_genres.music_genre_list.length === 0
              ? "NO GENRE AVAILABLE"
              : track.track.primary_genres.music_genre_list[0].music_genre
                  .music_genre_name}
          </li>


          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.track.explicit === 0 ? "No" : "Yes"}
          </li> */}



            {/* //*** 2.2.j ***  install moment   */}
            {/* <li className="list-group-item">
            <strong>Release Date</strong>:{" "}
            <Moment format="MM/DD/YYYY">
              Date
            </Moment>
          </li> */}


        
        
       </ul>
       </>)
    
}}

export default Lyrics;