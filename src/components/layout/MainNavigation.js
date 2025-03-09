import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function Navbar() {
  const favoritesCtx = useContext(FavoritesContext);

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
          <li style={{ position: "relative" }}>
            <Link to={"/favorites"} className={styles.link}>
              My Favorites
              <span className={styles.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
