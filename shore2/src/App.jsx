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
        <h1 className={css.title}>Shore 2 Residences by KTSG</h1>
        <p className={css.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          explicabo reprehenderit quo aut, a aperiam cum aliquid. Reprehenderit,
          fugit suscipit pariatur corporis consectetur aliquam voluptatum et
          optio temporibus nostrum, natus numquam voluptatibus quis? Commodi
          soluta, placeat ipsum tempora provident sapiente architecto assumenda
          excepturi suscipit natus facilis nam nesciunt. Et molestiae repellat
          magnam fugiat deserunt dicta illo dolor exercitationem placeat atque.
          Unde odit ab iusto natus officia. Eaque cupiditate, odit sunt dolores,
          consequatur consequuntur numquam accusantium blanditiis fugiat in
          ducimus ipsa dicta quas. Dolor fugit, consequuntur natus quas possimus
          optio quisquam sit necessitatibus cumque labore, similique error
          incidunt, rem veritatis laboriosam placeat ab modi harum rerum iure?
          Dolores corporis mollitia, autem sed facilis repudiandae quaerat rem
          id! Libero deserunt aut atque quos molestias perspiciatis dolor quas.
          Explicabo facere alias vero porro. Maiores, animi, ex vitae eos
          voluptatem reiciendis voluptatibus harum sint saepe explicabo aliquid
          similique temporibus fuga qui excepturi tempore recusandae sequi
          consectetur nam eligendi. Laboriosam, magni eveniet odio placeat iure
          ullam quasi possimus, recusandae dolores molestias enim? Ex sapiente
          modi fuga perferendis voluptatem rem, consequatur voluptatum dolore
          repellendus culpa atque obcaecati, expedita optio quidem amet
          temporibus consectetur laboriosam possimus, voluptates ab! Deserunt,
          laboriosam tenetur reprehenderit aliquam veritatis aspernatur rem eos!
          Hic vitae aperiam reiciendis sunt quam. Blanditiis officiis maiores
          nihil totam cum labore natus molestias dignissimos saepe nobis quidem,
          eligendi quaerat odit voluptatibus ipsam consequuntur magnam tenetur
          itaque nulla ad animi aspernatur modi asperiores sapiente. Iusto
          beatae cum qui voluptates facilis quas. Dolor aliquam reprehenderit
          culpa vero accusantium quod porro quis, esse quaerat dignissimos
          voluptate voluptas repellendus nostrum sit libero deleniti laborum?
          Molestiae quod labore dolores numquam sequi id corrupti voluptate
          quam. Esse beatae odio assumenda dignissimos enim perspiciatis soluta
          saepe iusto dolore id culpa illo voluptatem, quisquam omnis aspernatur
          numquam sed nihil velit minus facilis asperiores blanditiis excepturi
          commodi! Consequuntur incidunt enim fuga eligendi ipsum temporibus
          impedit vero eveniet tenetur, labore iure assumenda excepturi
          repellendus laudantium in laboriosam saepe aut, dignissimos dolore
          voluptate modi eius totam! Sit aliquam modi, quaerat accusamus,
          recusandae blanditiis vitae ut numquam tempore, veniam inventore
          exercitationem nisi. Consequuntur laborum nisi itaque voluptas ipsam
          voluptatibus corrupti totam quo fugiat inventore. Distinctio, quas
          obcaecati ut vel maxime minus reprehenderit repudiandae, dolores
          quibusdam veritatis asperiores nam nemo delectus. Consectetur itaque
          optio placeat vero illo quas ipsam magnam totam aliquam recusandae.
          Illum, quisquam et asperiores excepturi ut in possimus neque mollitia,
          quia quo, quas reiciendis maxime! Possimus ad voluptatem delectus, rem
          accusamus iste quidem hic similique quibusdam consequatur quos et
          natus corrupti animi minus assumenda, dolor aliquam! Quisquam modi
          culpa molestiae accusantium omnis temporibus ducimus cumque ut. Quos
          voluptates accusamus nisi laboriosam, laudantium tenetur! Deleniti
          obcaecati possimus, esse quidem cupiditate earum nihil amet officiis
          sunt minus porro, alias excepturi quibusdam perferendis
          exercitationem! Quo nemo hic officia quia obcaecati, totam, eum
          tempora tenetur eos earum architecto ipsum cupiditate deleniti
          excepturi corrupti. Voluptatibus, eos laboriosam praesentium quis,
          unde illum soluta quidem aperiam iusto sunt magnam saepe asperiores
          nesciunt pariatur, cumque quia! Temporibus fuga delectus dignissimos
          quo dolore, magnam corrupti esse animi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Placeat expedita blanditiis neque illum
          deserunt velit, ullam quos ut sapiente quae quibusdam repellat commodi
          in error, tempora voluptatem incidunt quas aperiam. natus corrupti
          animi minus assumenda, dolor aliquam! Quisquam modi culpa molestiae
          accusantium omnis temporibus ducimus cumque ut. Quos voluptates
          accusamus nisi laboriosam, laudantium tenetur! Deleniti obcaecati
          possimus, esse quidem cupiditate earum nihil amet officiis sunt minus
          porro, alias excepturi quibusdam perferendis exercitationem! Quo nemo
          hic officia quia obcaecati, totam, eum tempora tenetur eos earum
          architecto ipsum cupiditate deleniti excepturi corrupti. Voluptatibus,
          eos laboriosam praesentium quis, unde illum soluta quidem aperiam
          iusto sunt magnam saepe asperiores nesciunt pariatur, cumque quia!
          Temporibus fuga delectus dignissimos quo dolore, magnam corrupti esse
          animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Placeat expedita blanditiis neque illum deserunt velit, ullam quos ut
          sapiente quae quibusdam repellat commodi in error, tempora voluptatem
          incidunt quas aperiam.
        </p>
      </header>
    </div>
  );
}

export default App;
