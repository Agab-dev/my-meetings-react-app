import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function Navbar() {
  return (
    <header>
      <h1 className={styles.logo}>React Meetups</h1>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to={"/"} className={styles.link}>
              All Meetups
            </Link>
          </li>
          <li>
            <Link to={"/new-meetup"} className={styles.link}>
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to={"/favorites"} className={styles.link}>
              My Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
