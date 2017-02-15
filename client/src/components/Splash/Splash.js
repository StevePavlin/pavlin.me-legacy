import React, { Component } from 'react';
import {Navigation} from './Navigation';
import './Splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="splash-container">
          <Navigation />
          <div className="center-container">
            <h2 className="no-margin">Steve Pavlin</h2>
            <h3>Full-Stack Developer
              <span className="seperator">|</span>
              <span>Musician</span>
              <span className="seperator">|</span>
              <span>Dreamer</span>
            </h3>
            <hr />
            <div className="navigation-outlet">
              <h2 className="underlined navigation-page">Welcome!</h2>
              This site is a constant work in progress.
              <br />
              Check back soon for updates =)
            </div>
            <footer>
              <h3>Contact</h3>
              <div className="social-links">
                <a href="https://github.com/StevePavlin" target="_blank">
                  <i className="fa fa-github" />
                </a>
                <a href="https://ca.linkedin.com/in/stevepavlin" target="_blank">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="mailto:steve@pavlin.me" target="_blank">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
