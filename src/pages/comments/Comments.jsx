import './comments.css'

export default function Comments() {
  return (
    <div>
      <div className="formWrapper">
        <h4>Комментарии</h4>
        <hr className="formLine" />
        <form className="comment">
          <label>Нет комментариев</label>
        </form>
      </div>
    </div>
  );
}
