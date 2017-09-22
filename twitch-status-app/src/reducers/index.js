import { combineReducers } from 'redux';

import channels from './channels';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  channels,
  visibilityFilter,
});
