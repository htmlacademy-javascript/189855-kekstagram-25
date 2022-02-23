function getRandomArbitrary(min, max) {
  if (min >= max && max || min > 0) {
    return Math.random() * (min - max) + max;

  } else if (max >= min && max || min > 0) {
    return Math.random() * (max - min) + min;
  }

  return 'Число должно быть больше 0';
}

getRandomArbitrary(1, 10);

function findLongestWord(str, maxLength) {
  if (str.length <= maxLength) {
    console.log('Верно');
  } else {
    console.log('Не верно');
  }
}

findLongestWord('The quick brown fox jumped over the lazy dog', 10);

