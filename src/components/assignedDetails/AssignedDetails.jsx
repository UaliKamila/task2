import './assignedDetails.css';

export default function AssignedDetails() {
  return (
    <div className="formWrapper">
      <h4>Реквизиты присвоенные отправителем</h4>
      <hr className="formLine" />
      <form className="formTitle">
        <label>Корреспондент (внеш):</label>
        <div className="inputBtn">
          <input className="formInput" type="number" placeholder="0544652" />
        </div>
      </form>
      <form className="formTitle">
        <label>Исх. номер и дата:</label>
        <div className="inputBtn">
          <input
            className="formInput"
            type="text"
            placeholder="от 17.08.2021 01:58"
          />
        </div>
      </form>
      <form className="formTitle">
        <label>Автор:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
          <button className="userBtn"></button>
        </div>
      </form>
      <form className="formTitle">
        <label>Исполнитель:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
          <button className="userBtn"></button>
        </div>
      </form>
      <form className="formTitle">
        <label>Язык документа:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
        </div>
      </form>
    </div>
  );
}
