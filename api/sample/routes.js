var Backbone = require('backbone');

module.exports = function (api) {
  api.route('/api/sample')
    .get(function (req, res) {
      var fixture = require('./data');
      var model = new Backbone.Model(fixture());
      res.status(200).json(model);
    });
  api.route('/api/sample/login')
    .post(function (req, res) {
      let userName = req.body.userName;
      let password = req.body.password;
      if(userName == password) {
        res.status(200).json({
          code: 200,
          message: '',
          dataMap: {
            userName: userName,
            name: '测试用户'
          }
        });
      } else {
        res.status(200).json({
          code: 401,
          message: '登录失败',
          dataMap: {
          }
        });
      }
    });
};
