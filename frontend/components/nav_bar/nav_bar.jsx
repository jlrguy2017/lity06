import React from 'react';
import DropdownContainer from './dropdowns/dropdown_container';
import Modal from '../session_forms/modal';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let userNavItem;
    let logo;
    const {logout, currentUser} = this.props;
    if (currentUser) {
      userNavItem = (<div className="user-nav-item">
                      <Link className="avatar" to={`/users/${currentUser.id}`}>
                          {currentUser.photoUrl ? 
                            <img src={currentUser.photoUrl} />
                            :
                            <img src={window.logo} />
                          }
                      </Link>
                      <Link className="user-profile-link" to={`/users/${currentUser.id}`}>
                        {currentUser.account_name}
                      </Link>
                    </div>);
      logo = (
        <Link className="logo" to="/discover">
          <img id="logo-img" src={window.logo} />
        </Link>
      );
    } else {
      userNavItem = <Modal />;
      logo = (
        <Link className="logo" to="/">
          <img id="logo-img" src={window.logo} />
        </Link>
      );
    }

    return (
      <div className="nav-bar-container">
        <nav className="nav-bar">
          {logo}
          <div className="nav-tabs">
            <Link className="nav-tab-wrapper" to="/discover">
              <p className="home-tab" >Home</p>
            </Link>
            <a className="nav-tab-wrapper" target="_blank" href="https://www.linkedin.com/in/goldbergmaurice/">
              <p className="linkedin-tab">LinkedIn</p>
            </a>
            <a className="nav-tab-wrapper" target="_blank" href="https://mauricegoldberg.dev" >
              <p className="portfolio-tab">Portfolio</p>
            </a>
          </div>
          <input id="search-bar"
            type="text"
            placeholder="Search bar coming soon..."
          />
          <Link to="/upload" className="upload-link">Upload</Link>
          {userNavItem}
          <div>
            {currentUser && <DropdownContainer
              className = "settings-dropdown"
              title="..."
              currentUser={currentUser}
              logout={logout}
            />}
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;