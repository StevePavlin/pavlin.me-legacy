import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">


        <a href="#" className="selected">
          <i className="fa fa-home" />
        </a>
      </div>
    );
  }
}
/*
 <a href="#">
 <i className="fa fa-bar-chart" />
 </a>
 <a href="#">
 <i className="fa fa-envelope" />
 </a>
 */
export default Navigation;
