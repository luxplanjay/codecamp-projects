const makeLoginList = (arr) => {
  let result = '';

  arr.forEach((item) => {
    result += `login=${item}&`;
  });

  return result;
};

const makeIdList = (arr) => {
  let result = '';

  arr.forEach((item) => {
    result += `user_id=${item.id}&`;
  });

  return result;
};

const makeChannelCardData = (streams, users) => {
  const data = [];

  const onlineIds = streams.map(stream => stream.user_id);

  const onlineUsers = users
    .filter(user => onlineIds.includes(user.id))
    .map(user => ({
      ...user,
      ...streams.filter(stream => stream.user_id === user.id)[0],
    }));

  const offlineUsers = users.filter(user => !onlineIds.includes(user.id));

  [...onlineUsers, ...offlineUsers].forEach((user) => {
    data.push({
      id: user.id,
      title: user.title || null,
      name: user.display_name,
      logo: user.profile_image_url,
      url: `https://www.twitch.tv/${user.login}`,
      isOnline: !!user.title,
    });
  });

  return data;
};

export const fetchData = function (channels) {
  const headers = new Headers({
    'Client-ID': 'zw4ez3387m23jod5tuzeebtdbknd0b',
  });

  const endpoint = 'https://api.twitch.tv/helix';
  const queryString = makeLoginList(channels);

  return fetch(`${endpoint}/users?${queryString}`, {
    headers,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(response.statusText);
    })
    .then((users) => {
      const idList = makeIdList(users.data);

      return fetch(`${endpoint}/streams?${idList}`, {
        headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw Error(response.statusText);
        })
        .then(streams => makeChannelCardData(streams.data, users.data));
    });
};
