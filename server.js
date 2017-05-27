var express = require('express');
const morgan = require('morgan');
const path = require('path');
const bp = require('body-parser');

var app = express();
app.use(bp.json());
app.use(bp.urlencoded({
  extended: true
}));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(8000, function onListen() {
  console.log('Server started on http://localhost:8000/');
});


app.get('*', (request, response) => {
  console.log('--------- Request Header ----------');
  console.log(request.headers);
  console.log('-----------------------------------');
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});
