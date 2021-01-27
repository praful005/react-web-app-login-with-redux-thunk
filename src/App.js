// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './layout/PrivateRoute';
import DashboardPage from './pages/Dashboard';
import InquiryPage from './pages/Inquiry';
import LoginPage from './pages/Login';
function App(props) {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <PrivateRoute exact path="/dashboard" component={DashboardPage} withHeader/>
        <PrivateRoute exact path="/inquiry" component={InquiryPage} withHeader/>
      </Switch>
    </Router>
  );
}


export default App;
