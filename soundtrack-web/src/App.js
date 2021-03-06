import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import EntriesContainer from './containers/EntriesContainer';
import WelcomeContainer from './containers/WelcomeContainer';
import EntryShow from './components/EntryShow'
import About from './components/About'
import { fetchEntries } from './actions/entryActions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SignupInput from './components/SignupInput'

import { Route, withRouter, Switch } from 'react-router-dom'

class App extends Component {

    componentDidMount = () => {
        this.props.fetchEntries()
    }

    

  render() {
// debugger
    return (
      
        <div className="app"> 
        <Switch>
            <Route exact path="/" component={WelcomeContainer} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignupInput} />
            <Route exact path="/entries" render={() => <EntriesContainer entries={this.props.entries} user={this.props.sessions}/> }/>
            {/* <Route exact path="/entries/new" render={(props)=> <EntryInput {...props}/>}/> */}
            <Route exact path={`/entries/:entryId`} render={routerProps => <EntryShow {...routerProps} entries={this.props.entries} />}/>
            <Route exact path="/logout" />
        </Switch>   
          
        </div>

    );
  }
}



const mapStateToProps = (state) => {
  //pass user login info to props here for entries container 
  return {entries: state.entries, 
          sessions: state.sessions[0]}
          
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchEntries}, dispatch)

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))


