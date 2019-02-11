var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(`${__dirname}/public`)).listen(3010, function () {
  console.log('Server running on 3010...');
});
