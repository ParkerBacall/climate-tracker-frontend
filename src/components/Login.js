import React, { Component } from 'react'
import cogoToast from 'cogo-toast';
const Base_url = 'http://localhost:3000/'



export default class Login extends Component {

    state=  {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event =>{
        const userObj = {user: this.state}
        this.login(userObj)
    }

    run = (resault) => {
        localStorage.setItem('token', resault.token)
        localStorage.setItem('user', resault.user) 
        cogoToast.success("Logged in!")
        this.props.login()
    }

    login(user){
        fetch(Base_url + 'login', {
        method: 'Post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(resault => {
            return resault.error 
            ? cogoToast.error(resault.error)
            : this.run(resault)
        })
        
    }


    render(){
    return (
            <div className='auth-header'> 
                <h4>Log In</h4>
                <div className='log-in-forms'>
                    <input
                    className='log-in-input'
                    placeholder="Username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    ></input>
                    <input
                    className='log-in-input'
                    placeholder="Password"
                    type='password'
                    name="password"
                    username={this.state.password}
                    onChange={this.handleChange}
                    ></input>
                    <button onClick={this.handleSubmit}>Log in</button>
                </div>
        </div>
    )
    }
}
