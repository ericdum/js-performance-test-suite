var ab = require('ab');
var fs = require('fs');

var fn = function (callback) {
  fs.exists(__filename, function (exists) {
    callback(null, exists);
  });
};

ab.run(fn, {
  concurrency: 50,
  requests: 100000
});
