const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Import Routes
const postRoutes = require('./routes/posts');

//App middleware
app.use(bodyParser.json());
app.use(cors());

//Route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://LNK:lnkf.1995@cluster0.i4vc5bk.mongodb.net/mernCrud';

mongoose.connect (DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error, err'));


app.listen(PORT, ()  => {
    console.log(`App is runing on ${PORT}`);
});