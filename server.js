const express = require('express');
const fs = require('fs');


// express app
const app = express();
const PORT = process.env.PORT || 3001;

// set up route files = api routes
const apiRoutes = require('./routes/apiRoutes');

// get notes from api/notes
// add new note to api file (JSON db file)
// add new id to note


//conected to apiRoutes doc
app.get('/api/apiRoutes', (req, res) => {
    res.json(apiRoutes);
})

// sets up the server
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`);
  });