const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if ((min || max) < 0) {
    return 'Число должно быть больше 0';
  } else if (max <= min) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const findLongestWord = (str, maxLength) => {
  if (str.length <= maxLength) {
    return true;
  }

  return false;
};

const isEscapeKey = function (evt) {
  return evt.key === 'Escape';
};

const isEnterKey = function (evt) {
  return evt.key === 'Enter';
};


const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomIntInclusive, findLongestWord, isEscapeKey, isEnterKey, debounce};
