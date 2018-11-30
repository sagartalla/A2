import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { actionCreators, selectors } from '../store';
import Trailers from '../components/Trailers';
import Nav from '../components/Nav';

import '../layout/styles.styl';

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req }) {
    const isServer = !!req;
    await reduxStore.dispatch(actionCreators.fetchTrailers());
    return {};
  }

  componentDidMount () {
    const {dispatch} = this.props
    // this.timer = startClock(dispatch)
  }

  render () {
    return (
      <Fragment>
        <Nav />
        <Trailers />
      </Fragment>
    )
  }
}

export default connect()(Index)
