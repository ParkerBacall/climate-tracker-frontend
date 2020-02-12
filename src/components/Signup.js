import React, {Component} from 'react'
const Base_url = 'http://localhost:3000/'

export default class Signup extends Component {


    state={
            name: "",
            username: "",
            email: "",
            password: ""
    }

    handleChange = event => {
        this.setState({
                [event.target.name]: event.target.value
        })
    }

    handleSubmit = event =>{
        const userObj = {user: this.state}
        this.createUser(userObj)
    }

    createUser(user){
        fetch(Base_url + 'users', {
        method: 'Post',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        })
    }


    render(){
    return (
        <div className='auth-header'> 
            <h4>Sign Up</h4>
        <div className='auth-forms'>
            <input
            placeholder="Name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            ></input>
            <input
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            ></input>
            <input
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            ></input>
            <input
            placeholder="Password"
            type='password'
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            ></input>
            <button onClick={this.handleSubmit}>Sign Up</button>
        </div>
        </div>
    )
    }
}
