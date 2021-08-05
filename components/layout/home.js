import React from 'react';
import TracksContainer  from "../tracks/tracksContainer.js";
// import Search from '../tracks/search.js'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from '../trackPlayer/components/Header.js';
import { Redirect } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
const Home = (props) => {

  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;

  const handleLogin = () => {
    window.location = `http://localhost:3000/redirect#access_token=BQA4Y-o2kMSWjpRMD5y55f0nXLgt51kl4UAEbjNip3lIpz80uWJQJPoKPyD-CG2jjIdCjhfZKwfX5X6K7sssvoe20GJhhE7bHPaW1tictiMlkdzkWe2Pw3AnmojCy-NzVSOCj-aNtQ8ztTBYrCzRiBFGPtAn-I5g35An10&token_type=Bearer&expires_in=3600
    `;
  };
    
    return (
        <React.Fragment>

  
   <div className="login">
      <Header />
      <Button variant="info" type="submit" onClick={handleLogin}>
        Login to spotify
      </Button>
      </div>
               <TracksContainer />

        </React.Fragment>
    )
}
export default connect()(Home);