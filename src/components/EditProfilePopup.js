import PopupWithForm from "./PopupWithForm";
import {useState, useEffect, useContext} from "react";
import { CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup ({ isOpen, isLoading, onClose, onUpdateUser }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    // Подписка на контекст
    const currentUser = useContext(CurrentUserContext);
    const [formValid, setFormValid] = useState(false)

    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
   useEffect(() => {
       if (name !== currentUser.name || description !== currentUser.about) {
           setFormValid(true)
       }
    }, [currentUser.name, currentUser.about, description, name] )



    useEffect(() => {
        // если не ставить условие isOpen - в консоле предупреждение о возможных неуправляемых данных Input
        if (isOpen) {
            setName(currentUser.name);
            setDescription(currentUser.about);
            setFormValid(false)
            // console.count("render useEffect") // в deps нужно указывать примитивы
        }
    }, [isOpen, currentUser.name, currentUser.about])


    function handleChangeName (event) {
        setName(event.target.value)
    }

    function handleChangeDescription (event) {
        setDescription(event.target.value)
    }

    function handleSubmit(event) {
      // Запрещаем браузеру переходить по адресу формы
      event.preventDefault();

      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
        name: name,
        about: description,
      });
}

    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            name="profile"
            disabled={!formValid}
            title="Редактировать профиль"
            buttonText={isLoading ? "Сохранение..." : "Сохранить"}
            onSubmit={handleSubmit}>

            <input className="popup__input"
               id='popup-name'
               maxLength="40" minLength="2"
               name="name"
               type="text"
               placeholder='Введите свое имя'
               autoComplete="off"
               value={name}
               onChange={handleChangeName}
               required
            />
            <span className="popup__input-error" id="popup-name-error">Error- text name</span>
            <input className="popup__input"
               id='popup-about'
               maxLength="200" minLength="2"
               name="about"
               type="text"
               placeholder='Введите описание'
               autoComplete="off"
               value={description}
               onChange={handleChangeDescription}
               required
            />

            <span className="popup__input-error"
                  id="popup-about-error">Error- text about</span>
        </PopupWithForm>
    )
}

export default EditProfilePopup