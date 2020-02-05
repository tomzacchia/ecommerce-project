import React from 'react';
import './App.styles.scss';

import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop.component';
import Header from './components/header/hader.component';
import Authentication from './pages/authentication/authentication.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    // check if user is signed in by O-Auth, if they are
    // set currentUser in state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async authenticatedUser => {
        if (!authenticatedUser) {
          this.setState({ currentUser: null });
          return;
        }

        const userRef = await createUserProfileDocument(authenticatedUser);

        // get the current realtime data for the reference
        this.updateCurrentUserInState(userRef);
      }
    );
  }

  componentWillUnmount() {
    // calling unsubscribeFromAuth will unsubscribe from updates from auth server
    this.unsubscribeFromAuth();
  }

  updateCurrentUserInState = userRef => {
    userRef.onSnapshot(snapshot => {
      const { id } = snapshot;
      const snapshotData = snapshot.data();
      this.setState({
        currentUser: {
          id,
          ...snapshotData
        }
      });
    });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/authentication" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
