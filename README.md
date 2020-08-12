# Weather Journal App

## Requirements

### Project Environment Setup

____ Node and Express Environment:
    ____ Node and Express should be installed on the local machine. The project file `server.js` should require `express()`, and should create an instance of their app using express.
    ____ The Express app instance should be pointed to the project folder with .html, .css, and .js files.
____ Project Dependencies:
    ____ The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().
    ____ The body-parser package should be installed and included in the project.
____ Local Server:
    ____ Local server should be running and producing feedback to the Command Line through a working callback function.
____ API Credentials:
    ____ Create API credentials on [OpenWeatherMap.com](http://openweathermap.com/)

### APIs and Routes

____ APP API Endpoint:
    ____ There should be a JavaScript Object named projectData initiated in the file server.jsto act as the app API endpoint.
____ Integrating OpenWeatherMap API:
    ____ The personal API Key for OpenWeatherMap API is saved in a named const variable.
    ____ The API Key variable is passed as a parameter to fetch()
    ____ Data is successfully returned from the external API.
____ Return Endpoint Data:
    ____ There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.
____ Return Endpoint Data:
    ____ There should be an asynchronous function to fetch the data from the app endpoint
____ POST Route:
    ____ You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.
    ____ The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.
    ____ The server side function should create a new entry in the apps endpoint (the named JS object) consisting of the data received from the client side POST

### Dynamic UI

____ Naming HTML Inputs and Buttons For Interaction:
    ____ The input element with the placeholder property set to “enter zip code here” should have an id of zip.
    ____ The textarea included in project HTML should have an id of feelings.
    ____ The button included in project HTML should have an id of generate.
____ Assigning Element Properties Dynamically:
    ____ The div with the id, entryHolder should have three child divs with the ids:
        - `date`
        - `temp`
        - `content`
____ Event Listeners:
    ____ Adds an event listener to an existing HTML button from DOM using Vanilla JS.
    ____ In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.
____ Dynamically Update UI:
    ____ Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
    ____ Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.


### amrhamid654@gmail.com
