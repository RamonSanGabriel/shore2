import { main } from '../../data/main.js';
import css from './Main.module.css';

const Main = () => {
  const { content, image } = main;

  return (
    <>
      <main className={css.main}>
        <h1 className={css.title}>Shore 2 Residences by KTSG</h1>
        <img className={css.facade} src={image} />
        <p className={css.content}>{content}</p>
      </main>
    </>
  );
};

export default Main;
