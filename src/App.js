import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

import { auth , createUserProfileDocument } from './firebase/firebase.utils';

// Styles
import './App.scss';

// Component Imports
import Home from './components/Home/home.component';
import Shop from './components/Shop/shop.component';
import Header from './components/Header/header.component';
import SignInSignUp from './components/SignInSignUp/signInSignUp.component';

class App extends Component { 
 unSubscribeFromAuth = null;

  componentDidMount () {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            });
        })
      } else {
        this.props.setCurrentUser(userAuth);
      }
      
    })
  }

  componentWillUnmount () {
    this.unSubscribeFromAuth();
  }

  render () {
    return (
      <div className="App">
         <Header/>
         
        <Switch>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route
            path="/login"
            exact
            render={() => 
              this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp/>
            }
          />
          
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
