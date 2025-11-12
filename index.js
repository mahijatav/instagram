const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/signup.html'));
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
