const ALERT_SHOW_TIME = 5000;

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

getRandomIntInclusive(10, 1);

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomIntInclusive, findLongestWord, isEscapeKey, isEnterKey, showAlert};
