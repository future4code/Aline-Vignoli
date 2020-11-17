import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'
import SignUpPage from '../components/SignUpPage'
import TripsPage from '../components/TripsPage'
import TripDetails from '../components/TripDetails'
import CreateTripForm from '../components/CreateTripForm'

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
        <Route exact path="/signup">
          <SignUpPage/>
        </Route>
        <Route exact path="/trips/list/:user">
          <TripsPage />
        </Route>
        <Route exact path="/trips/details">
          <TripDetails />
        </Route>
        <Route exact path="/trips/create">
          <CreateTripForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;