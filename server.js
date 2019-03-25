const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express hbs engine
hbs.registerPartials(`${ __dirname }/views/partials`);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'aarón'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmicrocopydental.com%2Fimages%2Feasyblog_images%2F5278%2Fb2ap3_thumbnail_512-youtube-icon.png&f=1'
    });
});

app.listen(port, () => {
    console.log(`Listening requests in ${ port } port.`);
});