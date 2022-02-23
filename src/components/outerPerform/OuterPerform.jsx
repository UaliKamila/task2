
export default function OuterPerform() {
  return (
    <div className="formWrapper">
      <h4>Внешние исполнители</h4>
      <hr className="formLine" />
      <form className="formTitle">
        <label>Отв. исп. внеш.:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="Выберите" />
          <button className="userBtn"></button>
        </div>
      </form>
      <form className="formTitle">
        <label>Внеш. исполнители:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="Выберите" />
          <button className="userBtn"></button>
        </div>
      </form>
    </div>
  );
}
