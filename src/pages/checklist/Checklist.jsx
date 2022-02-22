import ActionMenu from "../../components/action/ActionMenu";
import Button from "../../components/button/Button";
import ExtControl from "../../components/extControl/ExtControl";
import HistoryPerformance from "../../components/historyPerformance/HistoryPerformance";
import IntControl from "../../components/intControl/IntControl";
import TextPerformance from "../../components/textPerformance/TextPerformance";
import "./checklist.css";

export default function Checklist() {
  return (
    <div>
      <div className="checklist">
        <IntControl />
        <ExtControl />
      </div>
      <HistoryPerformance />
      <TextPerformance />
    </div>
  );
}
