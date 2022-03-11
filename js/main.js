import { createObject } from './create-object.js';
import './rendering-mini.js';

const objects = [];
const maxNumberDescriptions = 25;

for (let i = 1; i <= maxNumberDescriptions; i++) {
  const newObject = createObject(i);
  objects.push(newObject);
}

