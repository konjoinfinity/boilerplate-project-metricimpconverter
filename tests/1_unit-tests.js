const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('whole number input validation', function () {
        assert.equal(convertHandler.getNum('2mil'), 2)
        assert.equal(convertHandler.getNum('100kg'), 100)
      });

      test('decimal number input validation', function () {
        assert.equal(convertHandler.getNum('1.99 liters'), 1.99)
        assert.equal(convertHandler.getNum('2.5 kg'), 2.5)
      });

      test('fractional number input validation', function () {
        assert.equal(convertHandler.getNum('1/12 lbs'), 1/12)
        assert.equal(convertHandler.getNum('3/4 pounds'), 3/4)
      });

      test('fractional number with a decimal input validation', function () {
        assert.equal(convertHandler.getNum('3.4/12 km'), 3.4/12)
        assert.equal(convertHandler.getNum('3/4.1kilometers'), 3/4.1)
      });

      test('double fraction input validation', function () {
        assert.notEqual(convertHandler.getNum('2/3/4miles'), '2/3/4')
        assert.notEqual(convertHandler.getNum('4/3/4liters'), '4/3/4')
      });

      test('no number defaults to 1', function () {
        assert.equal(convertHandler.getNum('kg'), '1')
        assert.equal(convertHandler.getNum('miles'), '1')
      });

      test('valid input metric & imperial units', function () {
        assert.equal(convertHandler.getUnit('KG'), 'kg')
        assert.equal(convertHandler.getUnit('MI'), 'mi')
        assert.equal(convertHandler.getUnit('KM'), 'km')
        assert.equal(convertHandler.getUnit('GAL'), 'gal')
        assert.equal(convertHandler.getUnit('GAL'), 'gal')
        assert.equal(convertHandler.getUnit('L'), 'L')
        assert.equal(convertHandler.getUnit('LBS'), 'lbs')
      });

      test('test for invalid input units', function () {
        assert.equal(convertHandler.getUnit('CM'), undefined)
        assert.equal(convertHandler.getUnit('RPM'), undefined)
      });

      test('test for conversion return units', function () {
        assert.equal(convertHandler.getReturnUnit('KG'), 'lbs')
        assert.equal(convertHandler.getReturnUnit('MI'), 'km')
        assert.equal(convertHandler.getReturnUnit('KM'), 'mi')
        assert.equal(convertHandler.getReturnUnit('GAL'), 'L')
        assert.equal(convertHandler.getReturnUnit('L'), 'gal')
        assert.equal(convertHandler.getReturnUnit('LBS'), 'kg')
      });

      test('test for units spelled out', function () {
        assert.equal(convertHandler.spellOutUnit('KG'), 'kilograms')
        assert.equal(convertHandler.spellOutUnit('LBS'), 'pounds')
        assert.equal(convertHandler.spellOutUnit('KM'), 'kilometers')
        assert.equal(convertHandler.spellOutUnit('MI'), 'miles')
        assert.equal(convertHandler.spellOutUnit('GAL'), 'gallons')
        assert.equal(convertHandler.spellOutUnit('L'), 'liters')
      });

      test('test for converting kg to lbs', function () {
        assert.equal(convertHandler.convert(2, 'KG'), 4.40925)
        assert.equal(convertHandler.convert(5.567,'KG'), 12.27314)
      })
        test('test for converting lbs to kg', function () {
        assert.equal(convertHandler.convert(40, 'LBS'), 18.14368)
        })
        test('test for converting km to mi', function () {
        assert.equal(convertHandler.convert(90, 'KM'), 55.92355)
        })
        test('test for converting mi to km', function () {
        assert.equal(convertHandler.convert(100, 'MI'), 160.934)
        assert.equal(convertHandler.convert(4/5,'MI'), 1.28747)
        })
        test('test for converting gal to liters', function () {
        assert.equal(convertHandler.convert(4,'GAL'), 15.14164)
        })
        test('test for converting liters to gal', function () {
        assert.equal(convertHandler.convert(5,'L'), 1.32086)
        })
});