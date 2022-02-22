import "./sidebar.css"
import plus from "../img/plus.svg";
import blackShow from "../img/blackshow.svg";
import right from "../img/right.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarHeader">
          <h3>Входящие документы</h3>
          <div>
            <img src={plus} alt="plus" className="sidebarimg"></img>
            <img src={blackShow} alt="show" className="sidebarimg"></img>
          </div>
        </div>
        <hr className="sidebarLine"/>
        <div className="sidebarTitle">Все</div>
        <div>
          <ul className="sidebarMenu">
            <img src={right} alt="right"></img>
            <li className="sidebarList">По дате</li>
          </ul>
          <ul className="sidebarMenu">
            <img src={right} alt="right"></img>
            <li className="sidebarList">По статусу</li>
          </ul>
          <ul className="sidebarMenu">
            <img src={right} alt="right"></img>
            <li className="sidebarList">По отв. исполнителю</li>
          </ul>
          <ul className="sidebarMenu">
            <img src={right} alt="right"></img>
            <li className="sidebarList">По типу контроля</li>
          </ul>
          <ul className="sidebarMenu">
            <img src={right} alt="right"></img>
            <li className="sidebarList">По корреспонденту</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
