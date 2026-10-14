import axios from 'axios';

// Pixabay API key: https://pixabay.com/api/docs/
const API_KEY = '58044243-0e2c0ba932f3f37f380e3d610';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
