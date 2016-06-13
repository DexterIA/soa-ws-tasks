var validator = require('xsd-schema-validator'),
  fs = require('fs');

fs.readFile('./testFiles/form.xml', 'utf8', function (err, data) {
  validate(data.toString());
});

function validate (xml) {
  validator.validateXML(xml, './testFiles/schema.xsd', function (err, result) {
    if (err) {
      throw err;
    }
    console.log(result.valid);
  });
}