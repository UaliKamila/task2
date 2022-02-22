
export default function Nomenklatura() {
  return (
    <div>
      <div className="detailWrapper">
        <h4>Номенклатура</h4>
        <hr className="detailLine" />
        <form className="detailTitle">
          <label>Индекс дела:</label>
          <div className="inputBtn">
            <input className="detailInput" type="text" placeholder="Введите" />
          </div>
        </form>
        <form className="detailTitle">
          <label>Тип хранения:</label>
          <div className="inputBtn">
            <input className="detailInput" type="text" placeholder="" />
          </div>
        </form>
        <form className="detailTitle">
          <label>Срок хранения:</label>
          <div className="inputBtn">
            <input className="detailInput" type="text" placeholder="" />
          </div>
        </form>
        <form className="detailTitle">
          <label>Заголовок дела:</label>
          <div className="inputBtn">
            <input className="detailInput" type="text" placeholder="" />
          </div>
        </form>
        <form className="detailTitle">
          <label>Номер тома:</label>
          <div className="inputBtn">
            <input className="detailInput" type="text" placeholder="" />
          </div>
        </form>
      </div>
    </div>
  );
}
