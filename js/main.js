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

findLongestWord('The quick brown fox jumped over the lazy dog', 100);

