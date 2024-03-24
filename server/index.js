const express = require("express");
const app = express();
const cors =require('cors');
require('dotenv').config();

const dbConfig = require('./config/dbConfig');

const userRoute = require('./routes/userRoutes');
const movieRoute = require('./routes/movieRoutes');

app.use(cors());
app.use(express.json())// if request contains json body it will parse json so that backend server could use it

app.use('/api/user', userRoute);
app.use('/api/movie',movieRoute);
app.listen(3001, ()=>{
    console.log('Server is running on localhost:3001')
})