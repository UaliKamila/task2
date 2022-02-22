
export default function Links() {
  return (
    <div className="detailWrapper">
      <h4>Ссылки</h4>
      <hr className="detailLine" />
      <form className="detailTitle">
        <label>Является ответным на:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
        </div>
      </form>
      <form className="detailTitle">
        <label>Имеет ссылку с:</label>
        <div className="inputBtn">
          <input className="detailInput" type="text" placeholder="" />
        </div>
      </form>
    </div>
  );
}
