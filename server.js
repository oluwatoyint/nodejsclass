const express = require('express');
const hbs = require('hbs');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));

app.get('/', (req,res) =>{
    res.render('home.hbs'), {
      pageTitle: 'Home Page',
      welcomeMessage: 'Welcome to My website',
      currentYear: new Date().getUTCFullYear();

    }

})

app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>');

});

app.get('/about', (req,res) => {

    res.send('About Page');

});

// bad - send back json with errorMessage
app.get ('/bad', (req,res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});
app.get ('/contactus', (req,res) => {
    res.send('Shop L07b Ikeja City Mall Alausa Ikeja');
    });

app.listen(3000, () => {
    console.log("listing on port 3000");
});