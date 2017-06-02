import '../sass/main.scss';
import {Calculator} from './Calculator';

document.addEventListener('DOMContentLoaded', function () {
  Calculator.init(document.querySelector('#root'));
});
