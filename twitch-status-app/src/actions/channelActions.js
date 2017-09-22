import * as API from '@/API';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';

export const fetchApiData = channels => (dispatch) => {
  API.fetchData(channels).then((data) => {
    dispatch({
      type: FETCH_SUCCESS,
      payload: data,
    });
  });
};

export const removeChannel = id => ({
  type: REMOVE_CHANNEL,
  payload: id,
});
