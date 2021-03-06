var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 5000));



app.set('trust proxy', 'loopback');
app.use('/scripts/', express.static(__dirname + '/dist/scripts/'));

app.use('/styles/', express.static(__dirname + '/dist/styles/'));

app.use('/images/', express.static(__dirname + '/dist/images/'));
app.use('/fonts/', express.static(__dirname + '/dist/fonts/'));


app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/dist/')
  });
});

// any other routes:
app.all('/*', function(req, res, next) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/dist/')
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
