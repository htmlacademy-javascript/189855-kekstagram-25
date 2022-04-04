const errorButton = document.querySelector('.error__button');

const errorMessage = (message) => {
  const successTemplate = document.querySelector('#error').content.querySelector('.error');
  const error = successTemplate.cloneNode(true);
  const errorTitle = error.querySelector('.error__title');
  const errorInner = error.querySelector('.error__inner');

  error.style.zIndex = 100;
  errorTitle.style.fontSize = '20px';
  errorTitle.style.color = 'white';
  errorInner.style.backgroundColor = 'red';

  errorTitle.textContent = message;

  document.body.append(error);
};

const successMessage = (message) => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const success = successTemplate.cloneNode(true);
  const successTitle = success.querySelector('.success__title');
  const successInner = success.querySelector('.success__inner');

  success.style.zIndex = 100;
  successTitle.style.fontSize = '20px';
  successTitle.style.color = 'white';
  successInner.style.backgroundColor = 'green';

  successTitle.textContent = message;

  document.body.append(success);
};

export {errorMessage, successMessage};
