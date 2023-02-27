"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function (req, res, next) {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    if (initNum === "invalid number" && initUnit === "invalid unit") {
      res.json("invalid number and unit");
      return;
    }
    if (initNum === "invalid number") {
      res.json("invalid number");
      return;
    }
    if (initUnit === "invalid unit") {
      res.json("invalid unit");
      return;
    }
    var returnNum = convertHandler.convert(initNum, initUnit);

    console.log(returnNum, "returnnum");
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    console.log(returnUnit, "returnunit");
    var spelledUnit = convertHandler.spellOutUnit(initUnit, returnUnit);

    var toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      spelledUnit
    );
    console.log(toString);
    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: toString,
    });
  });
};
