const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const STEP = 25;

const changeScale = (multiplier) => {
  const scaleValue = Number(scaleControlValue.value.slice(0, -1)) + multiplier * STEP;
  scaleControlValue.value = `${scaleValue}%`;
  imgUploadPreview.style.transform = `scale(${scaleValue/100})`;
};

const onScaleControlSmallerButtonClick = () => {
  if (scaleControlValue.value !== '25%') {
    changeScale(-1);
  }
};

const onScaleControlBiggerButtonClick = () => {
  if (scaleControlValue.value !== '100%') {
    changeScale(1);
  }
};

const activateScaleControls = () => {
  scaleControlSmallerButton.addEventListener('click', onScaleControlSmallerButtonClick);
  scaleControlBiggerButton.addEventListener('click', onScaleControlBiggerButtonClick);
};

const desactivateScaleControls = () => {
  scaleControlSmallerButton.removeEventListener('click', onScaleControlSmallerButtonClick);
  scaleControlBiggerButton.removeEventListener('click', onScaleControlBiggerButtonClick);
};

// // Наложение эффекта

const FILTERS_CONFIG = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};

const effects = [
  'none',
  'chrome',
  'sepia',
  'marvin',
  'phobos',
  'heat',
];

const effectsRadioButtons = document.querySelectorAll('.effects__radio');
const effectsContainer = document.querySelector('.img-upload__effects');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

valueElement.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

effectsContainer.addEventListener('click', (evt) => {
  effects.forEach((effect) => {
    if (effect === evt.target.value) {
      const effectListItem = document.querySelector('.effects__preview--' + chrome);

      if (effectListItem) {
        imgUploadPreview.classList.add(effectListItem);
      }

      for (let filter in FILTERS_CONFIG) {
        if (filter.key === evt.target.value) {
          sliderElement.noUiSlider.updateOptions({
            return filter;
          });
        }
      }
    }
  });
});

// effects.forEach((effect) => {
//   const effectListItem = effectsContainer.querySelector('.effects__preview--' + effect);

//   if (effectListItem) {
//     imgUploadPreview('img').classList.add(effectListItem);
//   }
// });

// // Слайдер

// const effectLavelValue = document.querySelector('.effect-level__value');
// const sliderElement = document.querySelector('');

// effectLavelValue.value = 100;

// noUiSlider.create(sliderElement, {
//   range: {
//     min: 0,
//     max: 100,
//   },
//   start: 100,
//   step: 25,
//   connect: 'lower',
// });

// sliderElement.noUiSlider.on('update', () => {
//   effectLavelValue.value = sliderElement.noUiSlider.get();
// });

export {activateScaleControls, desactivateScaleControls};
