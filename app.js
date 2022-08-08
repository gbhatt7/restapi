const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postRoute = require('./routes/posts');

app.use('/posts', postRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
    process.env.db_connection,
    { useNewUrlParser: true },
    () => console.log('Conneted to DB')
);

//How do we start to listening to the server
app.listen(3000);