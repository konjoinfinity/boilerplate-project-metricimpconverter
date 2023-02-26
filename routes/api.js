'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res) {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    if (!initNum && !initUnit) {
      res.send("Number And Units Are Invalid");
      return;
    } else if (!initNum) {
      res.send("Number Is Invalid");
      return;
    } else if (!initUnit) {
      res.send("Units Are Invalid");
      return;
    }
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let toString = convertHandler.getString(initNum,initUnit,returnNum,returnUnit);
    res.json({ initNum, initUnit, returnNum, returnUnit, string: toString });
  });
};
