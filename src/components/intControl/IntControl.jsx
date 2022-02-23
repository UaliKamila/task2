export default function IntControl() {
  return (
    <div className="formWrapper" style={{ marginRight: "11px" }}>
      <h4>Внутренний контроль: не контрольный</h4>
      <hr className="formLine" />
      <form className="formTitle">
        <label>Поставил на контроль:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="Введите" />
        </div>
      </form>
      <form className="formTitle">
        <label>Периодичность контроля:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="formTitle">
        <label>Дата пост. на контроль:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="formTitle">
        <label>Перв. срок исполнения:</label>
        <div className="inputBtn">
          <input className="formInput" type="number" placeholder="" />
        </div>
      </form>
      <form className="formTitle">
        <label>Текущий срок исполнения:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="formTitle">
        <label>Факт. срок исполнения:</label>
        <div className="inputBtn">
          <input className="formInput" type="number" placeholder="" />
        </div>
      </form>
    </div>
  );
}
