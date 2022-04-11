import renderMini from './rendering-mini.js';
import { debounce } from './util.js';
import { getRandomIntInclusive } from './util.js';

const DELAY = 500;
const RANDOM_IMAGES_COUNT = 10;
const PICTURE_COUNT = 24;

const imgFiltersForm = document.querySelector('.img-filters__form');
const imgFiltersPanel = document.querySelector('.img-filters');
const imgFiltersButtons = imgFiltersPanel.querySelectorAll('.img-filters__button');

const removeActiveClass = () => {
  imgFiltersForm.addEventListener('click', () => {
    for (let i = 0; i < imgFiltersForm.children.length; i++) {
      imgFiltersForm.children[i].classList.remove('img-filters__button--active');
    }
  });
};

const getDefaultImages = (images) => images.slice();

const getRandomImages = (images) => {
  images.slice();

  const uniqueImages = [];

  while (uniqueImages.length < RANDOM_IMAGES_COUNT) {
    const imageIndex = getRandomIntInclusive(0, PICTURE_COUNT);
    const image = images[imageIndex];

    if (!uniqueImages.some((item) => item.id === image.id)) {
      uniqueImages.push(image);
    }
  }

  return uniqueImages;
};

const getDiscussedImages = (images) => images.slice().sort((item1, item2) => item2.comments.length - item1.comments.length);

const getCurrentImages = () => document.querySelectorAll('.picture');

const renderFilteredImages = (filteredImages) => {
  getCurrentImages().forEach((picture) => picture.remove());
  renderMini(filteredImages);
};

const activateFilters = (images) => {
  imgFiltersPanel.classList.remove('img-filters--inactive');

  imgFiltersButtons.forEach((button) => {
    button.addEventListener('click', debounce((evt) => {
      removeActiveClass();

      evt.target.classList.add('img-filters__button--active');

      if (evt.target.matches('#filter-default')) {
        renderFilteredImages(getDefaultImages(images));
      } else if (evt.target.matches('#filter-random')) {
        renderFilteredImages(getRandomImages(images));
      } else {
        renderFilteredImages(getDiscussedImages(images));
      }
    }, DELAY));
  });
};

export {activateFilters};
