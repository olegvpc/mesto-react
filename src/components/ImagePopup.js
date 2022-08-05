
function ImagePopup (props) {
    return (
        <div className={`popup popup_show-img ${props.isOpen ? 'popup_opened' : ''}`}>
          <figure className="popup__frame">
            <button aria-label="закрыть форму"
                    className="popup__btn-close transition"
                    type="button"
                    onClick={props.onClose}
            />
            <img alt={props.card ? props.card.name : ''} className="popup__photo" src={props.card ? props.card.link : ''}/>
              <p className="popup__image-title">{props.card ? props.card.name : ''}</p>
          </figure>
        </div>
    )
}

export default ImagePopup
