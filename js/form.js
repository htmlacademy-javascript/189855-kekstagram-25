import { isEscapeKey } from './util.js';
import { activateScaleControls, desactivateScaleControls, resetScale, onEffectButtonClick, setOriginalEffect } from './scale-img.js';
import { showAlert } from './util.js';

const uploadFileField = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const uploadSubmitButton = form.querySelector('.img-upload__submit');
const hashtagsField = form.querySelector('.text__hashtags');
const descriptionField = form.querySelector('.text__description');
const effectList = form.querySelector('.effects__list');

const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(form, {
  classTo: 'img-upload__error-wrap',
  errorTextParent: 'img-upload__error-wrap',
  errorTextClass: 'text-help'
});

pristine.addValidator(hashtagsField, () => {
  const hashtags = hashtagsField.value.split(' ').filter((item) => item !== '');

  return hashtags.length <= 5;
}, 'Количество хэштегов не больше 5', 1, false);

pristine.addValidator(hashtagsField, () => {
  const hashtags = hashtagsField.value.split(' ').filter((item) => item !== '');

  return hashtags.every((elem) => re.test(elem));
}, 'Начинается с #, не более 20 знаков, только буквы и цифры', 1, false);

pristine.addValidator(hashtagsField, () => {
  const hashtags = hashtagsField.value.split(' ').filter((item) => item !== '');
  const hashtagsLowerCase = hashtags.map((item) => item.toLowerCase());
  const uniqueHashtags = new Set(hashtagsLowerCase);

  return uniqueHashtags.size === hashtags.length;
}, 'Не должно быть одинаковых хэштегов', 1, false);

const getValidateStatus = () => {
  const isValid = pristine.validate();
  if (isValid) {
    uploadSubmitButton.disabled = false;
  } else {
    uploadSubmitButton.disabled = true;
  }
};

const activateFormValidation = () => {
  hashtagsField.addEventListener('input', getValidateStatus);
  descriptionField.addEventListener('input', getValidateStatus);
};

const desactivateFormValidation = () => {
  hashtagsField.removeEventListener('input', getValidateStatus);
  descriptionField.removeEventListener('input', getValidateStatus);
};

const onPopupEscButtonPress = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditFormModal();
  }
};

const onUploadCuncelButtonClick = () => {
  closeEditFormModal();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
};

const onTextFieldEscButtonPress = (evt) => {
  evt.stopPropagation();
};

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
            showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          }
        })
        .catch(() => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        });
    }
  });
};

const openEditFormModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  resetScale();
  setOriginalEffect();

  document.addEventListener('keydown', onPopupEscButtonPress);
  uploadCancelButton.addEventListener('click', onUploadCuncelButtonClick);
  form.addEventListener('submit', onFormSubmit);
  hashtagsField.addEventListener('keydown', onTextFieldEscButtonPress);
  descriptionField.addEventListener('keydown', onTextFieldEscButtonPress);
  effectList.addEventListener('change', onEffectButtonClick);
  activateFormValidation();
  activateScaleControls();
  setUserFormSubmit();
};

function closeEditFormModal() {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscButtonPress);
  uploadCancelButton.removeEventListener('click', onUploadCuncelButtonClick);
  form.removeEventListener('submit', onFormSubmit);
  hashtagsField.removeEventListener('keydown', onTextFieldEscButtonPress);
  descriptionField.removeEventListener('keydown', onTextFieldEscButtonPress);
  effectList.removeEventListener('change', onEffectButtonClick);
  desactivateFormValidation();
  desactivateScaleControls();

  uploadFileField.value = '';
}

const onUploadFileFieldChange = () => {
  openEditFormModal();
};

const activateFileLoader = () => {
  uploadFileField.addEventListener('change', onUploadFileFieldChange);
};

export default activateFileLoader;
