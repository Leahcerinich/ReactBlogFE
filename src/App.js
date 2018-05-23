import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserList } from './UserList'

const users = [{
  Author: "leah",
  Date: "123456",
  Title: "First Blog",
  Text: "dksfghsdighdshgidssdkfds"
}, {
  Author: "Wayne",
  Date: "23456",
  Title: "Second blog",
  Text: "dfjsdgdljgiodfjhodfjhofjhiofjhofjh"
}]

class App extends Component {
  render() {
    return (
      <div className="Engineering Blog">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Blog</h1>
        </header>
        <p className="Engineering Blog">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserList users={users} />
      </div>
    );
  }
}

export default App;
