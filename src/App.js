import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { UserList } from './UserList';
import { PostList } from './PostList';

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

const posts = [{
    Date: "21st MAY 2018",
    Title: "this is the first article",
    Author: "By Leah",
    Text: "Bacon ipsum dolor amet pork chop sirloin landjaeger rump cow short ribs. Tri-tip sirloin spare ribs pork corned beef, pancetta rump pork chop."
},{
    Date: "19th MAY 2018",
    Title: "this is the second article",
    Author: "By Leah",
    Text: "this is the second blog about engineering"
},{
    Date: "13th MAY 2018",
    Title: "This is the third article",
    Author:"By Leah",
    Text: "this is the 3rd blog about engineering "
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
        <PostList posts={posts} />
      </div>
    );
  }
}

export default App;
