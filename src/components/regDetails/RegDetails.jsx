import "./regDetails.css";

export default function RegDetails() {
  return (
    <div className="detailWrapper" style={{ marginRight: "11px" }}>
      <h4>Регистрационные реквизиты</h4>
      <hr className="detailLine" />
      <form className="detailTitle">
        <label>
          Номер пункта: <span color="">*</span>
        </label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="Введите" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Вид документа:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
          <button className="folderBtn"></button>
        </div>
      </form>
      <form className="detailTitle">
        <label>Характер вопроса:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
          <button className="folderBtn2"></button>
        </div>
      </form>
      <form className="detailTitle">
        <label>Директивный номер КПМ:</label>
        <div className="inputBtn">
          <input className="detailInput" type="number" placeholder="" />
        </div>
      </form>
    </div>
  );
}
