const express = require('express'); //Import the express dependency
const path = require('path');
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3000;                  //Save the port number where your server will be listening

//app.use(express.static('static'));
//app.use('/static', express.static(path.join(__dirname, 'images')))
app.use(express.static(path.join(__dirname, 'static'), {index: false}));
app.use(express.static(path.join(__dirname, 'static/images'), {index: false}));
app.use(express.static(path.join(__dirname, 'images'), {index: false}));
//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile(path.resolve('./index.html'));      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});