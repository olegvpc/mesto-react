import PopupWithForm from "./PopupWithForm";
import { useEffect } from "react";
import useFormAndValidation from "../hooks/useFormAndValidation";

function AddPlacePopup ({ isOpen, isLoading, onClose, onAddPlace }) {
    const {values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation()

    useEffect(() => {
        setValues({"name": "", "link": ""})
        resetForm()
    }, [isOpen, resetForm, setValues])

    // useEffect(() => {
    //     const urlExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    //     const regex = new RegExp(urlExp)
    //     if(cardName.length >= 2 && regex.test(String(cardLink).toLowerCase())) {
    //         setFormValid(true)
    //     } else setFormValid(false)
    // }, [cardLink, cardName])

    function handleSubmit (event) {
        event.preventDefault();
        onAddPlace({
            name: (isValid && values["name"]),
            link: (isValid && values["link"])
        })
        resetForm()
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            name="add-photo"
            title="Новое место"
            buttonText={isLoading ? "Сохранение..." : "Создать"}
            disabled={!isValid}
            onSubmit={handleSubmit}>

            <input
              className="popup__input"
              id='popup-add-name-photo'
              maxLength="30" minLength="2"
              name="name"
              type="text"
              placeholder='Название'
              autoComplete="off"
              onChange={handleChange}
              value={values["name"] ? values["name"] : ""}
              required
            />
            <span className={`popup__input-error ${!isValid && 'popup__error_visible'}`}>{errors["name"]}</span>
            <input
                className="popup__input"
                id='link'
                maxLength="200" minLength="2"
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                autoComplete="off"
                // onChange={handleCardLink}
                onChange={handleChange}
                // value={cardLink}
                value={values["link"] ? values["link"] : ""}
                required
            />
            <span className={`popup__input-error ${!isValid && 'popup__error_visible'}`} id="link-error">{errors["link"]}</span>
        </PopupWithForm>
    )
}

export default AddPlacePopup