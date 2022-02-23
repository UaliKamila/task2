
export default function ExtControl() {
  return (
    <div className="formWrapper">
      <h4>Внешний контроль: не контрольный</h4>
      <hr className="formLine" />
      <form className="formTitle">
        <label>Перв. срок исполнения:</label>
        <div className="inputBtn">
          <input className="formInput" type="number" placeholder="" />
        </div>
      </form>
      <form className="formTitle">
        <label>Срок исполнения:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
        </div>
      </form>
    </div>
  );
}
