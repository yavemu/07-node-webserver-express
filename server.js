const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// HBS
hbs.registerHelper('getAnio', () => new Date().getFullYear());

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    // res.send('Hello World')
    res.render('home', {
        nombre: "Yamid"
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port)
console.log(`Se ejecuto la aplicación exitosamente por el puerto ${port}`);