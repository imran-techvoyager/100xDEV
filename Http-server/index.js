//importing express
const express = require('express');
const app = express();

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});