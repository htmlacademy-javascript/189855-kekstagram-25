import {renderMini, descriptionObjects} from './rendering-mini.js';
import {showUploadFile, addUploadCancel} from './form-validation.js';

renderMini(descriptionObjects);
showUploadFile();
addUploadCancel();

const form = document.querySelector('.img-upload__overlay');

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    console.log('Форма валидна');
  } else {
    console.log('Форма невалидна');
  }
});

const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;

console.log(re.test('#grow'));
