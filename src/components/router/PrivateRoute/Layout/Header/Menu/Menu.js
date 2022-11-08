import {NavLink} from 'react-router-dom';
import {BOOKS, LOGOUT, BOOK_ADD} from 'config/router/paths';
import styles from './Menu.module.css';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={styles.navlink} to={BOOKS}>
            Libros
          </NavLink>
          <NavLink className={styles.navlink} to={BOOK_ADD}>
            Añadir libro
          </NavLink>
          <NavLink className={styles.navlink} to={LOGOUT}>
            Cerrar sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
