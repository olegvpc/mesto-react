import logoPath from "../images/logo.svg";


function Header () {
    return (
        <header className="page__header header">
          <a href="#">
            <img className="header__logo transition" src={logoPath}
                 alt="логотип сайта Место" />
          </a>
        </header>
    );
}
export default Header;