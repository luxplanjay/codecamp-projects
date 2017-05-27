import '../sass/main.scss';

import {Calculator} from './Calculator';

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const calc = new Calculator();
  calc.init();
});
