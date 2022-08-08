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
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true)
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick (card) {
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    // setSelectedCard(null); // пока не разобрался - но при убирании popup картинка исчезает быстрее popupa
      // и крест закрытия popup медленно исчезает из середины экрана- HEEELP
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
            buttonText="Сохранить">
            <input className="popup__input"
               id='popup-name'
               maxLength="40" minLength="2"
               name="name"
               type="text"
               placeholder='Введите свое имя'
               autoComplete="off"
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
               required
            />
            <span className="popup__input-error"
                  id="popup-about-error">Error- text about</span>
        </PopupWithForm>

        <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name="add-photo"
            title="Новое место"
            buttonText="Создать">
            <input
              className="popup__input"
              id='popup-add-name-photo'
              maxLength="30" minLength="2"
              name="name"
              type="text"
              placeholder='Название'
              autoComplete="off"
              required
            />
            <span className="popup__input-error" id="popup-add-name-photo-error">Error-add-name</span>
            <input
                className="popup__input"
                id='link'
                maxLength="30" minLength="2"
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                autoComplete="off"
                required
            />
            <span className="popup__input-error" id="link-error">Error-add-link</span>
        </PopupWithForm>

        <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            >
                <input
                    className="popup__input"
                    name="avatar-link"
                    id="avatar-link"
                    placeholder="Ссылка на картинку аватара"
                    type="url"
                    autoComplete="off"
                    required
                />
            <span className='popup__input-error' id='avatar-link-error'>Error-avatar-link</span>
        </PopupWithForm>
        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            isOpen={isImagePopupOpen}/>

      </div>
      {/*Конец блока container*/}
    </div>

  );
}

export default App;
