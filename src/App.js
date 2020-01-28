import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>

)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route  path="/hats" component={HatsPage}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
