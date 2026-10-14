import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

const NO_RESULTS_MESSAGE =
  'Sorry, there are no images matching your search query. Please try again!';

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();

  if (query === '') {
    notifyError('Please enter a search query!');
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        notifyError(NO_RESULTS_MESSAGE);
        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      notifyError('Sorry, something went wrong. Please try again later!');
    })
    .finally(() => {
      hideLoader();
    });
});

function notifyError(message) {
  iziToast.error({
    message,
    position: 'topRight',
    maxWidth: 400,
  });
}
