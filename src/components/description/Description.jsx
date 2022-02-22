
export default function Description() {
  return (
    <div className="detailWrapper">
      <h4>Краткое содержание</h4>
      <hr className="detailLine" />
      <form className="detailTitle">
        <label>Краткое содержание документа:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Краткое содержание:*</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
        </div>
      </form>
    </div>
  );
}
