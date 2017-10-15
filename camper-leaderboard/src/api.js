export const fetchCamperData = () =>
fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw Error('error fetching data');
  }).catch(err => console.error(`Error: ${err}`));

export const sortCampersBy = (list, prop) =>
  list
    .slice()
    .sort((a, b) => b[prop] - a[prop]);
