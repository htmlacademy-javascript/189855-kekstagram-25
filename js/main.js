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

const titles = [
  'Замечательное селфи',
  'Вид на Спас-На-Крови',
  'Прогулка в центре города',
  'Летний сад осенью',
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Дмитрий',
  'Степан',
  'Иннокентий',
  'Вениамин',
  'Всеволод',
  'Гендальф',
  'Симеон',
];

const createObject = (index) => {
  const commentsCount = getRandomIntInclusive(1, 5);

  const getComment = (idx) => ({
    id: idx,
    avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
    message: messages[getRandomIntInclusive(0, 5)],
    name: names[getRandomIntInclusive(0, 6)],
  });

  const getComments = () => {

    const generateMessages = [];

    for (let i = 1; i <= commentsCount; i++) {
      const objectMessage = getComment(i);
      generateMessages.push(objectMessage);
    }

    return generateMessages;
  };

  const objectTemplate = {
    id: index,
    url: `photos/${index}.jpg`,
    description: titles[getRandomIntInclusive(0, 3)],
    likes: getRandomIntInclusive(15, 200),
    comments: getComments(getRandomIntInclusive(1, 5))
  };

  return objectTemplate;
};

const objects = [];

for (let i = 1; i <= 25; i++) {
  const newObject = createObject(i);
  objects.push(newObject);
}

console.log(objects);
