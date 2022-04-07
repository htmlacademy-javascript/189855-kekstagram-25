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

export default renderMini;
