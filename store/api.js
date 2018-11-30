import axios from 'axios';

const apis = {
  fetchTrailers: (options) => {
    return axios.get('https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs');
  }
}

export default apis;
