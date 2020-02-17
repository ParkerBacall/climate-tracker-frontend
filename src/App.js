import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Chart from './components/Chart'
import Browse from './components/Browse'
import SavedGraphs from './components/SavedGraphs'
import ImpactGraph from './components/ImpactGraph'
import './App.scss';
import Dashboard from './components/Dashboard';


class App extends Component{

  state = {
    loggedIn: false,
    graphs: [],
    user_graphs: [],
    user:{},
    xs: [],
    ys: []
  }

  getTempData = () => { 
    fetch('./TempData.csv')
    .then(response => response.text())
    .then(data => data.split('\n').slice(1))
    .then(table => table.forEach(row =>{
        const column = row.split(',')
        this.setState({
        xs: [...this.state.xs, column[0]],
        ys: [...this.state.ys, parseFloat(column[1]) + 14]
        })
      }))
      }

  componentDidMount(){ 
    console.log('mounted')
    fetch('http://localhost:3000/maps')
    .then(response => response.json())
    .then(maps => maps.map(map => { 
      this.setState({
      graphs: [...this.state.graphs, map]
      })
    })
    )
      this.checkLoggedIn()
      this.getTempData()
}

checkLoggedIn = () => {
  if (localStorage.token){ this.setState({
    loggedIn: true
  })
  fetch('http://localhost:3000/users',{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
      })
    .then(response => response.json())
    .then(user => this.setState({
       user,
       user_graphs: user.maps
    })
  )
}
}


  changeLoginState = () => {
    this.setState({
      loggedIn: true
    })
    fetch('http://localhost:3000/users',{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
        })
      .then(response => response.json())
      .then(user => this.setState({
         user,
         user_graphs: user.maps
      })
    )
    }

  addUserGraph = (graph) => {
    const graphNames = this.state.user_graphs.map(graph => graph.name)
    if (!graphNames.includes(graph.name)){
    this.setState({
      user_graphs: [...this.state.user_graphs, graph]
    })

    fetch('http://localhost:3000/user_graphs',{
      method: 'Post',
        headers:{
            'content-type': 'application/json'
        },
    body: JSON.stringify({graph: graph.id, user: this.state.user.id})
  })
}
}

  removeUserGraph = (graph) => {
    const new_user_graphs = this.state.user_graphs.filter(user_graph=>{
      return user_graph !== graph
    })
        this.setState({
      user_graphs: new_user_graphs
    })
    fetch('http://localhost:3000/user_graphs/' + graph.id,{
      method: 'DELETE',
  })
  }

  logout = () =>{
    localStorage.clear()
    this.setState({
      loggedIn: false,
      user:{},
      user_graphs: []
    })

  }


  render(){
    return (
      <Router>
        
      {!this.state.loggedIn ? <Redirect to="/login" /> : <Redirect to="/dashboard" />}

      <Switch>
        <Route path="/dashboard">
              <div className="dashboard">
                <div className='dashboard-header'>
                  <Dashboard name={this.state.user.name} graphs={this.state.graphs} />
                  <Logout logout={this.logout}/>
                </div>
                <ImpactGraph user={this.state.user} user_graphs={this.state.user_graphs}/>
                <SavedGraphs graphAction={this.removeUserGraph} graphs={this.state.user_graphs} />
              </div>
                <div className='browse-div' >
                  <Browse graphs={this.state.graphs} graphAction={this.addUserGraph}/>
              </div>
        </Route>
        <Route path="/login">
        <div className="App">
        <Header/>
          <div className='auth-forms-container'>
          <Login login={this.changeLoginState}/>
          <Signup />
          </div>
          <div className='chart-div' >
            <Chart name={ 'Combined Land-Surface Air and Sea-Surface Water Temperature in C° Over Time'} xs={this.state.xs} ys={this.state.ys} />
          </div>
          </div>
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
