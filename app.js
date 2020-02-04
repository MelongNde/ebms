//Import Libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const daemon = require('daemon');
const mongoose = require('mongoose');
//Import custom modules

//New Express App
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//Load routes
app.use(bodyParser.json());
app.use(config.API_PATH, routes);

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
        console.log('Database connected Successfully')
}).catch((err) => {
        console.log('Unable to connect with the database' + err.stack)
});
app.listen(config.PORT, function(){
    console.log('Server started at - ' + config.getHTTPUrl() +' : Version '+ config.VERSION);
});