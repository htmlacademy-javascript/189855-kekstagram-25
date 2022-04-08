import renderMini from './rendering-mini.js';
import {activateFileLoader} from './form.js';
import {createLoader} from './api.js';
import { getServerDataError } from './messages.js';

const photoLoader = createLoader(renderMini, getServerDataError);

photoLoader();
activateFileLoader();

export default photoLoader;

