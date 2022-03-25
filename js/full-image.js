import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialDescription = bigPicture.querySelector('.social__caption');
const blockCommentCount = bigPicture.querySelector('.social__comment-count');
const blockUploadingNewComments = bigPicture.querySelector('.comments-loader');
const body = document.querySelector('body');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');


const getBigPictureComment = (comment) => {
  const commentItem = socialComments.cloneNode(true);
  commentItem.querySelector('.social__picture').src = comment.avatar;
  commentItem.querySelector('.social__picture').alt = comment.name;
  commentItem.querySelector('.social__text').textContent = comment.message;
  return commentItem;
};

const createCommentsFragment = (fragmentsComment) => {
  const fragment = document.createDocumentFragment();
  fragmentsComment.forEach((comment) => {
    const newComment = getBigPictureComment(comment);
    fragment.appendChild(newComment);
  });
  socialComments.appendChild(fragment);
};

const openBigPicture = (bigImage) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPictureImg.querySelector(bigPictureImg).src = bigImage.url;
  bigPicture.querySelector(likesCount).textContent = bigImage.likes;
  bigPicture.querySelector(commentsCount).textContent = bigImage.comments.length;
  bigPicture.querySelector(socialDescription).textContent = bigImage.description;
  createCommentsFragment(bigImage.comments);
  blockCommentCount.classList.add('hidden');
  blockUploadingNewComments.classList.add('hidden');
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
