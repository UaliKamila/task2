
export default function Links() {
  return (
    <div className="formWrapper">
      <h4>Ссылки</h4>
      <hr className="formLine" />
      <form className="formTitle">
        <label>Является ответным на:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
          <button className="folderBtn"></button>
        </div>
      </form>
      <form className="formTitle">
        <label>Имеет ссылку с:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
        </div>
      </form>
    </div>
  );
}
