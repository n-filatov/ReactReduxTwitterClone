import React, {Component} from 'react';
import TwittsFeed from '../../Components/TweetsFeed/TweetsFeed';
import './home-page.css';

class HomePage extends Component {
  render() {
    const userAvatar = this.props.userAvatar;
    return(
      <div className="home-page">
        <div className="home-page__left-block"></div>
        <TwittsFeed userAvatar={ userAvatar }/>
        <div className="home-page__right-block"></div>
      </div>
    )
  }
}

export default HomePage;