An AirPollution Tracker built with React + Node.JS/Express

This API was supported by Material-UI. Learn more: https://material-ui.com/

## What is this and who is it for 🤷‍

AirAware is a consulting company that provides businesses and individuals with everyday air pollution information in the United States and solutions.
You are able to compare statisistics about air pollution between cities. The measurements for comparison are Air Quality Index (AQI) & Particulate matter(PM). We also added a comparison of how much would each Air Quality Index information correspond to smoking a cigarette per day. This way people could relate or understand better the matter of air pollution.
You are able to go into Details of each City to view further information such as weather and sollutions.
We have addeed two more sections, one called About page with information about us and one with solutions.

### Features

- Our application was built with React, including functional components with hooks.
- We have added a card component with Material-UI in the main page, spread operator, destructuring assignment, formulas.
- API written in JavaScript using Express.

### Setting up development environment

- git clone git@github.com:wyncode/C36_midterm_elvis_iman_julio_krissy.git
- To install the dependencies on the backend you must yarn in the root directory of the project
  then to install the dependencies of the front end you must cd into the client directory and
  yarn there as well
- import React from 'react';
- import { BrowserRouter, Switch, Route } from 'react-router-dom';
- create an account on AirVisuals website to get API key (https://www.airvisual.com/)
- Create an empty .env file in root directory and paste your API key in there

### Starting up the app

- in the root directory yarn dev
- App should now be running on http://localhost:8080/

### Authors:

- Julio Acceus, Iman Bashir, Elvis Hernandez, Krisi Keranova. We are students of Wyncode Academy and this is our midterm project. For more information you can follow our individual LinkedIn accounts linked to our photos in the About page.

### Further info on the App process

We have extracted info from four API endpoints using express. The first three APIs provide information about the States and cities, and the city pollution stats while the fourth is giving us an image of the corresponding city.
We created a dropdown menu, serch bar and added a material UI component - card in the main page.

### What's missing?

We want to make it so that a user's list of cities saves on the backend so that if they decide to
view a speicific city page for example, then when they return to the home page their list would
still be there.

We would like to add the Google API so users can have a better view and understanding of areas with pollution.

### For more information on air quality visit https://www.airvisual.com/
