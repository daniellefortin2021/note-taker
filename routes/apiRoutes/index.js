const router = require('express').Router();
const { notes } = require('../../data/notes.json');

//conected to notes array
router.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
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