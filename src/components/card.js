function Card(props) {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <a href="">Read more</a>
      </div>
    </div>
  );
}

export default Card;
