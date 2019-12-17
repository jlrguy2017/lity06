import React from 'react';

import NavBarContainer from '../nav_bar/nav_bar_container';
import SplashContainer from '../splash/splash_container';
import TrackShowContainer from '../tracks/track_show/track_show_container';
import DiscoverContainer from '../discover/discover_container';
// import LogoutNavBarContainer from '../nav_bar/logout_nav_bar_container';
// import UserShowContainer from '../user/user_show_container';

import {ProtectedRoute} from '../../util/route_util';

const App = (props) => {
  return (
    <div className="app-container">
      {props.currentUserId ?
      <NavBarContainer /> :
      <SplashContainer />}
      <div className="content">
        <ProtectedRoute exact path='/discover' component={DiscoverContainer} />
        <ProtectedRoute exact path='/' component={DiscoverContainer} />
        <ProtectedRoute exact path='/tracks/:trackId' component={TrackShowContainer} />
        {/* <ProtectedRoute exact path='/users/:userId' component={UserShowContainer} />
        <ProtectedRoute exact path='/logout' component={LogoutNavBarContainer} /> */}
      </div>
    </div>
  );
};

export default App;