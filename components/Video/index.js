import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import { selectors } from '../../store';
import YouTube from 'react-youtube';
import styles from './styles.styl';

class Video extends Component {
  render() {
    const { videoId, trailerDetails } = this.props;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className={styles['trailer-cont']}>
        <div className={styles['video-wrap']}>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        <div className={styles['trailer-details']}>
          <div>
            <div className={styles['event-name']}>{trailerDetails.EventName}</div>
            <div className={styles['event-language']}>{trailerDetails.EventLanguage}</div>
            <div className={styles['event-genere']}>{
              trailerDetails.EventGenre.split('|').map((g) => {
                return <div className={styles['eg-item']}>{g}</div>
              })
            }</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return ({
    videoId: selectors.getVideoId(store),
    trailerDetails: selectors.getTrailerDetails(store),
  })
};


export default connect(mapStateToProps)(Video);
