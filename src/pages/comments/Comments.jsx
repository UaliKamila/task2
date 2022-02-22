import './comments.css'

export default function Comments() {
  return (
    <div>
      <div className="detailWrapper">
        <h4>Комментарии</h4>
        <hr className="detailLine" />
        <form className="comment">
          <label>Нет комментариев</label>
        </form>
      </div>
    </div>
  );
}
