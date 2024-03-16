const express = require("express");
const app = express();

require('dotenv').config();
const dbConfig = require('./config/dbConfig');

const userRoute = require('./routes/useRoutes');
app.use(express.json())// if request contains json body it will parse json so that backend server could use it

app.use('/', userRoute);

app.listen(3001, ()=>{
    console.log('Server is running on localhost:3001')
})