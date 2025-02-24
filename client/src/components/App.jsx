import css from './App.module.css';
import Header from './Header/Header.jsx';
import Main from './Main/Main.jsx';

function App() {
  return (
    <div className={css.appWrapper}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
