import './App.css';
import React from 'react'; 
import logo from './assets/logo.jpg'

class App extends React.Component{
  url = 'https://www.bridgelabz.com'
  constructor(){
    super()
    this.state = {
      userName: ''
    }
  }
  onClick =(Sevent) => {
    console.log('save button clicked', Sevent);
    window.open(this.url, "_blank");
  }
  onNameChange = (event) => {
    console.log('value is ',event.target.value);
    this.setState({userName: event.target.value})
  }
  render(){
    return (
      <>
      <div>
        <h1>{this.state.userName} from bridgelabz</h1>
        <img src={logo} onClick={this.onClick}
         alt="bl logo" />
      </div>
      <div>
        <input onChange={this.onNameChange}/>
      </div>
      </>
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
