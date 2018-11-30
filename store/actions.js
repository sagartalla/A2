import apis from './api';

const actions = {
  FETCH_TRAILERS: 'FETCH_TRAILERS',
  FILTER_BY_LANGUAGE: 'FILTER_BY_LANGUAGE',
  SET_EVENT_ID: 'SET_EVENT_ID',
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
  setEventId: (eventCode) => ({
    type: 'SET_EVENT_ID',
    payload: eventCode
  })
};

export { actions, actionCreators };
