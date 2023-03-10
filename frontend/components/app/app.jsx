import React from 'react';

import {Route} from 'react-router-dom';
import SplashContainer from '../splash/splash_container';
import TrackShowContainer from '../tracks/track_show/track_show_container';
import DiscoverContainer from '../discover/discover_container';
import UploadContainer from '../upload/upload_container';
import CurrentTrackPlayerContainer from '../tracks/current_track/current_track_container'
import LogoutNavBarContainer from '../nav_bar/logout_nav_bar_container';
import UserShowContainer from '../user/user_show_container';

import {ProtectedRoute} from '../../util/route_util';

import { createBrowserHistory } from 'history'
export const history = createBrowserHistory();
history.listen((location, action) => {
  window.scrollTo(0, 0)
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audioPlayer = React.createRef();
  }

  render() {
    return (
      <div className="app-container">
        <div className="content">
          <Route exact path='/' component={SplashContainer} />
          <Route exact path='/discover' component={DiscoverContainer} />
          <Route exact path='/tracks/:trackId' render={(props) => <TrackShowContainer audioPlayer={this.audioPlayer} />} />
          <Route exact path='/users/:userId' component={UserShowContainer}/>
          <ProtectedRoute exact path='/upload' component={UploadContainer} />
          <ProtectedRoute exact path='/logout' component={LogoutNavBarContainer} />
        </div>
        <CurrentTrackPlayerContainer audioPlayer={this.audioPlayer} />
      </div>
    );
  }
};

export default App;