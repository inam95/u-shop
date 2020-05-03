import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';
import Header from './components/header/header.comopent';

class App extends Component {
  state = {
    currentUser: null
  };

  unSubscribeAuth = null;

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount() {
    this.unSubscribeAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
