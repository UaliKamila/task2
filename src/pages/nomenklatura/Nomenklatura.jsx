
export default function Nomenklatura() {
  return (
    <div>
      <div className="formWrapper">
        <h4>Номенклатура</h4>
        <hr className="formLine" />
        <form className="formTitle">
          <label>Индекс дела:</label>
          <div className="inputBtn">
            <input className="formInput" type="text" placeholder="Введите" />
          </div>
        </form>
        <form className="formTitle">
          <label>Тип хранения:</label>
          <div className="inputBtn">
            <input className="formInput" type="text" placeholder="" />
          </div>
        </form>
        <form className="formTitle">
          <label>Срок хранения:</label>
          <div className="inputBtn">
            <input className="formInput" type="text" placeholder="" />
          </div>
        </form>
        <form className="formTitle">
          <label>Заголовок дела:</label>
          <div className="inputBtn">
            <input className="formInput" type="text" placeholder="" />
          </div>
        </form>
        <form className="formTitle">
          <label>Номер тома:</label>
          <div className="inputBtn">
            <input className="formInput" type="text" placeholder="" />
          </div>
        </form>
      </div>
    </div>
  );
}
