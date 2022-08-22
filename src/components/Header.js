import logoPath from "../images/logo.svg";


function Header () {
    return (
        <header className="page__header header">
          <div>
            <img className="header__logo transition" src={logoPath}
                 alt="логотип сайта Место" />
          </div>
        </header>
    );
}
export default Header;