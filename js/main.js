import {renderMini, descriptionObjects} from './rendering-mini.js';
import {addFormValidation} from './form-validation.js';
import {showUploadFile, addUploadCancel} from './show-popup.js';

renderMini(descriptionObjects);
showUploadFile();
addUploadCancel();
addFormValidation();

//const re = /^#[A-Za-zA-Яа-яЁё0-9]{1,19}$/;

