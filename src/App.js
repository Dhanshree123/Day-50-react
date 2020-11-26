import './App.css';
import React from 'react'; 
import logo from './assets/logo.jpg'
import Home from './components/home/home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

class App extends React.Component{
  
  render(){
    return (
      <div className="app-main">
        <Router>
          <Switch>
            <Route path="">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
