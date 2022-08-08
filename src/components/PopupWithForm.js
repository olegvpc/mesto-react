
// единый popup для Редактирования профиля, редактирования аватара, Добавления фото, подтверждения удаления фото
// NAME - add-photo, avatar, delete, profile
// FormName - add-photo, avatar, delete, profile
// Title - Редактировать профиль, Обновить аватар, Новое место, Вы уверены?
// buttonText - Сохранить (профили и аваар) Создать (add-photo)
function PopupWithForm({ isOpen, name, title, buttonText, onClose, children }) {
    return (
        <div className={`popup ${isOpen && 'popup_opened'}`}>
          <div className="popup__container">
            <h2 className="popup__title">{title}</h2>
            <form className="popup__form" id="popup-form-add-photo"
                  name={`form-${name}`} noValidate>
              <fieldset className="popup__fieldset">
                {children}
                <button className="popup__button transition"
                        name="submit"
                        type="submit">{buttonText}
                </button>
              </fieldset>
            </form>
            <button onClick={onClose}
                    aria-label="закрыть форму"
                    className="popup__btn-close transition"
                    id="popup-add-photo-btn-close" type="button"/>
          </div>
        </div>
    )
}

export default PopupWithForm