export const getFetch = (url: string, params = {}) => {
  const queryString = Object.entries(params)
    .map(param => {
      return `${param[0]}=${param[1]}`;
    })
    .join('&');

  return fetch(`${url}?${queryString}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .catch(err => console.error(err));
};
