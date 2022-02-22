
export default function IntControl() {
  return (
    <div className="detailWrapper" style={{ marginRight: "11px" }}>
      <h4>Внутренний контроль: не контрольный</h4>
      <hr className="detailLine" />
      <form className="detailTitle">
        <label>Поставил на контроль:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="Введите" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Периодичность контроля:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Дата пост. на контроль:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Перв. срок исполнения:</label>
        <div className="inputBtn">
          <input className="detailInput" type="number" placeholder="" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Текущий срок исполнения:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Факт. срок исполнения:</label>
        <div className="inputBtn">
          <input className="detailInput" type="number" placeholder="" />
        </div>
      </form>
    </div>
  );
}
