const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test('whole number input validation', function () {
        assert.isTrue(convertHandler.getNum(2))
        assert.isNotTrue(convertHandler.getNum(2.5))
      });

      test('decimal number input validation', function () {
        assert.isNotFalse(convertHandler.getNum(2))
        assert.isFalse(convertHandler.getNum(2.5))
      });

      test('fractional number input validation', function () {
        assert.isNotFalse(convertHandler.getNum(2))
        assert.isFalse(convertHandler.getNum(3/4))
      });

      test('fractional number with a decimal input validation', function () {
        assert.isFalse(convertHandler.getNum(2.3/3))
        assert.isNotFalse(convertHandler.getNum(4))
      });

      test('double fraction input validation', function () {
        assert.notEqual(convertHandler.getNum(2.3), 'Invalid Input Error')
        assert.equal(convertHandler.getNum('4/3/4'), 'Invalid Input Error')
      });
});

// convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
// convertHandler should correctly read each valid input unit.
// convertHandler should correctly return an error for an invalid input unit.
// convertHandler should return the correct return unit for each valid input unit.
// convertHandler should correctly return the spelled-out string unit for each valid input unit.
// convertHandler should correctly convert gal to L.
// convertHandler should correctly convert L to gal.
// convertHandler should correctly convert mi to km.
// convertHandler should correctly convert km to mi.
// convertHandler should correctly convert lbs to kg.
// convertHandler should correctly convert kg to lbs.