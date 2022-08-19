import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from "react";
import useFormAndValidation from "../hooks/useFormAndValidation";


function EditAvatarPopup ({ isOpen, isLoading, onClose, onUpdateAvatar }) {
    const avatarRef = useRef("")
    // const [formValid, setFormValid] = useState(false)

    const {values, handleChange, errors, isValid, resetForm} = useFormAndValidation()

    // // Стейт для анализа данных введенных в поле url для Аватара
    // const [urlAvatar, setUrlAvatar] = useState("")

    // Очистка поля для ввода url аватара после закрытия popup
    useEffect(() => {
        avatarRef.current.value = '';
        resetForm()
    }, [isOpen, resetForm])

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(avatarRef.current.value) // строка из Input
        onUpdateAvatar({
        avatar: avatarRef.current.value,
        });
    }

    // function checkInput (e) {
    //     // setUrlAvatar(e.target.value)
    //     const urlExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    //     const regex = new RegExp(urlExp)
    //     if (regex.test(String(e.target.value).toLowerCase())) {
    //         setFormValid(true)
    //     } else {setFormValid(false)}
    // }

    return (
            <PopupWithForm
                isOpen={isOpen}
                onClose={onClose}
                name="avatar"
                title="Обновить аватар"
                disabled={!isValid}
                buttonText={isLoading ? "Сохранение..." : "Сохранить"}
                onSubmit={handleSubmit}>
                    <input
                        className="popup__input"
                        name="avatar-link"
                        id="avatar-link"
                        placeholder="Ссылка на картинку аватара"
                        type="url"
                        autoComplete="off"
                        onChange={handleChange}
                        values={values["avatar-link"] ? values["avatar-link"] : ""}
                        ref={avatarRef}
                        required
                    />
                <span className={`popup__input-error ${!isValid && 'popup__error_visible'}`}>{errors["avatar-link"]}</span>
            </PopupWithForm>
    )
}

export default EditAvatarPopup