import './index.scss';
import React, { Component } from 'react';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-page">
        This is Home Page!
      </div>
    );
  }
}
