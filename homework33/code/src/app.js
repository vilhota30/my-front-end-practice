import { sum } from './scripts/utils.js';
import _ from 'lodash';
import 'bootstrap';
import './styles/css/main.css';
import './styles/scss/main.scss';

import BackgroundImage from '../src/images/backgroundImg.jpg';
// import { container } from 'webpack';

console.log(sum(1, 2));
console.log(_.uniq([1, 1, 1, 2, 2, 2, 2]));

const img = document.createElement('img');
img.src = BackgroundImage;

document.body.insertAdjacentElement('beforeend', img);
