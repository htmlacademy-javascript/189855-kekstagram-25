const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const STEP = 25;

const addScaleControlSmallerButton = () => {
  scaleControlSmallerButton.addEventListener('click', () => {
    scaleControlValue.value = scaleControlValue.value - STEP;

    if (scaleControlValue.value === 0 || scaleControlValue.value === 100) {
      scaleControlSmallerButton.disabled = true;
    } else {
      scaleControlSmallerButton.disabled = false;
    }

    imgUploadPreview.img.style.transform.scale = 0.`${scaleControlValue.value}`;
  });
};

const removeScaleControlSmallerButton = () => {
  scaleControlSmallerButton.removeEventListener('click', () => {
    scaleControlValue.value = scaleControlValue.value - STEP;

    if (scaleControlValue.value === 0 || scaleControlValue.value === 100) {
      scaleControlSmallerButton.disabled = true;
    } else {
      scaleControlSmallerButton.disabled = false;
    }

    imgUploadPreview.img.style.transform.scale = 0.`${scaleControlValue.value}`;
  });
};

const addScaleControlBiggerButton = () => {
  scaleControlBiggerButton.addEventListener('click', () => {
    scaleControlValue.value = scaleControlValue.value + STEP;

    if (scaleControlValue.value === 100) {
      scaleControlSmallerButton.disabled = true;
    } else {
      scaleControlSmallerButton.disabled = false;
    }

    imgUploadPreview.img.style.transform.scale = 0.`${scaleControlValue.value}`;
  });
};

const removeScaleControlBiggerButton = () => {
  scaleControlBiggerButton.removeEventListener('click', () => {
    scaleControlValue.value = scaleControlValue.value + STEP;

    if (scaleControlValue.value === 100) {
      scaleControlSmallerButton.disabled = true;
    } else {
      scaleControlSmallerButton.disabled = false;
    }

    imgUploadPreview.img.style.transform.scale = 0.`${scaleControlValue.value}`;
  });
};

// Наложение эффекта

const effects = [
  'none',
  'hrome',
  'sepia',
  'marvin',
  'phobos',
  'heat',
];

const effectsRadioButtons = document.querySelectorAll('.effects__radio');
const effectsContainer = document.querySelector('.effects__list');

effects.forEach((effect) => {
  const effectListItem = effectsContainer.querySelector('.effects__preview--' + effect);

  if (effectListItem) {
    imgUploadPreview('img').classList.add(effectListItem);
  }
});

// Слайдер

const effectLavelValue = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('');

effectLavelValue.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 25,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  effectLavelValue.value = sliderElement.noUiSlider.get();
});

