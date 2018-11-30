import {connect} from 'react-redux'
import { selectors } from '../../store';

import styles from './styles.styl';

const Trailers = ({ trailers }) => {
  return (
    <div className={styles["trailers-wrap"]}>
      {
        trailers.map((t) => {
          return (
            <div className={styles["item-cont"]} key={t.eventCode}>
              <div className={styles["img-cont"]}>
                <img src={t.thubnail} />
              </div>
              <div className={styles["title-cont"]}>
                <span>{t.eventTitle}</span>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

const mapStateToProps = (store) => {
  return ({
    trailers: selectors.getTrailerData(store),
  })
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(
//     {
//       userLogin: actionCreators.userLogin,
//       userRegister: actionCreators.userRegister,
//       getLoginInfo: actionCreators.getLoginInfo,
//       resetLoginError: actionCreators.resetLoginError,
//     },
//     dispatch,
//   );
// }

export default connect(mapStateToProps)(Trailers)
