import {connect} from 'react-redux'
import { selectors } from '../../store';
import Link from 'next/link'
import LazyImg from './lazyImg';

import styles from './styles.styl';

const Trailers = ({ trailers }) => {
  return (
    <div className={styles["trailers-wrap"]}>
      {
        trailers.map((t) => {
          return (
            <Link href={`/?eventCode=${t.eventCode}`} key={t.eventCode}>
              <div className={styles["item-cont"]}>
                <div className={styles["img-cont"]}>
                  {/*<img src={t.thubnail} />*/}
                  <LazyImg imgSrc={t.thubnail}/>
                </div>
                <div className={styles["title-cont"]}>
                  <span>{t.eventTitle}</span>
                </div>
                <div className={styles['date']}>{t.showDate.split(', ')[0]}</div>
              </div>
            </Link>
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

export default connect(mapStateToProps)(Trailers);
