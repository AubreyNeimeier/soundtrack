import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { login } from '../actions/sessionActions';
// import EntryInput from '../components/EntryInput'

import LoginInput from '../components/LoginInput'

import About from '../components/About'
import { NavLink } from 'react-router-dom'
import SoundtrackArt from '../components/SoundtrackArt';



class WelcomeContainer extends Component{

// handleChange = () => {
//     this.props.fetchEntries()
// }


    render() {

        return (
            <div className="center-flex">
                <SoundtrackArt />
                <LoginInput login={this.props.login}/>  
                <NavLink to="/signup"> Sign Up </NavLink>
                
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    
    return {sessions: state.sessions}
    debugger
}

const mapDispatchToProps = dispatch => bindActionCreators({login}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer)
