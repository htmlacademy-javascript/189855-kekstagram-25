const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__error-text',
});

const addFormValidation = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const imgUploadSubmit = form.querySelector('.img-upload__submit');
    const isValid = pristine.validate();
    if (isValid) {
      imgUploadSubmit.disabled = true;
    } else {
      imgUploadSubmit.disabled = false;
    }
  });
};

export {addFormValidation};
