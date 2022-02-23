import "./regDetails.css";

export default function RegDetails() {
  return (
    <div className="formWrapper" style={{ marginRight: "11px" }}>
      <h4>Регистрационные реквизиты</h4>
      <hr className="formLine" />
      <form className="formTitle">
        <label>
          Номер пункта: <span color="">*</span>
        </label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="Введите" />
        </div>
      </form>
      <form className="formTitle">
        <label>Вид документа:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
          <button className="folderBtn"></button>
        </div>
      </form>
      <form className="formTitle">
        <label>Характер вопроса:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
          <button className="folderBtn"></button>
        </div>
      </form>
      <form className="formTitle">
        <label>Директивный номер КПМ:</label>
        <div className="inputBtn">
          <input className="formInput" type="number" placeholder="" />
        </div>
      </form>
    </div>
  );
}
