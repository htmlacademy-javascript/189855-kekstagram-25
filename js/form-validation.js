import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const imgUploadSubmit = form.querySelector('.img-upload__submit');
const hashtagsField = form.querySelector('.text__hashtags');
const descriptionField = form.querySelector('.text__description');
const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;

const activeUploadFile = () => {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
  });
};

const closeEditFormModal = () => {
  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      imgUploadOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });

  uploadCancel.removeEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  });
};

const openEditFormModal = () => {
  activeUploadFile();
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      imgUploadOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });

  uploadCancel.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    closeEditFormModal();
  });
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__error-wrap',
  errorTextParent: 'img-upload__error-wrap',
  errorTextClass: 'text-help'
});

const getValidateStatus = () => {
  const isValid = pristine.validate();
  if (isValid) {
    imgUploadSubmit.disabled = false;
  } else {
    imgUploadSubmit.disabled = true;
  }
};

pristine.addValidator(hashtagsField, () => {
  const hashtags = hashtagsField.value.split(' ');

  if (hashtags.length > 5) {
    return false;
  }
  return true;
}, 'Количество хэштегов не больше 5', 1, false);

pristine.addValidator(hashtagsField, () => {
  const hashtags = hashtagsField.value.split(' ');

  return hashtags.every((elem) => re.test(elem));
}, 'Начинается с #, не более 20 знаков, только буквы и цифры', 1, false);

pristine.addValidator(hashtagsField, () => {
  const hashtags = hashtagsField.value.split(' ');
  const hashtagsLowerCase = hashtags.map((item) => {
    item.toLowerCase();
  });
  const uniqueHashtags = new Set(hashtagsLowerCase);

  return uniqueHashtags.size === hashtags.length;
}, 'Не должно быть одинаковых хэштегов', 1, false);

hashtagsField.addEventListener('input', getValidateStatus);
descriptionField.addEventListener('input', getValidateStatus);

const addFormValidation = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    //console.log('OK');
    pristine.destroy();
  });
};

export {addFormValidation, openEditFormModal};
