const express = require('express'),
      hbs     = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public')); //let express use /public folder

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  // res.send({
  //   name: 'Jassem',
  //   likes: [
  //     'coding',
  //     'reading'
  //   ]
  // });

  res.render('home.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear(),
    name: 'Jassem Al-Buloushi',
    websiteName: "www.JassemAwesome.com"
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});


app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
