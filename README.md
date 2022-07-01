# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode and mock server on http://localhost:3333.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Additional comment
After changing db.json file, you will see updated app within 10s (interval in src/components/Trips.js is set to 10s).
If interval is hashed, you need to manually refresh the app to get updates.

I think the best (most efficient) solution would be to use websocket to improve communication between server and client app :) 



