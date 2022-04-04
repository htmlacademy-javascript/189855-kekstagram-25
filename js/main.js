import renderMini from './rendering-mini.js';
import {activateFileLoader} from './form.js';
import {createLoader} from './api.js';
import { errorMessage } from './messages.js';

const photoLoader = createLoader(renderMini, errorMessage);
//setUserFormSubmit(closeEditFormModal);

photoLoader();
activateFileLoader();

