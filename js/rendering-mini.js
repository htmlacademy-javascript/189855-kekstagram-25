import {createDescription} from './create-description.js';

const photoMatchingTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesListElement = document.querySelector('.pictures');

const renderMini = (photos) => {
  const photoMatchingListFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) => {
    const photoMatchingElement = photoMatchingTemplate.cloneNode(true);
    photoMatchingElement.querySelector('.picture__img').src = url;
    photoMatchingElement.querySelector('.picture__likes').textContent = likes;
    photoMatchingElement.querySelector('.picture__comments').textContent = comments.length;
    photoMatchingListFragment.appendChild(photoMatchingElement);
  });

  picturesListElement.appendChild(photoMatchingListFragment);
};

const descriptionObjects = [];
const MAX_NUMBER_DESCRIPTION = 25;

for (let i = 1; i <= MAX_NUMBER_DESCRIPTION; i++) {
  const newDescriptionObject = createDescription(i);
  descriptionObjects.push(newDescriptionObject);
}

export {renderMini, descriptionObjects};

