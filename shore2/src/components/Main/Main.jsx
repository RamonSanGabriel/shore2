import { main } from '../../data/main.js';
import css from './Main.module.css';

const Main = () => {
  // const { content, image } = main;

  return (
    <>
      <main className={css.main}>
        <h1 className={css.title}>Shore 2 Residences by KTSG</h1>
        {main.map(({ id, title, description, icon, route, content, image }) => (
          <ul>
            <div key={id} className={css.listContainer}>
              <li className={css.item}>
                <img className={css.facade} src={image} />
                <p className={css.content}>{content}</p>
              </li>
            </div>
          </ul>
        ))}
      </main>
    </>
  );
};

export default Main;
