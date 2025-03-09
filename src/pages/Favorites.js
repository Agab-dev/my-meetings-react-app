import { useContext } from "react";

import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites Page</h1>
      {favoritesCtx.favorites.length > 0 ? (
        <MeetupList meetups={favoritesCtx.favorites} />
      ) : (
        <p>You got no favorites yet. Start adding some?</p>
      )}
    </div>
  );
}

export default Favorites;
