# Sample MEAN app

## Description

This is a sample app using a MEAN stack using the method where the frontend is built then served through express. Essentially, only the express server is running, as opposed to two different servers, the angular one and express.

## Usage

Install mongo, for example,

```
$ brew install mongodb
```

At top level, install deps, run mongo daemon, populate db with sample data, run express server, which will build and serve angular, which will talk to the REST backend through /api

```
$ npm run installall
$ mongod --dbpath db &>/dev/null &
$ node populatedb.js
$ DEBUG=mean-app:* npm run devstart
```

Then visit localhost:3000.
