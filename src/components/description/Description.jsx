
export default function Description() {
  return (
    <div className="formWrapper">
      <h4>Краткое содержание</h4>
      <hr className="formLine" />
      <form className="formTitle">
        <label>Краткое содержание документа:</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="formTitle">
        <label>Краткое содержание:*</label>
        <div className="inputBtn">
          <input className="formInput" type="text" placeholder="" />
        </div>
      </form>
    </div>
  );
}
