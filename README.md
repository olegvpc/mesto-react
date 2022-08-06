## Практическая работа: "Место" - миграция в React

### Сайт, где можно делиться фотографиями из путешествий



Императивный сайт размещен в Pages  (gh-pages)

[https://olegvpc.github.io/mesto/](https://olegvpc.github.io/mesto/)

### Технологии

* React  
`Create React App`, `useState`, `useEffect`


**Спринт 10:**
- разбиваем проект на компоненты - `App.js` , `Card.js` , `ImagePopup.js` ,
- `PopupWithForm.js` , `Main.js` , `Header.js` , `Footer.js`
- переходим от императивного к декларативному подходу
- портируем и подключаем модуль API с созданием экземпляра прямо в модуле
- используем стейты для первичной загрузки данных пользователя и сарточек
#### Что новое из замечиний ревьюера: 
* в компоненте можно передавать не только пропсы, но и прямой код HTML
```typescript jsx
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
                <p className='popup__input-error' id='avatar-link-error'/>
        </PopupWithForm>
```
* Можно сократить код, заменив тернарный оператор на опциональную цепочку, она останавливает вычисление если значение перед ?. равно null или undefined
src={props.card?.link}
```typescript jsx
Было:
<img alt={card ? card.name : ''} className="popup__photo" 
     src={card ? card.link : ''}/>             
Стало:
<img alt={card?.name} className="popup__photo" src={card?.link}/>
              <p className="popup__image-title">{card?.name}</p>
```
