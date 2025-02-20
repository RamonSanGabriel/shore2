import viteLogo from '/vite.svg';
import { navLinks } from '../data/navLinks.js';
import css from './App.module.css';
import { NavLink } from 'react-router-dom';

function App() {
  const { path } = navLinks;
  return (
    <div className={css.appWrapper}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to={path}>
            <img className={css.logo} src={viteLogo} />
          </NavLink>
          <ul className={css.navList}>
            {navLinks.map(({ id, name, path }) => {
              return (
                <li className={css.navListItems} key={id}>
                  <NavLink className={css.navLink} to={path}>
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <h1 className={css.title}>Shore 2 Residences by Trevi Home</h1>
      </header>
    </div>
  );
}

export default App;
