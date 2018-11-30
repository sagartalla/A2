import apis from './api';

const actions = {
  FETCH_TRAILERS: 'FETCH_TRAILERS',
  FILTER_BY_LANGUAGE: 'FILTER_BY_LANGUAGE',
};

const actionCreators = {
  fetchTrailers: () => {
    return ({
      type: 'FETCH_TRAILERS',
      payload: apis.fetchTrailers()
    });
  },
  filterByLanguage: (lang) => ({
    type: 'FILTER_BY_LANGUAGE',
    payload: lang
  }),
};

export { actions, actionCreators };
