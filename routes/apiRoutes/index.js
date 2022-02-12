const router = require('express').Router();
const fs = require('fs');

//creat unique id
const { v4: uuidv4 } = require('uuid');

const { notes } = require('../../data/notes.json');

//conected to notes array
router.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

//post to notes file then return new note to client
router.post('/notes', (req, res) => {
    // res.json(req.body);
    const newNote = req.body;
    newNote.id = uuidv4();

    //read notes file

    //add to notes file

    //write file

    // send response
})

// *BONUS* delete note from array 
router.delete('/notes', (req,res)=> {
    res.json(req.body);
})

module.exports = router;