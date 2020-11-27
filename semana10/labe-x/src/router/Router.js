import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage'
import LoginPage from '../pages/LoginPage'
import TripsPage from '../pages/tripsPage/TripsPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import ApplyToTripPage from '../pages/applyToTripPage/ApplyToTripPage'
import CreateTripPage from '../pages/createTripPage/CreateTripPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/trips">
          <TripsPage />
        </Route>
        <Route exact path="/trips/details/:id">
          <TripDetailsPage />
        </Route>
        <Route exact path="/trips/apply-to-trip/:id">
          <ApplyToTripPage />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
