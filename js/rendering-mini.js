//import {createDescription} from './create-description.js';
import { openBigPicture } from './full-image.js';

const photoMatchingTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesListElement = document.querySelector('.pictures');

const renderMini = (photos) => {
  const photoMatchingListFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const {url, likes, comments} = photo;
    const photoMatchingElement = photoMatchingTemplate.cloneNode(true);
    photoMatchingElement.querySelector('.picture__img').src = url;
    photoMatchingElement.querySelector('.picture__likes').textContent = likes;
    photoMatchingElement.querySelector('.picture__comments').textContent = comments.length;
    photoMatchingListFragment.appendChild(photoMatchingElement);

    photoMatchingElement.addEventListener('click', () => {
      openBigPicture(photo);
    });
  });

  picturesListElement.appendChild(photoMatchingListFragment);
};

const descriptionObjects = [];
const maxNumberDescriptions = 25;

for (let i = 1; i <= maxNumberDescriptions; i++) {
  const newDescriptionObject = fetch('https://25.javascript.pages.academy/kekstagram/data').then((response) => response.json()).then((descriptions) => {renderMini(descriptions);});
  descriptionObjects.push(newDescriptionObject);
}

export {renderMini, descriptionObjects};

