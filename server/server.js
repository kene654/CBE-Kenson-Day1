// Import the Express framework
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route handler for GET requests to the "/api" endpoint
app.get("/api", (req, res) => {
    // Send a JSON response containing an array of users
    res.json({
        "users": ["userOne", "userTwo", "userThree", "userFour"]
    });
});

// Start the server and listen on port 1000
app.listen(1000, () => {
    // Log a message to the console when the server starts successfully
    console.log("server Started");
});
