import photoLoader from './main.js';

const filterDefaultButton = document.querySelector('.filter-default');
const filterRandomButton = document.querySelector('.filter-random');
const filterDiscussedButton = document.querySelector('.filter-discussed');
const imgFiltersForm = document.querySelector('.img-filters__form');

const createLoader = (onSuccess, onError) => () =>
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .then(() => {
      const imgFilters = document.querySelector('.img-filters');

      imgFilters.classList.remove('img-filters--inactive');
    })
    .catch((err) => {
      onError(err);
    });

const sendData = (closeEditFormModal, onSuccess, onError, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        closeEditFormModal();
        onSuccess();
      } else {
        onError('Ошибка загрузки файла');
      }
    })
    .catch(() => {
      onError('Ошибка загрузки файла');
    });
};

imgFiltersForm.addEventListener('click', (evt) => {
  for (let i = 0; i < imgFiltersForm.children.length; i++) {
    imgFiltersForm.children[i].classList.remove('img-filters__button--active');
  }
  evt.target.classList.add('img-filters__button--active');
});


const openDefaultPhotos = () => {
  filterDefaultButton.addEventListener('click', () => {
    photoLoader();
  });
};


const openRandomPhotos = () => {
  filterRandomButton.addEventListener('click', () => {

  });
};


const openDiscussedPhotos = () => {
  filterDiscussedButton.addEventListener('click', () => {

  });
};

export {createLoader, sendData};
