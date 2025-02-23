import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import shoreLogo from '../../assets/Shore Residences Logo.avif';

const Header = () => {
  const { path } = navLinks;

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to={path}>
            <img className={css.logo} src={shoreLogo} />
          </NavLink>
          <ul className={css.navList}>
            {navLinks.map(({ id, name, path }) => {
              return (
                <li className={css.navListItems} key={id}>
                  <NavLink className={css.navLink} to={path}>
                    <p className={css.navListName}>{name}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
