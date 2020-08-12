// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const bodyParser =require("body-parser");
const express = require("express");
const request = require("request");
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = process.env.PORT || 3000;
const server = app.listen(port, listening);
function listening() {
    console.log('The local server is running on http://localhost:' + port);
};

// Callback function to complete GET '/all'
app.get("/all", function(req, res){
    res.send(projectData);
});

// Post Route
app.post("/data", function(req, res) {
	const newData = {
		temp: req.body.temp,
		date: req.body.date,
		feelings: req.body.feelings
	};
	projectData = newData;
	res.send(projectData);
});
