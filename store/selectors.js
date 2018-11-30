import { compose, filter, map } from 'lodash/fp';
import { find } from 'lodash';


const getTrailerData = (store) => {
  /*
  return filter(store.data.trailerData[1], (td) => {
    if(td.EventLanguage === "English") {
      return {
        trailerURL: td.TrailerURL,
        eventTitle: td.EventTitle,
        thubnail: "https://in.bmscdn.com/events/moviecard/ET00046165.jpg",
      }
    }
    return false;
  });
 */
  return compose(map((td) => ({
    trailerURL: td.TrailerURL,
    eventTitle: td.EventTitle,
    thubnail: `http://in.bmscdn.com/iedb/movies/images/website/poster/large/${td.EventImageCode}.jpg`,
    eventCode: td.EventCode
  })),
  filter((td) => {
    if(store.data.selectedLanguage && store.data.selectedLanguage !== "0"){
      return td.EventLanguage === store.data.selectedLanguage
    }
    return true;
  }))(store.data.trailerData[1]);
};

const getLanguages = (store) => {
  return store.data.trailerData[0];
}

const getVideoId = (store) => {
  if(store.data.eventCode) {
    const a = new URL(store.data.trailerData[1][store.data.eventCode].TrailerURL);
    return a.searchParams.get('v')
  }
  return '';
}

const getTrailerDetails = (store) => {
  if(store.data.eventCode) {
    return store.data.trailerData[1][store.data.eventCode];
  }
}

export { getTrailerData, getLanguages, getVideoId, getTrailerDetails };
