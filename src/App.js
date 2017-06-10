import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './icons.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';

class App extends Component {
  render() {
    const userAvatarImage = 'https://pbs.twimg.com/profile_images/787155097159688192/iWYsZVlM_normal.jpg';
    return (
      <div>
        <Header userAvatar={ userAvatarImage }/>
        <HomePage userAvatar={ userAvatarImage }/>
      </div>
    );
  }
}

export default App;
