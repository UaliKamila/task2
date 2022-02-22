
export default function ExtControl() {
  return (
    <div className="detailWrapper">
      <h4>Внешний контроль: не контрольный</h4>
      <hr className="detailLine" />
      <form className="detailTitle">
        <label>Перв. срок исполнения:</label>
        <div className="inputBtn">
          <input className="detailInput" type="number" placeholder="" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Срок исполнения:</label>
        <div className="inputBtn">
          <input
            className="detailInput"
            type="text"
            placeholder=""
          />
        </div>
      </form>
    </div>
  );
}
