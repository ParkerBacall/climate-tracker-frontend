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
import Dashboard from './components/Dashboard';
const renewable_xs =[]
const renewable_ys =[]
const xs=[]
const ys=[]

class App extends Component{

  state = {
    loggedIn: false,
    name: ""
  }


  componentDidMount(){
    fetch('http://localhost:3000/users',{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
      })
    .then(response => response.json())
    .then(user => this.setState({
      name: user.name
  }))

  fetch('./TempData.csv')
        .then(response => response.text())
        .then(data => data.split('\n').slice(1))
        .then(table => table.forEach(row =>{
            const column = row.split(',')
               xs.push(column[0])
               ys.push(parseFloat(column[1]) + 14)
           }))

    fetch('./renewableEnergy.csv')
    .then(response => response.text())
    .then(data => data.split('\n').slice(1))
    .then(table => table.forEach(row =>{
      const column = row.split(',')
      renewable_xs.push(column[5])
      renewable_ys.push(column[6])
      console.log(column[5])
    }))
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
                  <Dashboard name={this.state.name}/>
                  <Logout logout={this.changeLoginState}/>
                </div>
                <BrowseButton />
              </div>
        </Route>
        <Route path="/browse">
          <DashboardButton />
          <Chart name={'Renewable Energy Over Time'} xs={renewable_xs} ys={renewable_ys} />
        </Route>
        <Route path="/">
        <div className="App">
        <Header/>
          <div className='auth-forms-container'>
          <Login login={this.changeLoginState}/>
          <Signup />
          </div>
          <div className='chart-div' >
            <Chart name={ 'Combined Land-Surface Air and Sea-Surface Water Temperature in C° Over Time'} xs={xs} ys={ys} />
          </div>
          </div>
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
