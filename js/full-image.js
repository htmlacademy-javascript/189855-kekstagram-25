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

const OFFSET = 5;

let currentCommentsCount = 0;

const getBigPictureComment = (comment) => {
  const commentItem = socialComment.cloneNode(true);

  commentItem.querySelector('.social__picture').src = comment.avatar;
  commentItem.querySelector('.social__picture').alt = comment.name;
  commentItem.querySelector('.social__text').textContent = comment.message;
  return commentItem;
};

const createCommentsFragment = (fragmentsComment, counter) => {
  const currentComments = fragmentsComment.slice(counter, counter + OFFSET);
  const countNodeValue = blockCommentCount.childNodes[0];

  currentCommentsCount += currentComments.length;

  if (currentCommentsCount === fragmentsComment.length) {
    blockUploadingNewComments.classList.add('hidden');
  }

  const index = countNodeValue.nodeValue.indexOf('из');
  const substring = countNodeValue.nodeValue.slice(index);

  countNodeValue.nodeValue = `${currentCommentsCount} ${substring}`;

  const fragment = document.createDocumentFragment();
  currentComments.forEach((comment) => {
    const newComment = getBigPictureComment(comment);
    fragment.appendChild(newComment);
  });

  socialComments.appendChild(fragment);
};

const openBigPicture = (bigImage) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  socialComments.innerHTML = '';

  let COUNTER = 0;

  const onUploadingNewCommentsButtonClick = () => {
    COUNTER += OFFSET;

    createCommentsFragment(bigImage.comments, COUNTER);
  };

  bigPictureImg.src = bigImage.url;
  likesCount.textContent = bigImage.likes;
  commentsCount.textContent = bigImage.comments.length;
  socialDescription.textContent = bigImage.description;

  createCommentsFragment(bigImage.comments, COUNTER);

  document.addEventListener('keydown', onBigPictureEscPress);
  bigPictureCancel.addEventListener('click', onBigPictureCancelClick);
  blockUploadingNewComments.addEventListener('click', onUploadingNewCommentsButtonClick);
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
  currentCommentsCount = 0;
  blockUploadingNewComments.classList.remove('hidden');
}

export {openBigPicture};
