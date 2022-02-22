import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BaseInfo from "./pages/baseInfo/BaseInfo";
import Checklist from "./pages/checklist/Checklist";
import Nomenklatura from "./pages/nomenklatura/Nomenklatura";
import Comments from "./pages/comments/Comments";
import Progress from "./pages/progress/Progress";
import ActionMenu from "./components/action/ActionMenu";
import Paragraph from "./components/paragraph/Paragraph";
import Menubar from "./components/menubar/Menubar";
import Button from "./components/button/Button";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="workflow">
          <ActionMenu />
          <Paragraph />
          <Menubar />
          <Routes>
            <Route path="/" element={<BaseInfo />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/nomenklatura" element={<Nomenklatura />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
          <div style={{ paddingTop: "15px" }}>
            <Button />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
