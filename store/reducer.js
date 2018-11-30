import typeToReducer from 'type-to-reducer';
import { actions } from './actions';

const reducer = typeToReducer({
  [actions.FETCH_TRAILERS]: {
    PENDING: state => {
      return {
        ...state,
        ui: {
          ...state.ui,
          loading: false
        }
      }
    },
    FULFILLED: (state, action) => {
      return {
        ...state,
        data: {
          ...state.data,
          trailerData: action.payload.data
        },
        ui: {
          ...state.ui,
          loading: false
        }
      }
    },
    REJECTED: (state, action) => {
      return {
        ...state,
        error: action.payload.message,
        ui: {
          ...state.ui,
          loading: false
        }
      }
    },
  },
  [actions.FILTER_BY_LANGUAGE]: (state, action) => {
    return {
      ...state,
      data: {
        ...state.data,
        selectedLanguage: action.payload
      }
    };
  },
  [actions.SET_EVENT_ID]: (state, action) => {
    return {
      ...state,
      data: {
        ...state.data,
        eventCode: action.payload 
      }
    }
  }
});

export default reducer;
