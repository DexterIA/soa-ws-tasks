var xmlrpc = require('xmlrpc'),
    server = xmlrpc.createServer({ host: 'localhost', port: 9090 });

server.on('anAction', function (err, params, callback) {
  console.log('Hello, ' + params);
  callback(null, 'Method was called');
});
console.log('XML-RPC server listening on port 9090');