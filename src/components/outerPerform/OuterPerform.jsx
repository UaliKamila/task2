
export default function OuterPerform() {
  return (
    <div className="detailWrapper">
      <h4>Внешние исполнители</h4>
      <hr className="detailLine" />
      <form className="detailTitle">
        <label>Отв. исп. внеш.:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="Выберите" />
          <button className="userBtn"></button>
        </div>
      </form>
      <form className="detailTitle">
        <label>Внеш. исполнители:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="Выберите" />
          <button className="userBtn2"></button>
        </div>
      </form>
    </div>
  );
}
