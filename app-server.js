var express = require('express');

var api = require('./api/api');
//api.use(express.static('./dist'));

var server = api.listen(3000, function (req, res) {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
