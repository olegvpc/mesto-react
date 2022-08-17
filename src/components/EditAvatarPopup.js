import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect, useState } from "react";

function EditAvatarPopup ({ isOpen, isLoading, onClose, onUpdateAvatar }) {
    const avatarRef = useRef("")
    const [formValid, setFormValid] = useState(false)

    // // Стейт для анализа данных введенных в поле url для Аватара
    // const [urlAvatar, setUrlAvatar] = useState("")

    // Очистка поля для ввода url аватара после закрытия popup
    useEffect(() => {
        avatarRef.current.value = '';
        setFormValid(false)
    }, [isOpen])

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(avatarRef.current.value) // строка из Input
        onUpdateAvatar({
        avatar: avatarRef.current.value,
        });
    }

    function checkInput (e) {
        // setUrlAvatar(e.target.value)
        const urlExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
        const regex = new RegExp(urlExp)
        if (regex.test(String(e.target.value).toLowerCase())) {
            setFormValid(true)
        } else {setFormValid(false)}
    }

    return (
            <PopupWithForm
                isOpen={isOpen}
                onClose={onClose}
                name="avatar"
                title="Обновить аватар"
                disabled={!formValid}
                buttonText={isLoading ? "Сохранение..." : "Сохранить"}
                onSubmit={handleSubmit}>
                    <input
                        className="popup__input"
                        name="avatar-link"
                        id="avatar-link"
                        placeholder="Ссылка на картинку аватара"
                        type="url"
                        autoComplete="off"
                        onChange={checkInput}
                        ref={avatarRef}
                        required
                    />
                <span className='popup__input-error' id='avatar-link-error'>Error-avatar-link</span>
            </PopupWithForm>
    )
}

export default EditAvatarPopup