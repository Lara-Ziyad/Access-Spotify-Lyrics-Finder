import React from 'react';
import { Card  } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Track = (props) => {

  console.log(props)
   const  {track, index } = props
    return (
        <div >
            <Card
    bg="dark"
   
    text='light' 
    style={{ width: '20vw' }}
    className="m-3"
  >
    <Card.Header>
     <p className="h5 " style = {{ color:"#d29034"}}> {index+1} . {track.artist_name}</p> 
        
        </Card.Header>
    <Card.Body>
      <Card.Title className=" h6"> <i className="fas fa-music mr-2  " style = {{fontSize:"1.rem", color:"#20639B"}}/>{''} Track
      
            : {track.track_name}
            <br />
            </Card.Title>
      <Card.Text className=" h6">
      <i className="fas fa-compact-disc mr-2" style = {{fontSize:"1.1rem", color:"#a4dfde"}} /> Album
            
            : {track.album_name}
      </Card.Text>
    </Card.Body>

    {/* //*** 2.2.a create link for lyrics pages */}
    <Link
            to={`/lyrics/track/${track.track_id}`}
            className="btn btn-block"
            style = {{ backgroundColor:"#000000", color:"#20639B"}}
            
          >
            <strong> View Lyrics</strong> <i className="fas fa-chevron-right" />
          </Link>
  </Card>

</div>
       
    )
}
export default Track