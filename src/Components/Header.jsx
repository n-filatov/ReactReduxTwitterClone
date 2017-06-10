import React from 'react';
import './header.css';
import './navigation-button.css';
import './search-from.css';

const Header = () => {
  const userAvatarUrl = 'https://pbs.twimg.com/profile_images/787155097159688192/iWYsZVlM_normal.jpg';
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__left-bar">
          <a href="" className="header__navigation-button navigation-button">
            <i className="navigation-button__icon navigation-button__icon--home glyphicon glyphicon-home"></i>
            <span className="navigation-button__text">Главная</span>
          </a>
          <a href="" className="header__navigation-button navigation-button">
            <i className="navigation-button__icon glyphicon glyphicon-bell"></i>
            <span className="navigation-button__text">Уведомления</span>
          </a>
          <a href="" className="header__navigation-button navigation-button">
            <i className="navigation-button__icon glyphicon glyphicon-envelope"></i>
            <span className="navigation-button__text">Сообщения</span>
          </a>
        </div>
        <i className="twitter-icon"></i>
        <div className="header__right-bar">
          <form action="/search" className="header__search-form search-from">
            <input type="text" className="search-form__input" placeholder="Поиск в Твиттере"/>
          </form>
          <img src={ userAvatarUrl } alt="" className="header__user-avatar"/>
          <button className="header__button">Твитнуть</button>
        </div>
      </div>
    </div>
  )
}

export default Header;