const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require("express");
const app = express();

// linked dotenv.config.env file with node app 
dotenv.config({path:'./config.env'});
require('./db/connection');

app.use(express.json()); 
app.use(require('./router/app'));

// get port number from dotenv.config.env file 
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is strting at port ${port}`);
})