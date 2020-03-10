const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/public'));

// app.listen('3000', function() {
//   console.log('Servidor web escuchando en el puerto 3000');
// });

const path = require('path');
const PORT = process.env.PORT || 5000;

var bodyParser = require('body-parser');

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .get('/', function(req, res) {
        res.sendFile('public/index.html', {root: __dirname });
    })

    .listen(PORT, () => console.log(`Listening on ${PORT}`));