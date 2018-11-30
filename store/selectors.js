import { compose, filter, map } from 'lodash/fp';


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
    thubnail: "https://in.bmscdn.com/events/moviecard/ET00046165.jpg",
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

export { getTrailerData, getLanguages };
