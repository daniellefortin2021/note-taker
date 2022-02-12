const router = require('express').Router();
const fs = require('fs');
// const { notes } = require('notes.json');

//conected to notes array
router.get('/api/notes', (req, res) => {
    fs.readFile('./data/notes.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedNotes = JSON.parse(data);
            res.json(parsedNotes);
                }
    })
    
    // let results = notes;
    // console.log(req.query)
    // res.json(results);
});

//post to notes array
router.post('/api/notes', (req, res) => {
    res.json(req.body);
})

// delete note from array 
router.delete('/api/notes', (req,res)=> {
    res.json(req.body);
})

module.exports = router;