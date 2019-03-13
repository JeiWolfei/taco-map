/* eslint-disable no-unused-vars */
const getLocation = address => {
  return Promise.resolve({
    // Los Gorditos NW Davis St Portland
    lat: 45.524514, 
    lng: -122.680728
  });
};

const getPlaces = (location, type, keywords) => {
  return Promise.resolve([
    {
      placeId: '007',
      types: [type],
      name: 'Tasty Tacos',
      price: 2
    },
    {
      placeId: '1999',
      types: [type],
      name: 'Tiny Taco',
      price: 2
    },
    {
      placeId: '8888',
      types: [type],
      name: 'Taco Mamma',
      price: 1
    },
  ]);
};

module.exports = {
  getLocation,
  getPlaces
};
