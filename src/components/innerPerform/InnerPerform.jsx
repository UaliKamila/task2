
export default function InnerPerform() {
  return (
    <div className="detailWrapper" style={{ marginRight: "11px" }}>
      <h4>Внутренние исполнители</h4>
      {/* <hr style={{ background: "5D5FEF" }} /> */}
      <hr className="detailLine" />
      <form className="detailTitle">
        <label>Отв. исп. внутр.:</label>
        <div className="inputBtn">
          <input
            className="detailInput"
            type="text"
            placeholder="Исабеков Н.Д. "
          />
          <button className="userBtn"></button>
        </div>
      </form>
      <form className="detailTitle">
        <label>Внутр. исполнители:*</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
          <button className="userBtn2"></button>
        </div>
      </form>
    </div>
  );
}
