
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/navbar'
import Home from './components/layout/home'
//**** 10.a **** import the Provider in {} because it's export not like a defult
import {Provider} from './context'
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import RedirectPage from './components/trackPlayer/components/RedirectPage.js';
import Dashboard from './components/trackPlayer/components/Dashboard.js';
import NotFoundPage from './components/trackPlayer/components/NotFoundPage.js';

//**** 2.3.a **** import lyrics
import Lyrics from './components/tracks/lyrics.js'


import React from 'react';
function App() {
 
  return (

    //**** 10.b **** wrap it with the Provider
    <Provider>
      
      <Router>
       <React.Fragment> 
      
   
    <NavBar />
  
    <div  >
  
    <div >
    <Switch>
      <Route exact path= "/" component = {Home}/>
      {/* //**** 2.3.b **** with router  */}
      <Route exact path= "/Lyrics/track/:id" component = {Lyrics}/>
      <Route path="/redirect" component={RedirectPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NotFoundPage} />
      
    </Switch>
  </div>
    </div>
   </React.Fragment> 
    </Router>
    </Provider>
  );
}

export default App;
