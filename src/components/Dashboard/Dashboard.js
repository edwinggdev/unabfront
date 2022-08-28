import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Menu from '../Dashboard/Menu';
import Cards from '../Dashboard/Cards';
import Users from '../Users/Users';
import Game_create from '../Games/Create';
import Games from '../Games/Games';
import Teams from '../Teams/Teams';
import Team_Create from '../Teams/Create';
export default function Dashboard() {
  return(
    <>
      
        <Router>
          <Menu/>
      
          <div className="row my-5">
            <div className="container">
              <Switch>
                <Route path='/' exact component={Cards}/>
                <Route path='/Users' exact component={Users}/>
                <Route path='/Game_create' exact component={Game_create}/>
                <Route path='/Games' exact component={Games}/>
                <Route path='/Teams' exact component={Teams}/>
                <Route path='/Team_Create' exact component={Team_Create}/>
              </Switch>
            </div>
          
          </div>
        </Router>
        
      
    </>
    
    
   
  );
}