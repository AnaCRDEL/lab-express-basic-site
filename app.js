const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

app.get('/characters', (request, response, next) => response.sendFile(__dirname + '/views/characters-page.html'));

app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/gallery-page.html'));

app.get('/facts-trivia', (request, response, next) => response.sendFile(__dirname + '/views/facts-trivia-page.html'));

app.listen(3000, () => console.log('My first app listening on port 3000! '));

