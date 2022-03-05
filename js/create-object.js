import { getRandomIntInclusive } from './util.js';
import {titles, messages, names} from './data.js';

const createObject = (index) => {
  const commentsCount = getRandomIntInclusive(1, 5);

  const getComment = (idx) => {
    const messageCount = getRandomIntInclusive(1, 2);

    const getMessage = () => {

      const joinedMessages = [];

      for (let i = 1; i <= messageCount; i++) {
        const messageVariates = getRandomIntInclusive(0, 5);
        const objectMessage = messages[messageVariates];
        joinedMessages.push(objectMessage);
      }

      const joinMessage = joinedMessages.join(' ');

      return joinMessage;
    };

    return {
      id: idx,
      avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
      message: getMessage(),
      name: names[getRandomIntInclusive(0, 6)],
    };
  };

  const getComments = () => {

    const setMessages = [];

    for (let i = 1; i <= commentsCount; i++) {
      const objectMessage = getComment(i);
      setMessages.push(objectMessage);
    }

    return setMessages;
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

export {createObject};
