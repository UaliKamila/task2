import { Link } from "react-router-dom";
import "./menubar.css"

export default function Menubar() {
  return (
    <div className="menubar">
      <ul className="menubarList">
        <Link to="/">
          <li className="menubarTitle">ОСНОВНАЯ ИНФОРМАЦИЯ</li>
        </Link>
        <Link to="/checklist">
          <li className="menubarTitle">ЛИСТ КОНТРОЛЯ</li>
        </Link>
        <Link to="/nomenklatura">
          <li className="menubarTitle">НОМЕНКЛАТУРА</li>
        </Link>
        <Link to="/progress">
          <li className="menubarTitle">ХОД ИСПОЛНЕНИЯ</li>
        </Link>
        <Link to="/comments">
          <li className="menubarTitle">КОММЕНТАРИИ</li>
        </Link>
      </ul>
    </div>
  );
}
