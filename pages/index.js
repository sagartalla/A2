import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import { actionCreators, selectors } from '../store';
import Trailers from '../components/Trailers';
import Nav from '../components/Nav';
import Video from '../components/Video';

import styles from '../layout/styles.styl';

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req, query }) {
    const isServer = !!req;
    if(query.eventCode) {
      reduxStore.dispatch(actionCreators.setEventId(query.eventCode))
    }
    await reduxStore.dispatch(actionCreators.fetchTrailers());
    return {};
  }

  componentDidMount () {
    const { dispatch } = this.props;
  }

  render () {
    const { trailerDetails } = this.props;
    let bg;
    if(trailerDetails) {
      bg = {
        'background-image': `url('http://in.bmscdn.com/iedb/movies/images/website/poster/large/${trailerDetails.EventImageCode}.jpg')`
      }
    }

    return (
      <Fragment>
        {
          trailerDetails ?
            <div className={styles['bg-img']} style={bg}></div>
            :
            null
        }
        <Nav />
        <div className={styles['cont-wrap']}>
          <Video />
          <Trailers />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (store) => {
  return ({
    trailerDetails: selectors.getTrailerDetails(store),
  })
};

export default connect(mapStateToProps)(Index)
