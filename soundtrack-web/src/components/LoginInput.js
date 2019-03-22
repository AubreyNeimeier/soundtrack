import React, { Component } from 'react';
import { connect } from 'react-redux'


 class LoginInput extends Component{
    state = {
        username: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.login(this.state)
        this.setState({
            [e.target.name]: ""
        })
    }
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label><input type="text"  name="username" value={this.state.username} onChange={this.handleChange}/><br></br>
                    <label>Password</label><input type="password"  name="password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }

}

export default connect()(LoginInput)
//the current state(form values) is sent to postEntry, which is an action we imported. the action posts data and generates data with the create action, and entries db is updated