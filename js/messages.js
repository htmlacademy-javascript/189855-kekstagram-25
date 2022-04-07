import { isEscapeKey } from './util.js';

const ERROR_SHOW_TIME = 7000;

const openErrorMessage = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const error = errorTemplate.cloneNode(true);
  const errorTitle = error.querySelector('.error__title');
  const errorInner = error.querySelector('.error__inner');
  const errorButton = error.querySelector('.error__button');

  error.style.zIndex = 100;
  errorTitle.style.fontSize = '20px';
  errorTitle.style.color = 'white';
  errorInner.style.backgroundColor = 'red';

  document.body.append(error);

  const deleteErrorModal = () => {
    error.remove();
    document.removeEventListener('keydown', onEscapeKeydown);
  };

  function onEscapeKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      deleteErrorModal();
    }
  }

  errorButton.addEventListener('click', deleteErrorModal);

  document.addEventListener('keydown', onEscapeKeydown);

  const emptyPointCloseErrorClick = (evt) => {
    if(evt.target.closest('.error__inner') === null){
      deleteErrorModal();
    }
  };

  error.addEventListener('click', emptyPointCloseErrorClick);
};

const openSuccessMessage = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const success = successTemplate.cloneNode(true);
  const successTitle = success.querySelector('.success__title');
  const successInner = success.querySelector('.success__inner');
  const successButton = success.querySelector('.success__button');

  success.style.zIndex = 100;
  successTitle.style.fontSize = '20px';
  successTitle.style.color = 'white';
  successInner.style.backgroundColor = 'green';

  document.body.append(success);

  const deleteSuccessModal = () => {
    success.remove();
    document.removeEventListener('keydown', onEscapeKeydown);
  };

  function onEscapeKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      deleteSuccessModal();
    }
  }

  successButton.addEventListener('click', deleteSuccessModal);

  document.addEventListener('keydown', onEscapeKeydown);

  const emtyPointCloseSuccessClick = (evt) => {
    if(evt.target.closest('.success__inner') === null) {
      deleteSuccessModal();
    }
  };

  success.addEventListener('click', emtyPointCloseSuccessClick);
};

const getServerDataError = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '20px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Произошла ошибка загрузки';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ERROR_SHOW_TIME);
};

export {openErrorMessage, openSuccessMessage, getServerDataError};
