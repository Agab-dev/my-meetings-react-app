import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/new-meetup" exact>
          <NewMeetupPage />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
