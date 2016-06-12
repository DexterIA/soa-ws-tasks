var xsd = require('libxml-xsd');

xsd.parseFile(schemaPath, function(err, schema){
  schema.validate(documentString, function(err, validationErrors){
    // err contains any technical error
    // validationError is an array, null if the validation is ok
  });
});
