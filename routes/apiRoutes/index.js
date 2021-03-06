const router = require('express').Router();
const fs = require('fs');

const path = require('path');

//creat unique id
const { v4: uuidv4 } = require('uuid');

// const { notes } = require('../../data/notes.json');

//conected to notes array
router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname,'../../data/notes.json'), (err, data) => {

        // let results = notes;
        // console.log(results);
        res.json(JSON.parse(data));
    })
});

//post to notes file then return new note to client
router.post('/notes', (req, res) => {
    // res.json(req.body);
    const newNote = req.body;
    newNote.id = uuidv4();

    // read file
    // let data = notes;
    let notesArray = fs.readFileSync(path.join(__dirname,'../../data/notes.json'), (err, data) => { 
        res.json(JSON.parse(data));
    });

    let notes = JSON.parse(notesArray);
    
    //add to notes file
    notes.push(newNote);

    // write file
    fs.writeFile(path.join(__dirname,'../../data/notes.json'), JSON.stringify(notes), (err) => {
        if (err) throw err;
    });

    // send response
    res.json(notes);
})

// *BONUS* delete note from array 
router.delete('/notes/:id', (req,res)=> {
    // res.json(req.body);
})

module.exports = router;