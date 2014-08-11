var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

function a(nStr) {
  var rgx, x, x1, x2;
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
function b(nStr) {
  var rgx;
  nStr += '';
  return nStr.replace(/(?!\b)(?=(?:\d{3})+(?:\.|$))/g, ',');
}
function c(nStr) {
  return nStr.toLocaleString();
}
console.log(a(112896547187.321))
console.log(b(112896547187.321))
console.log(c(112896547187.321))
// add tests
suite.add('#1', function() {
  a(112896547187.321)
})
.add('#2', function() {
  b(112896547187.321)
})
.add('#3', function() {
  c(112896547187.321)
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run({ async: false });
