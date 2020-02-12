import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Chart from './components/Chart'
import BrowseButton from './components/BrowseButton'
import cogoToast from 'cogo-toast';
import './App.scss';
import DashboardButton from './components/DashboardButton';


class App extends Component{

  state = {
    loggedIn: false
  }


  changeLoginState = () => {
    this.state.loggedIn ? cogoToast.success("logged in") : cogoToast.success("logged out")
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render(){
    return (
      <Router>
        
      {this.state.loggedIn ? <Redirect to="/" /> : <Redirect to="/dashboard" />}

      <Switch>
        <Route path="/dashboard">
              <div className="dashboard">
                <div className='dashboard-header'>
                  <BrowseButton />
                  <Logout logout={this.changeLoginState}/>
                </div>
              {/* <Chart /> */}
              </div>
        </Route>
        <Route path="/browse">
          <DashboardButton />
        </Route>
        <Route path="/">
        <div className="App">
        <Header/>
          <div className='auth-forms-container'>
          <Login login={this.changeLoginState}/>
          <Signup />
          </div>
          <div className='chart-div' >
            <Chart />
          </div>
          </div>
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
