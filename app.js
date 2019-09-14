var express = require('express');
var app = express();
var path = require('path');

// app.use('/js', express.static(path.join(__dirname + '/public/index.html')));
app.use('/styles', express.static(path.join(__dirname + '/public/styles')));

app.get("", function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

// viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/public/index.html'));
// });

app.listen(8080);

