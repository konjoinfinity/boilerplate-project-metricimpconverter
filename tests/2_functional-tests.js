// const chaiHttp = require('chai-http');
// const chai = require('chai');
// let assert = chai.assert;
// const server = require('../server');

// chai.use(chaiHttp);

// suite('Functional Tests', function() {
   
//         suite("GET request at /api/convert to convert", () => {
//           test("10L Conversion to Gallons (Valid)",(done) => {
//             chai
//               .request(server)
//               .get("/api/convert")
//               .query({ input: "10L" })
//               .end((err, res) => {
//                 assert.equal(res.status, 200);
//                 assert.equal(res.body.initNum, 10);
//                 assert.equal(res.body.initUnit, "L");
//                 assert.equal(res.body.returnNum, 2.64, 0.1);
//                 assert.equal(res.body.returnUnit, "gal");
//                 done();
//               });
//             })
//         })
          
//         suite("GET request for invalid unit input", () => {
//             test("32g (Invalid) to return invalid",(done) => {
//               chai
//                 .request(server)
//                 .get("/api/convert")
//                 .query({ input: "32g" })
//                 .end((err, res) => {
//                   assert.equal(res.status, 200);
//                   assert.equal(res.body.initUnit, undefined);
//                   assert.equal(res.text, 'invalid unit')
//                   done();
//                 });
//               })
//           })

//           suite("GET request for invalid fraction input", () => {
//             test("3/7.2/4kg (Invalid) to return invalid",(done) => {
//               chai
//                 .request(server)
//                 .get("/api/convert")
//                 .query({ input: "3/7.2/4kg" })
//                 .end((err, res) => {
//                   assert.equal(res.status, 200);
//                   assert.equal(res.body.initUnit, undefined);
//                   assert.equal(res.text, 'invalid number')
//                   done();
//                 });
//               })
//           })

//           suite("GET request for invalid fraction and unit", () => {
//             test("3/7.2/4kilomegagram (Invalid) to return invalid",(done) => {
//               chai
//                 .request(server)
//                 .get("/api/convert")
//                 .query({ input: "3/7.2/4kilomegagram" })
//                 .end((err, res) => {
//                   assert.equal(res.status, 200);
//                   assert.equal(res.body.initUnit, undefined);
//                   assert.equal(res.text, 'invalid number and unit')
//                   done();
//                 });
//               })
//           })

//           suite("GET request at /api/convert to convert with no number", () => {
//             test("[No number]kg Conversion to Gallons (Valid)",(done) => {
//               chai
//                 .request(server)
//                 .get("/api/convert")
//                 .query({ input: "kg" })
//                 .end((err, res) => {
//                   assert.equal(res.status, 200);
//                   assert.equal(res.body.initNum, 1);
//                   assert.equal(res.body.initUnit, "kg");
//                   assert.equal(res.body.returnNum, 2.2, 0.1);
//                   assert.equal(res.body.returnUnit, "lbs");
//                   done();
//                 });
//               })
//           })



// });


// // Convert with no number such as kg: GET request to /api/convert.