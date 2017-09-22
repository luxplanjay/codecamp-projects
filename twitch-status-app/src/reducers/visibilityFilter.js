import * as types from '@/actions/visibilityFilterActions';

export default function (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
