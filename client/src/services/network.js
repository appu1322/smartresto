import axios from 'axios';

//TODO add live api url 


axios.defaults.headers = {
  'Content-Type': 'application/json',
};

axios.defaults.responseType = 'json';

export { axios };
