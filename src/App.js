import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Prabhakar uses a dockerised sample app and uses CI/CD of Travis and 
        </p>
        <p>
        uses CI/CD of Travis and deploys to elastic beanstalk for the first time
        </p>
        <p>
          In git feature branch feature/f1 is used which is then merged with master
        </p>
        <p>
         what a great experience !!!
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

export default App;
