import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form action="#" method="post">
        <p>Input: <input type="text" name="nm"/></p>
        <p><input type="submit" value="submit"/></p>
        </form>
        <p>Return from flask = {window.token}</p>
        <p>Return from python app = {window.processed_data}</p>
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
