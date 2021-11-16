const express = require('express');
const axios = require("axios");

const app = express();

const PORT = 3000;

app.get('/ping', (request, response) => {
    response.status(200).send('Alive');
});

app.get("/load", (req, res) => {
    let start = new Date();
    while ( ( (new Date().getTime() - start.getTime() ) / 1000 ) < 5);
    res.status(200).send('Work done!\n');
});

app.get('/bbox1', (req, res) => {
    axios.get('http://2c21-tp-1_bbox_1:9090/')
    .then(response => res.status(response.status).send(response.data))
    .catch(e => res.status(500).send(e));
});
  
app.get('/bbox2', (req, res) => {
    axios.get('http://2c21-tp-1_bbox_1:9091/')
    .then(response => res.status(response.status).send(response.data))
    .catch(e => res.status(500).send(e));
});

app.listen(PORT, (error) => {
    if (error) {
        return console.log(`Error: ${error}`);
    }

    console.log(`Server listening on port ${PORT}`);
});