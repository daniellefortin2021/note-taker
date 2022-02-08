const express = require('express');
const fs = require('fs');


// express app
const app = express();
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

const PORT = process.env.PORT || 3001;

// set up route files = api routes
const notes = require('./routes/notes');

// get notes from api/notes
// add new note to api file (JSON db file)
// add new id to note


//conected to apiNotes doc
app.get('/api/notes', (req, res) => {
    res.json(notes);
})

//post to notes doc
app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

// sets up the server
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`);
  });