import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import MainNvigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNvigation />
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
