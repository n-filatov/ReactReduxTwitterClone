import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left-bar">
        <a href="" className="header__navigation-button navigation-button">
          <i className="navigation-button__icon"></i>
          <span className="navigation-button__text"></span>
        </a>
        <a href="" className="header__navigation-button navigation-button">
          <i className="navigation-button__icon"></i>
        </a>
        <a href="" className="header__navigation-button navigation-button">
          <i className="navigation-button__icon"></i>
          <span className="navigation-button__text"></span>
        </a>
      </div>
      <i className="twitter-icon"></i>
      <div className="header__right-bar"></div>
    </div>
  )
}

export default Header;