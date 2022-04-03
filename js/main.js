import {renderMini, descriptionObjects} from './rendering-mini.js';
import activateFileLoader from './form.js';

renderMini(descriptionObjects);
activateFileLoader();

// fetch('https://25.javascript.pages.academy/kekstagram/data')
//   .then((response) => response.json())
//   .then((descriptions) => {
//     renderMini(descriptions);
//   });

