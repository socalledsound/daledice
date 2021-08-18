import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';
import './App.css';
import RollDice from './Components/RollDice';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import Header from './Components/Header';

class App extends Component {
  
  /*
  state = {
    currentUser: null,
    userInfo: null
  }
  */

  setCurrentUser = ({username, email, password}) => {
    const { setUserInfo } = this.props;
    setUserInfo({ username, email, password });
    //username email and password
    //console.log(username);
    //this.setState({currentUser: username, userInfo: {username, email, password}})
  }

  render() {
      const { currentUser, userInfo } = this.props;
      return (
        <Fragment>
            <Header />
            <Switch>
              <Route exact path='/' render={() => <HomePage currentUser={currentUser} userInfo={userInfo} />} />
              <Route exact path='/login'
                render={() => currentUser ? (
                  <Route exact to='/game' render={() => <div className=""><RollDice className='rollDice'/></div>} />
                ) : (
                  <SignInPage setCurrentUser={this.setCurrentUser} />
                )}
              />
            </Switch>
            
        </Fragment>
        
      );
  };
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    userInfo: state.user.userInfo
  }
};

const mapDispatchToProps = (dispatch) => ({
    setUserInfo: (values) => dispatch(setUserInfo(values)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
