import PopupWithForm from "./PopupWithForm";
import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useFormAndValidation from "../hooks/useFormAndValidation";

function EditProfilePopup ({ isOpen, isLoading, onClose, onUpdateUser }) {
    const {values, handleChange, errors, isValid, setValues, setIsValid} = useFormAndValidation()
    // Подписка на контекст
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        if(isOpen) {
            setValues({"name": currentUser.name, "about": currentUser.about})
        }
        setIsValid(false)
    }, [isOpen, currentUser.name, currentUser.about, setIsValid, setValues])
    // HELP ---------при первом рендиринге появляется ошибка в терминале
    // Warning: A component is changing an uncontrolled input to be controlled.
    //     This is likely caused by the value changing from undefined to a defined
    // value, which should not happen. Decide between using a controlled or
    // uncontrolled input element for the lifetime of the component.

    function handleSubmit(event) {
      // Запрещаем браузеру переходить по адресу формы
      event.preventDefault();

      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
        name: (isValid && values["name"]),
        about: (isValid && values["about"]),
      });
}

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            name="profile"
            disabled={!isValid}
            title="Редактировать профиль"
            buttonText={isLoading ? "Сохранение..." : "Сохранить"}
            onSubmit={handleSubmit}>

            <input className="popup__input"
               id='popup-name'
               maxLength="20" minLength="2"
               name="name"
               type="text"
               placeholder='Введите свое имя'
               autoComplete="off"
               value={values["name"]}
               onChange={handleChange}
               required
            />
            <span className={`popup__input-error ${!isValid && 'popup__error_visible'}`} >{errors["name"]}</span>
            <input className="popup__input"
               id='popup-about'
               maxLength="30" minLength="2"
               name="about"
               type="text"
               placeholder='Введите описание'
               autoComplete="off"
               value={values["about"]}
               onChange={handleChange}
               required
            />

            <span className={`popup__input-error ${!isValid && 'popup__error_visible'}`}>{errors["about"]}</span>
        </PopupWithForm>
    )
}

export default EditProfilePopup