var validator = require('xsd-schema-validator'),
  fs = require('fs');

fs.readFile('./testFiles/form.xml', 'utf8', function (err, data) {
  validator.validateXML(data.toString(), './testFiles/schema.xsd', function (err, result) {
    if (err) {
      throw err;
    }
    console.log(result.valid);
  });
});