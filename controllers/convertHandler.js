module.exports = class ConvertHandler {
  constructor() {
    this.units = {
      gal: ["gallons", "l", 3.78541],
      l: ["liters", "gal", 0.26417],
      kg: ["kilograms", "lbs", 2.20462],
      lbs: ["pounds", "kg", 0.453592],
      mi: ["miles", "km", 1.60934],
      km: ["kilometers", "mi", 0.621371],
    };
  }

  divideFraction(input) {
    input = input.join("").split("/");
    return input.length <= 2 ? input.reduce((a, b) => a / b) : null;
  }

  getNum(input) {
    input = input.toLowerCase().match(/[^a-z]/gi) || 1;
    return input !== 1 ? this.divideFraction(input) : 1;
  }

  getUnit(input) {
    input = input.toLowerCase().match(/[a-z]/gi);
    return input
      ? Object.keys(this.units).includes(input.join(""))
        ? input.join("")
        : null
      : null;
  }

  getReturnUnit(initUnit) {
    initUnit = initUnit.toLowerCase();
    return this.units[initUnit][1];
  }

  spellOutUnit(unit) {
    return this.units[unit][0];
  }

  convert(initNum, initUnit) {
    initUnit = initUnit.toLowerCase();
    return initNum * this.units[initUnit][2];
  }

  getString(initNum, initUnit, returnNum, returnUnit) {
    return {
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string:
        initNum +
        " " +
        this.spellOutUnit(initUnit) +
        " converts to " +
        returnNum.toFixed(5) +
        " " +
        this.spellOutUnit(returnUnit),
    };
  }
};
