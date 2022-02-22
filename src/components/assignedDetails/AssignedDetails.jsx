import './assignedDetails.css';

export default function AssignedDetails() {
  return (
    <div className="detailWrapper">
      <h4>Реквизиты присвоенные отправителем</h4>
      <hr className="detailLine" />
      <form className="detailTitle">
        <label>Корреспондент (внеш):</label>
        <div className="inputBtn">
          <input className="detailInput" type="number" placeholder="0544652" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Исх. номер и дата:</label>
        <div className="inputBtn">
          <input
            className="detailInput"
            type="text"
            placeholder="от 17.08.2021 01:58"
          />
        </div>
      </form>
      <form className="detailTitle">
        <label>Автор:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
          <button className="userBtn"></button>
        </div>
      </form>
      <form className="detailTitle">
        <label>Исполнитель:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
          <button className="userBtn2"></button>
        </div>
      </form>
      <form className="detailTitle">
        <label>Язык документа:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
        </div>
      </form>
    </div>
  );
 
}
