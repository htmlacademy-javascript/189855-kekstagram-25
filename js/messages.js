import { isEscapeKey } from './util.js';

const errorMessage = (message) => {
  const successTemplate = document.querySelector('#error').content.querySelector('.error');
  const error = successTemplate.cloneNode(true);
  const errorTitle = error.querySelector('.error__title');
  const errorInner = error.querySelector('.error__inner');
  const errorButton = error.querySelector('.error__button');

  error.style.zIndex = 100;
  errorTitle.style.fontSize = '20px';
  errorTitle.style.color = 'white';
  errorInner.style.backgroundColor = 'red';

  errorTitle.textContent = message;

  document.body.append(error);

  const deleteErrorModal = () => {
    error.remove();
  };

  errorButton.addEventListener('click', () => {
    deleteErrorModal();
    errorButton.removeEventListener('click', () => {
      deleteErrorModal();
    });
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      deleteErrorModal();
    }
  });

  error.addEventListener('click', () => {
    deleteErrorModal();
    error.removeEventListener('click', deleteErrorModal);
  });
};

const successMessage = (message) => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const success = successTemplate.cloneNode(true);
  const successTitle = success.querySelector('.success__title');
  const successInner = success.querySelector('.success__inner');
  const successButton = success.querySelector('.success__button');

  success.style.zIndex = 100;
  successTitle.style.fontSize = '20px';
  successTitle.style.color = 'white';
  successInner.style.backgroundColor = 'green';

  successTitle.textContent = message;

  document.body.append(success);

  const deleteSuccessModal = () => {
    success.remove();
  };

  successButton.addEventListener('click', () => {
    deleteSuccessModal();
    successButton.removeEventListener('click', () => {
      deleteSuccessModal();
    });
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      deleteSuccessModal();
    }
  });

  success.addEventListener('click', () => {
    deleteSuccessModal();
    success.removeEventListener('click', deleteSuccessModal);
  });
};

export {errorMessage, successMessage};
