
function Card (props) {

    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <li className="cards__item">
          <figure className="card">
            <button className="card__delete-btn transition"
                    type="button"/>
            <img className="card__image"
                 onClick={handleClick}
                 src={props.card.link}
                 alt={`Изображение на фото ${props.card.name}`}/>
            <div className="card__wrapper">
              <h2 className="card__title">{props.card.name}</h2>
              <div className="card__like-container">
                <button className="card__like transition"/>
                <span className="card__like-counter">{props.card.likes.length}</span>
              </div>
            </div>
          </figure>
        </li>
    )
}

export default Card