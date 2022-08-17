import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function AddPlacePopup ({ isOpen, isLoading, onClose, onAddPlace }) {

    const [cardName, setCardName] = useState("")
    const [cardLink, setCardLink] = useState("")

    const [formValid, setFormValid] = useState(false)

    // очистка полей ввода
    useEffect(() => {
        setCardName('');
        setCardLink('');
        setFormValid(false)
    }, [isOpen])


    useEffect(() => {
        const urlExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
        const regex = new RegExp(urlExp)
        if(cardName.length >= 2 && regex.test(String(cardLink).toLowerCase())) {
            setFormValid(true)
        } else setFormValid(false)
    }, [cardLink, cardName])

    function handleCardName (event) {
        setCardName(event.target.value)
    }

    function handleCardLink (event) {
        setCardLink(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault();
        onAddPlace({
            name: cardName,
            link: cardLink,
        })
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            name="add-photo"
            title="Новое место"
            buttonText={isLoading ? "Сохранение..." : "Создать"}
            disabled={!formValid}
            onSubmit={handleSubmit}>

            <input
              className="popup__input"
              id='popup-add-name-photo'
              maxLength="30" minLength="2"
              name="name"
              type="text"
              placeholder='Название'
              autoComplete="off"
              onChange={handleCardName}
              value={cardName}
              required
            />
            <span className="popup__input-error" id="popup-add-name-photo-error">Error-add-name</span>
            <input
                className="popup__input"
                id='link'
                maxLength="200" minLength="2"
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                autoComplete="off"
                onChange={handleCardLink}
                value={cardLink}
                required
            />
            <span className="popup__input-error" id="link-error">Error-add-link</span>
        </PopupWithForm>
    )
}

export default AddPlacePopup