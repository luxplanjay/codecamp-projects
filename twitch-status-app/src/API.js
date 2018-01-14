const makeLoginList = arr =>
  arr.reduce((acc, item) => acc + `login=${item}&`, '');

const makeIdList = arr =>
  arr.reduce((acc, item) => acc + `user_id=${item.id}&`, '');

const makeUserData = ({
  id,
  title = null,
  display_name,
  profile_image_url,
  login
}) => ({
  id: id,
  title: title,
  name: display_name,
  logo: profile_image_url,
  url: `https://www.twitch.tv/${login}`,
  isOnline: !!title
});

const makeChannelCardData = (streams, users) => {
  const onlineIds = streams.map(stream => stream.user_id);

  const onlineUsers = users
    .filter(user => onlineIds.includes(user.id))
    .map(user => ({
      ...user,
      ...streams.find(stream => stream.user_id === user.id)
    }));

  const offlineUsers = users.filter(user => !onlineIds.includes(user.id));

  const allUsers = [...onlineUsers, ...offlineUsers];

  const cardData = allUsers.reduce(
    (acc, user) => [...acc, makeUserData(user)],
    []
  );

  return cardData;
};

export const fetchData = function(channels) {
  const headers = new Headers({
    'Client-ID': 'zw4ez3387m23jod5tuzeebtdbknd0b'
  });

  const endpoint = 'https://api.twitch.tv/helix';
  const queryString = makeLoginList(channels);

  return fetch(`${endpoint}/users?${queryString}`, { headers })
    .then(response => {
      if (response.ok) return response.json();

      throw Error(response.statusText);
    })
    .then(users => {
      const idList = makeIdList(users.data);

      return fetch(`${endpoint}/streams?${idList}`, { headers })
        .then(response => {
          if (response.ok) return response.json();

          throw Error(response.statusText);
        })
        .then(streams => makeChannelCardData(streams.data, users.data));
    })
    .catch(err => console.log(err));
};
