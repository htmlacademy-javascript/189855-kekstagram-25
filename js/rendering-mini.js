import { createObject } from './create-object.js';

const photoMatchingTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesListElement = document.querySelector('.pictures');


const photoMatching = createObject();

const photoMatchingListFragment = document.createdocumentFragment;

photoMatching.forEach(({url, likes, comments}) => {
  const photoMatchingElement = photoMatchingTemplate.cloneNode(true);
  photoMatchingElement.querySelector('.picture__img').src = url;
  photoMatchingElement.querySelector('.picture__likes').textContent = likes;
  photoMatchingElement.querySelector('.picture__comments').textContent = comments;
  photoMatchingListFragment.appendChild(photoMatchingElement);
});

picturesListElement.appendChild(photoMatchingListFragment);
