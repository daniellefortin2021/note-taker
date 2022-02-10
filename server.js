const express = require('express');
const fs = require('fs');
const { notes } = require('./Develop/data/notes.json');


// express app
const app = express();
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

const PORT = process.env.PORT || 3001;

// set up route files = api routes


// get notes from api/notes
// add new note to api file (JSON db file)
// add new id to note


//conected to notes array
app.get('/api/notes', (req, res) => {
    res.json(notes);
})

//post to notes array
app.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

// delete notes 
app.delete('/api/notes', (req,res)=> {
    res.json(req.body);
})

// sets up the server
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`);
  });