import './paragraph.css'

export default function Paragraph() {
  return (
    <div className="paragraphWrapper">
      <div className="paragraphTitle">
        <h4>Пункт № к документу № от</h4>
        <h4>Не контрольный</h4>
      </div>
      <div className="paragrapNumber">
        <button className="BtnNumber">1</button>
        <button className="BtnNumber">2</button>
        <button className="BtnNumber">3</button>
        <button className="BtnNumber">4</button>
      </div>
    </div>
  );
}
