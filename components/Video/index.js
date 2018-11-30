import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import { selectors } from '../../store';
import YouTube from 'react-youtube';
import styles from './styles.styl';

class Video extends Component {
  componentDidUpdate() {
    try {
      window.scrollTo(0, 0);
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    const { videoId, trailerDetails } = this.props;
    if(!videoId) {
      return null;
    }
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const [date, year] = trailerDetails.ShowDate.split(', ')
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
            <div className={styles['event-date-cont']}>
              <div className={`${styles['inline-wrap-icons']} ${styles['likes']}`}>
                <div>{trailerDetails.wtsPerc} %</div>
                <div>{trailerDetails.csCount} Votes</div>
              </div>
              <div className={`${styles['inline-wrap-icons']} ${styles['dates']}`}>
                <div>{date}</div>
                <div>{year}</div>
              </div>
            </div>
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
