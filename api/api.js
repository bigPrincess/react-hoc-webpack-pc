var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = module.exports = express();
var proxyWeb = require('express-http-proxy');
var _ = require('lodash');
var compression = require('compression');
var fs = require('fs');
var multer = require('multer');
var path = require('path');
api.use(logger('dev'));
api.use(compression());
api.use('/api/', bodyParser.json({"limit": "100000kb"})); // for parsing application/json
api.use('/api/', bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

//api.use(multer()); // for parsing multipart/form-data

require('./sample/routes')(api);

// 测试服务器地址

var urlPre = '/';
api.use('/api/**', proxyWeb("rest location", {
  forwardPath: function (req, res) {
    var url = urlPre + req.originalUrl.replace('/api', '');
    console.log(url);
    return url;
  }
}));
module.exports = api;
