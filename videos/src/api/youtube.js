import axios from 'axios';

const KEY = 'AIzaSyBmTrtFC8ngoGDx_bJVn1oB9f5I_ODyrAg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
