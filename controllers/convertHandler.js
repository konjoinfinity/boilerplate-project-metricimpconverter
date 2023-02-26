function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;

    let nums = String(input).match(/[0-9]+/g)
    if(nums.length <=2){
    result = Number.isInteger(Number(input))
    } else {
      result = 'Invalid Input Error'
    }
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit, input) {
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
