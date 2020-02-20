if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();

// let cities = [];
app.get('/api', (request, response) => {
  axios
    .get(
      'http://api.airvisual.com/v2/states?country=USA&' +
        `key=${process.env.API_KEY_J}`
    )
    .then(res => response.json(res.data.data));
});
// supported cities by state API
app.get('/api/:state', (request, response) => {
  const state = request.params.state;
  axios
    .get(
      'http://api.airvisual.com/v2/cities?' +
        `state=${state}&country=USA&key=${process.env.API_KEY_K}`
    )
    .then(res => response.json(res.data.data))
    .catch(err => console.log(err));
});
// This is the API that retrieves the AQI (Air Quality Index)
app.get('/api/:state/:city', (request, response) => {
  const state = request.params.state;
  const city = request.params.city;
  axios
    .get(
      `http://api.airvisual.com/v2/city?city=${city}&` +
        `state=${state}&country=USA&key=${process.env.API_KEY_K}`
    )
    .then(res => {
      const { city, state, current } = res.data.data;
      response.json({
        id: `${city}-${state}`,
        ...current.pollution,
        ...current.weather
      });
    })
    .catch(err => console.log(err));
});
// Picture API that retrieves a picture of the city that the user chooses
app.get('/image/:city', (request, response) => {
  const city = request.params.city;
  axios
    .get(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`)
    .then(res => response.json(res.data.photos[0].image.web))
    .catch(err => {
      console.log('error fetching image', err);
      response.json(
        'https://i1.wp.com/assuredlegal.com.au/wp-content/uploads/2016/11/placeholder-city-buildings.jpg'
      );
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
