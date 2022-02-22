import React from 'react'
import "./topbar.css"
import notification from "../img/notification.svg";
import avatar from "../img/avatar.png";
import down from "../img/down.svg";
import show from "../img/show.svg"; 
import settings from "../img/settings.svg"; 
import more from "../img/more.svg"; 

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <ul className="ulTopbar">
            <li>Почта</li>
          </ul>
          <ul className="ulTopbar">
            <li>Мои документы</li>
          </ul>
          <select className="documents">
            <option value="guides">Справочники</option>
          </select>
          <select className="documents">
            <option value="workflow">Документооборот</option>
            {/*  <option value="workflow">Входящий документ</option> */}
          </select>
          <ul className="ulTopbar">
            <li>Библиотека документов</li>
          </ul>
        </div>
        <div className="topRight">
          <img
            src={notification}
            alt="notification"
            className="notification"
          ></img>
          <div>
            <img src={avatar} alt="avatar" className="avatar"></img>
            <span className="avatarStatus"></span>
          </div>
          <div>
            <div className="userName">
              <span>Антон Смайлов</span>
            </div>
            <div className="userStatus">
              <span>user</span>
            </div>
          </div>
          <img className="down" src={down} alt="down"></img>
          <img src={show} alt="show" className="show"></img>
          <img src={settings} alt="settings" className="settings"></img>
          <img src={more} alt="more" className="more"></img>
        </div>
      </div>
    </div>
  );
}
