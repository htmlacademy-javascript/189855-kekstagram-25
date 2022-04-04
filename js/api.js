import { pristine } from './form.js';
import { errorMessage } from './messages.js';

const form = document.querySelector('.img-upload__form');

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
    .catch((err) => {
      onError(err);
    });

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://25.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
          } else {
            errorMessage('Ошибка загрузки файла');
          }
        })
        .catch(() => {
          errorMessage('Ошибка загрузки файла');
        });
    }
  });
};

export {createLoader, setUserFormSubmit};
