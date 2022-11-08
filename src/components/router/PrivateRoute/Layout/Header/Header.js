import {Link} from 'react-router-dom';
import {BOOKS} from 'config/router/paths';
import styles from './Header.module.css';
import Menu from './Menu';
import logo from './logo.png';

export default function Header() {
  return (
    <div>
      <header>
        <Link to={BOOKS}>
          <img src={logo} alt="Librarify" className={styles.logo} />
        </Link>
        <Menu />
      </header>
    </div>
  );
}
