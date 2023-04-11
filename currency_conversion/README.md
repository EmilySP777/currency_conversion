# CURRENCY CONVERSION
### 1. Description:

The function of this project is to visualize the monetary difference between the currencies of all countries.
We have the component that creates the input and the select according to the parameters received and displays the result on the screen after the corresponding operation. On the other hand we have the APP.js file that reads the information from the currency API, calculates the value received by the user and calls the component sending all the information received.

### 2. Project content:

    -> node_modules
    -> public
        -> images
        -> index.html
        -> manifest.json
        -> robots.txt
    -> src
        -> components
            -> CurrencyConversion.js
        -> sytles
            -> CurrencyConversion.css
        -> App.js
        -> index.js
        -> reportWebVitals.js
        -> App.test.js

### 3. API rest:

https://v6.exchangerate-api.com/v6/3eb345dffea7ffca583c727d/latest/USD

### Installation Docker
Install Docker
#### 1. Clone any currency_conversion project that you need to run
Clone this repository
    - git clone git clone --branch main https://github.com/EmilySP777/currency_conversion.git
#### 2. Create the .env file    
Create the .env file at root folder of this project following the ENV Template and change all the data to match with your project.
Note: the .env file is ignored by default on Git so your changes will never be commited.

Once you created and properly setup the variable in the .env file go to your terminal and run

docker compose up
Checking the project
Docker may take a while in the first time to generate all the containers. When finished you should be able to open your project using https://localhost:3000

#### 3. Run this project

    - sudo docker-compose up --build


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
