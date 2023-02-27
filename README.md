# Image Processing API

This project was developed for the purpose of fulfilling the requirements of the first project of the EgFWD initiative through Udacity.

# Overview

## Features

- Run the image resizing service through `localhost:5000/api/image`.
- Choose out of a selection of images using the `?filename=value` URL query.
- Set the size of the image using the `?width=value&height=value` URL queries.

## Available Images

You can set the `filename` to any of the following: 

- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

Any other value set for `filename` will return a response with code 404.

# Setup and running guide

## Environment

This project uses a `.env` file to store the image directory path and the output directory path.

Please make sure to configure `IMG_DIR` & `OUT_DIR` to find your image and output directories.

## Scripts

When first running the project in a local environment, remember to run:

`npm install` to download all dependencies used in this project.

You can run the following scripts: 

- `npm start` : Starts the server using `nodemon`.
- `npm test` : Builds the project and runs all test suites.
- `npm run prettier` : Applies Prettier formatting to all files under `./src` directory.
- `npm run lint` : Checks code quality using eslint configurations.
- `npm run jasmine` : Runs all test suites without building the project (can cause issues, use `npm test` instead).