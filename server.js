var express = require('express'),
	app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));

// views is directory for all template files
app.set('app', __dirname + '/app');

app.get('/', function (request, response) {
	response.render('/login');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});