import React from 'react';
import './App.css';
import {Login} from './Login';
import {BrowserRouter as Router ,Route,Switch} from'react-router-dom'
import{Home} from'./Home'
function App() {
  return (
    <Router>
     <div className="App">
       <Switch>
         <Route exact path="/">
           <Login/>

         </Route>
         <Route exact path="/Home">
           <Home/>

         </Route>
       </Switch> 
     </div>

    </Router>
        
       
    
   
  );
}

export default App;
