import React from 'react';
import './tweet.css';

const Tweet = (props) => {
  return(
    <div className="tweet">
      <div className="tweet__header"></div>
      <div className="tweet__content"></div>
      <div className="tweet__footer"></div>
    </div>
  )
}

export default Tweet;