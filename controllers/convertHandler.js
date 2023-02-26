const splitNumStr = (input) => {
  let number = input.match(/[.\d\/]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g)[0];
  return [number[0], string];
}
const fractionCheck = (fraction) => {
  let nums = fraction.split("/");
  if (nums.length > 2) {
    return false;
  }
  return nums;
}

function ConvertHandler() {
  
  this.getNum = function(input) {
        let result = splitNumStr(input)[0];
        let nums = fractionCheck(result);
        if (!nums) {
          return undefined;
        }
        let num1 = nums[0];
        let num2 = nums[1] || "1";
        result = parseFloat(num1) / parseFloat(num2);
        if (isNaN(num1) || isNaN(num2)) {
          return undefined;
        }
      console.log(result)
        return result;
  };
  
  this.getUnit = function(input) {
    let result = splitNumStr(input)[1].toLowerCase();
    switch (result) {
      case "km":
        return "km";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "mi":
        return "mi";
      case "l":
        return "L";
      case "kg":
        return "kg";
      default:
        return undefined;
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    switch (unit) {
      case "km":
        return "mi";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "l":
        return "gal";
      case "kg":
        return "lbs";
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function(initUnit) {
    let unit = initUnit.toLowerCase();
    switch (unit) {
      case "km":
        return "Kilometers";
      case "gal":
        return "Gallons";
      case "lbs":
        return "Pounds";
      case "mi":
        return "Miles";
      case "l":
        return "Liters";
      case "kg":
        return "Kilograms";
      default:
        return "Unknown";
    }
  };
  
  this.convert = function(initNum, initUnit) {
    let result;
    let unit = initUnit.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (unit) {
      case "km":
        result = initNum / miToKm;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result = undefined;
    }
    return parseFloat(result.toFixed(2));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
