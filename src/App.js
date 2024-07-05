import React from 'react'
import DataTable from '../src/components/DataTable.js';
import PersonalDetails from '../src/components/PersonalDetails.js'  
import {HashRouter, Route, Switch } from 'react-router-dom';

function App(){
  return(  
    <HashRouter>
      <Switch>
        <Route exact path='/'><PersonalDetails/></Route>
        <Route exact path='/datatable'><DataTable/></Route> 
      </Switch>
    </HashRouter>
  );
};
export default App;