const express = require('express');
const PORT = process.env.PORT || 3001;

// const { notes } = require('./data/notes.json');

const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// express app
const app = express();

//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

//parse incoming JSON data
app.use(express.json());

app.use('/', apiRoutes);
// app.use('/', htmlRoutes)


// sets up the server
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}`);
  });