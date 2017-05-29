const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bp = require('body-parser');

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({
  extended: true,
}));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(8000, function onListen() {
  console.log('Server started on http://localhost:8000/');
});

app.get('/TSTest/api/rest/driver/manufactures', (request, response) => {
  console.log('--------- Request Header ----------');
  console.log(request.headers);

  console.log('-----------------------------------');

  console.log('------------------------');
  return response.json({
    data: 'it\'s ok  baby',
  });
});

app.get('/*', (request, response) => {
  console.warn();
  console.erorr('---  Here ---');
  response.sendFile(path.join(__dirname, 'dist/index.html'));
});
