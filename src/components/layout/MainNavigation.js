import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
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
