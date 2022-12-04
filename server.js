const dotenv = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const path = require('path');
const expressEjslayout = require('express-ejs-layouts');
const mongoDB = require('./config/db');
const app = express();

// Envirnment variables
const PORT = process.env.SERVER_PORT 

// Ejs setup
app.set("view engine","ejs");
app.set("layout", 'layout/app.ejs');
app.use(expressEjslayout);

// Static folders  
app.use('/assets' , express.static(path.join(__dirname, '/assets'))) 

// Body data
app.use(express.json());
app.use(express.urlencoded({ extended:false }))

// Routes
app.use('/studentes',require('./routes/studentsRoute'))


// Mongo server connection
mongoDB() 

// Server listen
app.listen(PORT, () => console.log(`Server is runing on port http://localhost:${PORT}`.bgGreen.black));     