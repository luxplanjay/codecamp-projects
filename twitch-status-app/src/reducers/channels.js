import * as types from '@/actions/channelActions';

export default function (state = [], action) {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      if (state.length > 0 && action.payload.length === 1) {
        const idList = state.map(channel => channel.id);
        const channelID = action.payload[0].id;

        if (!idList.includes(channelID)) {
          return [
            ...action.payload,
            ...state,
          ];
        }

        return state;
      }

      return action.payload;

    case types.REMOVE_CHANNEL:
      return state.filter(channel => channel.id !== action.payload);
    default:
      return state;
  }
}
