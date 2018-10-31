const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public')); //let express use /public folder

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Jassem',
    likes: [
      'coding',
      'reading'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});


app.listen(3000);
