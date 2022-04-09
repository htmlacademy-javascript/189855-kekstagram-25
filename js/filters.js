const filterDefaultButton = document.querySelector('.filter-default');
const filterRandomButton = document.querySelector('.filter-random');
const filterDiscussedButton = document.querySelector('.filter-discussed');
const imgFiltersForm = document.querySelector('.img-filters__form');
const imgFilters = document.querySelector('.img-filters');

const activateFilters = () => {
  imgFilters.classList.remove('img-filters--inactive');
};

const removeActiveClass = () => {
  imgFiltersForm.addEventListener('click', () => {
    for (let i = 0; i < imgFiltersForm.children.length; i++) {
      imgFiltersForm.children[i].classList.remove('img-filters__button--active');
    }
  });
};

const gerDefaultImages = () => {

};

const gerRandomImages = () => {

};

const gerDiscussedImages = () => {

};

const renderFilteredImages = () => {
  // Очистить предыдущий вывод
  // Отрисовать отфильтрованные картинки
};

evt.target.classList.add('img-filters__button--active');

const openDefaultPhotos = () => {
  filterDefaultButton.addEventListener('click', () => {
    photoLoader();
  });
};


const openRandomPhotos = () => {
  filterRandomButton.addEventListener('click', () => {

  });
};


const openDiscussedPhotos = () => {
  filterDiscussedButton.addEventListener('click', () => {

  });
};

export {activateFilters};
