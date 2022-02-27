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

const TITLES = [
  'Замечательное селфи',
  'Вид на Спас-На-Крови',
  'Прогулка в центре города',
  'Летний сад осенью',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const AUTHOR_NAME = [
  'Дмитрий',
  'Степан',
  'Иннокентий',
  'Вениамин',
  'Всеволод',
  'Гендальф',
  'Симеон',
];

const createObject = () => {


  const objectTemplate = {
    id: getRandomIntInclusive(1, 25),
    url: `photos/${getRandomIntInclusive(1, 25)}.jpg`,
    description: TITLES[getRandomIntInclusive(0, 3)],
    likes: getRandomIntInclusive(15, 200),
    comments: [
      {
        id: getRandomIntInclusive(1, 2500),
        avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
        message: MESSAGE[getRandomIntInclusive(0, 5)],
        name: AUTHOR_NAME[getRandomIntInclusive(0, 6)],
      }
    ],
  };

  return objectTemplate;
};

const objects = [];

for (let i = 1; i <= 25; i++) {
  const newObject = createObject();
  objects.push(newObject);
}

