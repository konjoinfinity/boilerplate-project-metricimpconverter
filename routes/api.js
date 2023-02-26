'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
  .get(function (req, res) {
  console.log(req.query.input)
  convertHandler.getNum(req.query.input)
  })
  

};
