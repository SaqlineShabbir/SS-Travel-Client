
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddTours from './components/AddTours/AddTours';
import Home from './components/Home/Home';
import Tours from './components/Tours/Tours/Tours';
import Herder from './components/Shared/Header/Herder';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';

import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyTours from './components/MyTours/MyTours';
import ManageAllBooking from './components/ManageAllBooking/ManageAllBooking';

function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
        <Herder></Herder>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/addTours">
            <AddTours></AddTours>
          </Route>
          <Route path="/tours">
            <Tours></Tours>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <PrivateRoute path="/manageAllBooking">
            <ManageAllBooking></ManageAllBooking>
          </PrivateRoute>
          <PrivateRoute path="/myTours">
            <MyTours></MyTours>
          </PrivateRoute>
          <PrivateRoute path="/booking/:tourId">
            <Booking></Booking>
          </PrivateRoute>
          <Route exact path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
