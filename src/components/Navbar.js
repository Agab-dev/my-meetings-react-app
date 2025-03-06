import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <li>
        <Link to={"/"}>All Meetups Page</Link>
      </li>
      <li>
        <Link to={"/new-meetup"}>New Meetup Page</Link>
      </li>
      <li>
        <Link to={"/favorites"}>Favorites Page</Link>
      </li>
    </div>
  );
}

export default Navbar;
