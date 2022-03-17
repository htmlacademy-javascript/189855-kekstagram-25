import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');

const showUploadFile = () => {
  uploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        imgUploadOverlay.classList.add('hidden');
        body.classList.remove('modal-open');
      }
    });
  });
};

const addUploadCancel = () => {
  uploadCancel.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  });
};

export {showUploadFile, addUploadCancel};
