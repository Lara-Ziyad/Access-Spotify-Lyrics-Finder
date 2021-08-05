import React, { Component } from 'react';
//*** 13.a ***
import Spinner from '../layout/spinner';
//**** 9.a **** import consumer 
import { Consumer } from '../../context.js';

import Track from './track'

import { Row} from "react-bootstrap";

import Search from '../tracks/search.js'

import backGround from '../../pic/backGround.jpeg'
class TracksContainer extends Component {
    render()
   
    
    {
        return (
            //**** 9.b **** return consumer 
            <Consumer>

             {/* **** 9.c **** Pass the state */} 
             {/* we have access to the state now and we can check it */} 
              {value => {
             
                  console.log(value);
             //*** 13.b *** 
                  if (value.trackList === undefined || value.trackList.length === 0) {
                    return <Spinner />;
                  } else {
                    return ( 
                      <div style={{   backgroundImage: `url(${backGround})` }}>
                      
                      <div className= "  d-flex flex-column align-items-center" style={{ background: `rgba(0, 10, 30, 0.8)` }}  >
                   <Search/> 
                   
                   <h2 className="text-center h3  text-light pt-5 ">{value.heading}</h2>
                    
                    
                    <Row className= "p-4 justify-content-center">
                    { 
                    value.trackList.slice(0,10).map ((item, index) =>
                    (<Track track = {item.track }
                             index = {index}
                             key = {item.track.track_id}/> ))
                    }
                  </Row> 

                   <div >

                  </div>
                    {/* { 
                    value.trackList.slice(4,8).map (item =>
                    (<SecTrack artistName = {item.track.artist_name}
                               key = {item.track.track_id}
                     /> ))
                    } */}
                   </div> 
                   
                   </div>)
                  }
                  
              } }

            </Consumer>
           
        );
    }
}

export default TracksContainer  ;

