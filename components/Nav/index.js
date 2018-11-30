import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { selectors, actionCreators } from '../../store';

import styles from './styles.styl';

class Nav extends Component {
  constructor(props) {
    super(props);
    const { languages } = props;
    this.state = {
      lang: languages[0]
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    const lang = e.target.value;
    this.setState({
      lang,
    })
    this.props.filterByLanguage(lang);
  }

  render() {
    const { languages } = this.props;
    return (
      <div className={styles['nav-wrap']}>
        <div>LOGO</div>
        <div className={styles['filter-wrap']}>
          <div>
            <select onChange={this.handleLanguageChange}>
              <option key={0} value={0}>language</option>
              {
                languages.map((l) => {
                  return (
                    <option key={l} value={l}>{l}</option>
                  );
                })
              }
            </select>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    languages: selectors.getLanguages(store)
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
		{
			filterByLanguage: actionCreators.filterByLanguage
		},
		dispatch,
	);
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
