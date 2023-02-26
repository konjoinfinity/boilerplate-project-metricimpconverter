function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
   
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
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    console.log(!input.match(/(\d+)/));
//     console.log(input.match(/[1-9][0-9]*(?:\/[1-9][0-9])*/g))
//     console.log(input.match(/[a-zA-Z]+/g))
// // { initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' }
//     let nums = input.match(/[1-9][0-9]*(?:\/[1-9][0-9])*/g) 
//     let units = input.match(/[a-zA-Z]+/g)
//     console.log(typeof(input))
//     console.log(input[0])
   

//     if(input.match(/[a-zA-Z]+/g).toLowerCase() == 'mi' || 'miles' || 'mile') {
//       if (nums.length == 1){
//         result = nums[0] * miToKm
//       }
//     }
//     console.log(result)
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
