import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialDescription = bigPicture.querySelector('.social__caption');
const blockCommentCount = bigPicture.querySelector('.social__comment-count');
const blockUploadingNewComments = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialComment = document.querySelector('#comment').content.querySelector('.social__comment');

const getBigPictureComment = (comment) => {
  const commentItem = socialComment.cloneNode(true);

  commentItem.querySelector('.social__picture').src = comment.avatar;
  commentItem.querySelector('.social__picture').alt = comment.name;
  commentItem.querySelector('.social__text').textContent = comment.message;
  return commentItem;
};

const createCommentsFragment = (fragmentsComment) => {
  socialComments.innerHTML = '';

  const fragment = document.createDocumentFragment();
  fragmentsComment.forEach((comment) => {
    const newComment = getBigPictureComment(comment);
    fragment.appendChild(newComment);
  });

  socialComments.appendChild(fragment);
};

const showNewComments = (fragmentsNewComments) => {
  blockUploadingNewComments.addEventListener('click', () => {
    socialComments.innerHTML = '';

    const fragment = document.createDocumentFragment();
    fragmentsNewComments.forEach((comment) => {
      const newComment = getBigPictureComment(comment);
      fragment.appendChild(newComment);
    });

    socialComments.appendChild(fragment);
  });
};

const openBigPicture = (bigImage) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  blockCommentCount.classList.remove('hidden');
  blockUploadingNewComments.classList.remove('hidden');

  bigPictureImg.src = bigImage.url;
  likesCount.textContent = bigImage.likes;
  commentsCount.textContent = bigImage.comments.length;
  socialDescription.textContent = bigImage.description;

  createCommentsFragment(bigImage.comments);
  showNewComments(bigImage.comments);

  document.addEventListener('keydown', onBigPictureEscPress);
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
};

function onBigPictureEscPress(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

function onBigPictureCancelClick() {
  closeBigPicture();
}

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscPress);
  bigPictureCancel.removeEventListener('click', onBigPictureCancelClick);
}

export {openBigPicture};
