
// единый popup для Редактирования профиля, редактирования аватара, Добавления фото, подтверждения удаления фото
// NAME - add-photo, avatar, delete, profile
// FormName - add-photo, avatar, delete, profile
// Title - Редактировать профиль, Обновить аватар, Новое место, Вы уверены?
function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
          <div className="popup__container">
            <h2 className="popup__title">{props.title}</h2>
            <form className="popup__form" id="popup-form-add-photo"
                  name={`form-${props.name}`} noValidate>
              <fieldset className="popup__fieldset">
                {props.children}
              </fieldset>
            </form>
            <button onClick={props.onClose}
                    aria-label="закрыть форму"
                    className="popup__btn-close transition"
                    id="popup-add-photo-btn-close" type="button"/>
          </div>
        </div>
    )
}

export default PopupWithForm