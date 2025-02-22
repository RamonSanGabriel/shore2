import css from './Main.module.css';
import Section1 from './Section/Section1.jsx';
import Section2 from './Section/Section2.jsx';

const Main = () => {
  return (
    <>
      <main className={css.main}>
        <h1 className={css.title}>Shore 2 Residences by KTSG</h1>
        <Section1 />
        <Section2 />
      </main>
    </>
  );
};

export default Main;
