import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './components/homepage/homepage';
import ShopPage from './components/shop/shop';
import SignInAndSignUp from './components/signinandsignup/signinandsignup';
import Header from './components/header/header';
import CheckOutPage from './components/checkout/checkout';

import { auth, createUserProfileDocument } from './firebase/firebase';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
class App extends React.Component {
  /* no need as we are now getting user from redux */
  /* constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  } */

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          {/* <Route exact path="/signin" component={SignInAndSignUp} /> */}
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
