import React from 'react';
import Modal from '../session_forms/modal';
import TrackPlayPauseContainer from '../tracks/track_play_pause_container';
import {Link} from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchTracks();
  }

  render() {
    const {
      ocean_of_tears,
      chrome_country,
      gone,
      control,
      stripped,
      flamboyant,
      last_bloom,
      touch,
      hand_crushed_by_a_mallet,
      mercy_street,
      running_up_that_hill,
      that_world
    } = this.props;

    if(!chrome_country) {
      return null;
    }

    return (
      <div className="splash-div">
        <div className="top-border"></div>
        <nav className="nav-bar">
          <figure className="logo">
            <img id="logo-img" src={window.logo} />
            <h1 id="site-title">SOUNDSHROUD</h1>
          </figure>
          <div className="splash-modal-btns">
            <Modal />
          </div>
        </nav>
        <div className="splash-content">
          <div className="splash-panel">
            <div className="splash-panel-wrapper">
              <div className="splash-panel-carousel">
                <figure className="panel-1">
                  <img id="panel-img-1" src={window.charli_xcx}/>
                  <h2 className="carousel-text">SoundShroud: the future of Dark-mode Audio Streaming</h2>
                </figure>
                <figure className="panel-2">
                  <img id="panel-img-2" src={window.oneohtrix}/>
                  <h2 className="carousel-text">What's next in music is first on SoundShroud</h2>
                </figure>
                <figure className="panel-3">
                  <img id="panel-img-3" src={window.bjork} />
                  <h2 className="carousel-text">Discover more with SoundShroud Go+</h2>
                  <h2></h2>
                </figure>
                <figure className="panel-1">
                  <img id="panel-img-1" src={window.charli_xcx} />
                  <h2 className="carousel-text">SoundShroud: the future of Dark-mode Audio Streaming</h2>
                </figure>
                <figure className="panel-2">
                  <img id="panel-img-2" src={window.oneohtrix} />
                  <h2 className="carousel-text">What's next in music is first on SoundShroud</h2>
                </figure>
              </div>
            </div>
          </div>
            <div className="search-bar-row">
              <input id="search-bar" type="text"
              placeholder="Search bar coming soon..." />
            </div>
            <h1 id="banner-text">Hear what's trending for free in the SoundShroud community</h1>
            <div id="trending-tracks">
            <div id="track-container">
              <img src={flamboyant.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${flamboyant.id}`}>
              </Link>
              <TrackPlayPauseContainer track={flamboyant} />

              <Link to={`/tracks/${flamboyant.id}`}>
                <p id="track-title">Flamboyant</p>
              </Link>

              <Link to={`/users/${flamboyant.account_id}`}>
                <p id="artist-name">Dorian Electra</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={ocean_of_tears.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${ocean_of_tears.id}`}>
              </Link>
              <TrackPlayPauseContainer track={ocean_of_tears} />

              <Link to={`/tracks/${ocean_of_tears.id}`}>
                <p id="track-title">Ocean of Tears</p>
              </Link>

              <Link to={`/users/${ocean_of_tears.account_id}`}>
                <p id="artist-name">Caroline Polachek</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={that_world.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${that_world.id}`}>
              </Link>
              <TrackPlayPauseContainer track={that_world} />
              <Link to={`/tracks/${that_world.id}`}>
                <p id="track-title">That World</p>
              </Link>

              <Link to={`/users/${that_world.account_id}`}>
                <p id="artist-name">Tim Hecker</p>
              </Link>

            </div>
            <div id="track-container">
              <img src={last_bloom.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${last_bloom.id}`}>
              </Link>
              <TrackPlayPauseContainer track={last_bloom} />

              <Link to={`/tracks/${last_bloom.id}`}>
                <p id="track-title">Last Bloom</p>
              </Link>

              <Link to={`/users/${last_bloom.account_id}`}>
                <p id="artist-name">Floating Points</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={chrome_country.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${chrome_country.id}`}>
              </Link>
              <TrackPlayPauseContainer track={chrome_country} />

              <Link to={`/tracks/${chrome_country.id}`}>
                <p id="track-title">Chrome Country</p>
              </Link>

              <Link to={`/users/${chrome_country.account_id}`}>
                <p id="artist-name">Oneohtrix Point Never</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={running_up_that_hill.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${running_up_that_hill.id}`}>
              </Link>
              <TrackPlayPauseContainer track={running_up_that_hill} />

              <Link to={`/tracks/${running_up_that_hill.id}`}>
                <p id="track-title">Running Up That Hill</p>
              </Link>

              <Link to={`/users/${running_up_that_hill.account_id}`}>
                <p id="artist-name">Kate Bush</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={stripped.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${stripped.id}`}>
              </Link>
              <TrackPlayPauseContainer track={stripped} />

              <Link to={`/tracks/${stripped.id}`}>
                <p id="track-title">Stripped</p>
              </Link>

              <Link to={`/users/${stripped.account_id}`}>
                <p id="artist-name">Depeche Mode</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={control.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${control.id}`}>
              </Link>
              <TrackPlayPauseContainer track={control} />

              <Link to={`/tracks/${control.id}`}>
                <p id="track-title">Control</p>
              </Link>

              <Link to={`/users/${control.account_id}`}>
                <p id="artist-name">Janet Jackson</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={mercy_street.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${mercy_street.id}`}>
              </Link>
              <TrackPlayPauseContainer track={mercy_street} />

              <Link to={`/tracks/${mercy_street.id}`}>
                <p id="track-title">Mercy Street</p>
              </Link>

              <Link to={`/users/${mercy_street.account_id}`}>
                <p id="artist-name">Peter Gabriel</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={hand_crushed_by_a_mallet.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${hand_crushed_by_a_mallet.id}`}>
              </Link>
              <TrackPlayPauseContainer track={hand_crushed_by_a_mallet} />

              <Link to={`/tracks/${hand_crushed_by_a_mallet.id}`}>
                <p id="track-title">Hand Crushed By A Mallet</p>
              </Link>

              <Link to={`/users/${hand_crushed_by_a_mallet.account_id}`}>
                <p id="artist-name">100 Gecs</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={gone.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${gone.id}`}>
              </Link>
              <TrackPlayPauseContainer track={gone} />

              <Link to={`/tracks/${gone.id}`}>
                <p id="track-title">Gone</p>
              </Link>

              <Link to={`/users/${gone.account_id}`}>
                <p id="artist-name">Charli XCX</p>
              </Link>
            </div>
            <div id="track-container">
              <img src={touch.photoUrl} />
              <Link id="play-pause-wrapper" to={`/tracks/${touch.id}`}>
              </Link>
              <TrackPlayPauseContainer track={touch} />

              <Link to={`/tracks/${touch.id}`}>
                <p id="track-title">touch</p>
              </Link>

              <Link to={`/users/${touch.account_id}`}>
                <p id="artist-name">Galen Tipton</p>
              </Link>
            </div>
            </div>
            <div id="splash-footer">
              <h2 id="thank-you-text">Thanks for listening. Now join in.</h2>
              <h3 id="thank-you-subheader">Save tracks, follow artists, and build playlists. All for free.</h3>
              <div id="sign-in-footer">
                <p id="small-text">Already have an account?</p>
                 <Modal />
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Splash;