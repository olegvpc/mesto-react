import {useState} from "react";
import Header from "./Header.js"
import Footer from "./Footer.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  // Стейты для popup (Принимает состояние - открыт-true/не открыт-false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  // Стейт для просмотра выбранной карточки
  const [selectedCard, setSelectedCard] = useState(null)


  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
    // const popupProfile = document.querySelector(".popup_type_profile");
    // popupProfile.classList.add("popup_opened")

  }
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
    // const popupAvatar = document.querySelector(".popup_type_avatar");
    // popupAvatar.classList.add("popup_opened")
  }
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
    // const popupAddPhoto = document.querySelector(".popup_type_add");
    // popupAddPhoto.classList.add("popup_opened")
  }
  function handleCardClick (card) {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }
  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false)
    // setSelectedCard(null); // пока не разобрался - но при убирании popup картинка исчезает быстрее popup
      // и крест закрытия popup медленно исчезает из середины экрана
  }
  return (
    <div className="page">
      <div className="page__content">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />

        <Footer />
        <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            name="profile"
            title="Редактировать профиль"
            children={
              <>
                  <input className="popup__input" id="popup-name" name="new-name"
                         type="text"
                         placeholder="Введите свое имя" autoComplete="off"
                         minLength="2" maxLength="40" required />
                  <span className="popup__input-error" id="popup-name-error">Error- text name</span>
                  <input className="popup__input" id="popup-about"
                         name="new-about" type="text"
                         placeholder="Введите описание" autoComplete="off"
                         minLength="2" maxLength="200" required />
                  <span className="popup__input-error"
                        id="popup-about-error">Error- text about</span>
                  <button className="popup__button transition" name="submit"
                          type="submit">Сохранить
                  </button>
              </>
            }
        />
        <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name="add-photo"
            title="Новое место"
            children={
              <>
                <input className="popup__input" id='popup-add-name-photo'
                       name="name" type="text"
                       placeholder="Название" autoComplete="off" minLength="2"
                       maxLength="30" required />
                <span className="popup__input-error"
                      id="popup-add-name-photo-error">Error-add-name</span>
                <input className="popup__input" id='link' name="link" type="url"
                       placeholder="Ссылка на картинку" autoComplete="off"
                       required />
                <span className="popup__input-error"
                      id="link-error">Error-add-link</span>
                <button className="popup__button transition" name="submit"
                        type="submit">Создать
                </button>
              </>
            }
        />
        <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="avatar"
            title="Обновить аватар"
            children={
              <>
                <input name="avatarLink" type="url" id="avatar-link"
                       className="popup__input"
                       placeholder="Ссылка на картинку аватара"
                       autoComplete="off" required/>
                <p className='popup__input-error' id='avatar-link-error'></p>
                <button className="popup__button transition"
                        type="submit">Сохранить
                </button>
              </>
            }
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen}/>
        {/*popup редактирования профиля*/}
      {/*  <div className="popup popup_type_profile">*/}
      {/*    <div className="popup__container">*/}
      {/*      <h2 className="popup__title">Редактировать профиль</h2>*/}
      {/*      <form className="popup__form" id="popup-form-profile"*/}
      {/*            name="form-change-name" noValidate>*/}
      {/*        <fieldset className="popup__fieldset">*/}
      {/*          <input className="popup__input" id="popup-name" name="new-name"*/}
      {/*                 type="text"*/}
      {/*                 placeholder="Введите свое имя" autoComplete="off"*/}
      {/*                 minLength="2" maxLength="40" required/>*/}
      {/*            <span className="popup__input-error" id="popup-name-error">Error- text name</span>*/}
      {/*            <input className="popup__input" id="popup-about"*/}
      {/*                   name="new-about" type="text"*/}
      {/*                   placeholder="Введите описание" autoComplete="off"*/}
      {/*                   minLength="2" maxLength="200" required/>*/}
      {/*              <span className="popup__input-error" id="popup-about-error">Error- text about</span>*/}
      {/*              <button className="popup__button transition" name="submit"*/}
      {/*                      type="submit">Сохранить*/}
      {/*              </button>*/}
      {/*        </fieldset>*/}
      {/*      </form>*/}
      {/*      <button aria-label="закрыть форму"*/}
      {/*              className="popup__btn-close transition"*/}
      {/*              id="popup-profile-btn-close" type="button"/>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  /!*popup добавления нового фото*!/*/}
      {/*  <div className="popup popup_type_add">*/}
      {/*    <div className="popup__container">*/}
      {/*      <h2 className="popup__title">Новое место</h2>*/}
      {/*      <form className="popup__form" id="popup-form-add-photo"*/}
      {/*            name="form-add-photo" noValidate>*/}
      {/*        <fieldset className="popup__fieldset">*/}
      {/*          <input className="popup__input" id='popup-add-name-photo'*/}
      {/*                 name="name" type="text"*/}
      {/*                 placeholder="Название" autoComplete="off" minLength="2"*/}
      {/*                 maxLength="30" required/>*/}
      {/*            <span className="popup__input-error"*/}
      {/*                  id="popup-add-name-photo-error">Error-add-name</span>*/}
      {/*            <input className="popup__input" id='link' name="link"*/}
      {/*                   type="url"*/}
      {/*                   placeholder="Ссылка на картинку" autoComplete="off"*/}
      {/*                   required/>*/}
      {/*              <span className="popup__input-error"*/}
      {/*                    id="link-error">Error-add-link</span>*/}
      {/*              <button className="popup__button transition" name="submit"*/}
      {/*                      type="submit">Создать*/}
      {/*              </button>*/}
      {/*        </fieldset>*/}
      {/*      </form>*/}
      {/*      <button aria-label="закрыть форму"*/}
      {/*              className="popup__btn-close transition"*/}
      {/*              id="popup-add-photo-btn-close" type="button"/>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  /!*popup открытия полноразмерного фото*!/*/}
      {/*  <div className="popup popup_show-img" data-type="image">*/}
      {/*    <figure className="popup__frame">*/}
      {/*      <button aria-label="закрыть форму"*/}
      {/*              className="popup__btn-close transition"*/}
      {/*              type="button"/>*/}
      {/*      <img alt="#" className="popup__photo" src="#"/>*/}
      {/*        <p className="popup__image-title"/>*/}
      {/*    </figure>*/}
      {/*  </div>*/}

      {/*  /!*popup подтверждения удаления фото*!/*/}
      {/*  <div className="popup popup_type_delete">*/}
      {/*    <div className="popup__container">*/}
      {/*      <h2 className="popup__title">Вы уверены?</h2>*/}
      {/*      <form className="popup__form" noValidate>*/}
      {/*        <fieldset className="popup__fieldset">*/}
      {/*          <button className="popup__button transition" type="submit">Да*/}
      {/*          </button>*/}
      {/*        </fieldset>*/}
      {/*      </form>*/}
      {/*      <button aria-label="закрыть форму" className="popup__btn-close"*/}
      {/*              type="reset"/>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  /!*popup изменения аватара*!/*/}
      {/*  <div className="popup popup_type_avatar">*/}
      {/*    <div className="popup__container">*/}
      {/*      <h2 className="popup__title">Обновить аватар</h2>*/}
      {/*      <form className="popup__form" id="popup-form-avatar" name="Avatar"*/}
      {/*            noValidate>*/}
      {/*        <fieldset className="popup__fieldset">*/}
      {/*          <input name="avatarLink" type="url" id="avatar-link"*/}
      {/*                 className="popup__input"*/}
      {/*                 placeholder="Ссылка на картинку аватара"*/}
      {/*                 autoComplete="off" required/>*/}
      {/*            <p className='popup__input-error' id='avatar-link-error'/>*/}
      {/*            <button className="popup__button transition"*/}
      {/*                    type="submit">Сохранить*/}
      {/*            </button>*/}
      {/*        </fieldset>*/}
      {/*      </form>*/}
      {/*      <button className="popup__btn-close page__button" type="button"*/}
      {/*              aria-label="Закрыть окно"/>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      </div>
      {/*Конец блока container*/}
    </div>

  );
}

export default App;
