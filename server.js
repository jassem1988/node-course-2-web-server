const express = require('express'),
      hbs     = require('hbs'),
      fs      = require('fs');
const port = process.env.PORT || 3000; //to connect to heroku OR locol host

var app = express();


hbs.registerPartials(__dirname + '/views/partials'); //Let hbs use partials
app.set('view engine', 'hbs');


app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (error) => {
    if(error) {
      console.log('Unable to append to server.log');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenace.hbs');
// });

app.use(express.static(__dirname + '/public')); //let express use /public folder

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: "Projects Page"
  });
});


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
