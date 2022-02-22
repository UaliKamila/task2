import './button.css';

export default function Button() {
  return (
      <div>
        <button className="btn submit" type="submit">
          СОХРАНИТЬ
        </button>
        <button className="btn submit" type="reset">
          ОТМЕНИТЬ
        </button>
      </div>
  );
}
