import Card from "./card";
import "../css/card.css"
function CardContainer(props) {
  return (
    <div className="cards-container">
      {props.cards.map((card) => (
        <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
      ))}
    </div>
  );
}

export default CardContainer;