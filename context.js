import React, { Component } from 'react';

//***** 11.b *****/ install axios and import it

import axios  from "axios";
const Context = React.createContext ();

const  reducer = (state, action) => {

switch (action.type){
case "SearchTracks":

return {
   ...state,  
   trackList: action.payload, 
   heading: 'Search Results'}

   defult:
   return state; 

}

}



export class Provider  extends Component {

    /*****8.g*****/ //just Example 
    // state = {
    //     trackList : [{
    //    tracks: {trackName:'abc'},
    //    tracks: {trackName:'123'}}],
    //   heading: 'Top 10 Tracks'
    //     }
        state = {
            trackList : [],
           
            heading: "Top 10 Tracks",

            dispatch : action => this.setState(state => reducer(state, action) )


            }
//***** 11.a *****/  componentDidCatch  
//***** 11.c *****/ fetch data in and remove the data which in the class as example -i commented the old one- 
// fetch data = https://api.musixmatch.com/ws/1.1/ (in API Method )+ chart.tracks.get?chart_name=top&page=1&page_size=5&country=us&f_has_lyrics=1 
// (in chart.tracks.get) + &apikey=${process.env.REACT_APP_MM_KEY} (my key which i put it in .env)
componentDidMount (){
  // const urlApi = 'apiKey=803cc4eab054b9ec34fbcfc9828eb981';
  // const url = 'http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=5&country=it&f_has_lyrics=1&'+urlApi;
  axios 
      .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=11&country=us&f_has_lyrics=1&apikey=903a47aa00a8ae3027094e2be4d8d337`)
      .then (result => {
        // console.log(result.data);

//***** 11.d *****/ set the state 
      this.setState({trackList: result.data.message.body.track_list})
      })
      .catch (err => console.log (err) );
  

}

    
    render() {
        const {state} = this
        
         return (
        //     /*****8.h*****/ or only state.trackList
           <Context.Provider value = {state}> 

              {this.props.children}
                
           </Context.Provider> 
        );
    }
}

//*****8.i*****/ i import it to our components to make to be able to access the state

  export const Consumer = Context.Consumer; 