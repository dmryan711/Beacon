# Beacon App

# Developer Notes
## React & Express Ports
React will run on PORT 3000 and will proxy to 3001 for Express
If you are adding UI packages that need to run in React, cd into client folder, then npm install (Make sure you cd back to main directory before npm start or the server wont run)

## Mongo Connection
Mongoose is set up, make sure to add any new models to the index.js file in the models folder
Mongoose will create a database called  "Beacon"
If you want to test, use postman for a POST request and point it to localhost:3001/api/test, then add the following to the request body
{
  "testName": "Beacon!"
}

## Console Logging
Please console log everything with "[<YOUR INITIALS>] <Whatever you want to console log>"


## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
