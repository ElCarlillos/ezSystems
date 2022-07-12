const express = require('express');
const bp = require('body-parser');
const app = express();

//Middleware
app.use(express.static(__dirname + '/public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

// Server settings
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

// Load main view:
app.get('/', (req, res) => {
    res.render('index')
});

// Open server
app.listen(5000, () => {
    console.log("App running on port 5000...");
});




