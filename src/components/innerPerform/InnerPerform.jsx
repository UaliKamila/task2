
export default function InnerPerform() {
  return (
    <div className="formWrapper" style={{ marginRight: "11px" }}>
      <h4>Внутренние исполнители</h4>
      {/* <hr style={{ background: "5D5FEF" }} /> */}
      <hr className="formLine" />
      <form className="formTitle">
        <label>Отв. исп. внутр.:</label>
        <div className="inputBtn">
          <input
            className="formInput"
            type="text"
            placeholder="Исабеков Н.Д. "
          />
          <button className="userBtn"></button>
        </div>
      </form>
      <form className="formTitle">
        <label>Внутр. исполнители:*</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
          <button className="userBtn"></button>
        </div>
      </form>
    </div>
  );
}
