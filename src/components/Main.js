import {useEffect, useState} from "react";
import Card from "../components/Card.js"
import api from "../utils/api.js";


function Main (props) {
    // добавляем хуки стейтов
    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar]= useState("");
    // Стейт для карточки
    const [cards, setCards] = useState([])

    // добавляем хуки side-effects
    useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserName(userData.name);
                // debugger;
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
             .catch((err) => {
                console.log(`ошибка получения данных по API ${err}`);
            })
    }, []) // не смотря на то что зависимости указаны нулевые, запрос по api (судя по Терминалу)
    // проходит два раза за данными пользователя - а затем два раза за данными карты. Можно сделать один -
    // если убрать   </React.StrictMode>

    useEffect(() => {
        api.getInitialCards()
            .then((cardsDataList) => {
                setCards(cardsDataList);
            })
            .catch((err) => {
            console.log(`ошибка получения данных пользователя ${err}`);
            })
    }, [])

    return (
         <main className="page__main content">
          <section className="profile">
            <div className="profile__avatar-container">
              <img className="profile__avatar"
                   src={userAvatar}
                   // style={{ backgroundImage: `url(${imagePath})` }}
                   alt="Аватар профиля" />
                <button type="button"
                        className="profile__avatar-btn"
                        aria-label="Обновить аватар"
                        onClick={props.onEditAvatar}/>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              {/*Перенос текста должен превращаться в точки*/}
              <button className="profile__edit-btn transition"
                      title="Редактировать профиль"
                      type="button"
                      onClick={props.onEditProfile}/>
              <p className="profile__about">{userDescription}</p>
              {/*Перенос текста должен превращаться в точки*/}
            </div>
            <button className="profile__add-btn transition"
                    title="Добавить новую фотографию"
                    type="button"
                    onClick={props.onAddPlace}/>
          </section>

          <section className="cards">
            <ul className="cards__list">

                {cards.map((card, i) => (
                    <div key={i}>
                        <Card
                            card={card}
                            onCardClick={props.onCardClick}
                        />
                    </div>
                    ))
                }

            </ul>
          </section>

        </main>
    )
}

export default Main