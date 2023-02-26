const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
   

});


// Convert a valid input such as 10L: GET request to /api/convert.
// Convert an invalid input such as 32g: GET request to /api/convert.
// Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
// Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
// Convert with no number such as kg: GET request to /api/convert.