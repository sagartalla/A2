import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class LazyImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    }
    this.setImg = this.setImg.bind(this);
  }

  setImg() {
    this.setState({
      src: this.props.imgSrc
    });
  }

  render() {
    return (
      <Waypoint onEnter={this.setImg}>
        <img src={this.state.src} />
      </Waypoint>
    );
  }
}

export default LazyImg;
