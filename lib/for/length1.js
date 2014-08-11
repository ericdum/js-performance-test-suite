var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

// add tests
suite.add('#1#realtime', function() {
  var test = [11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  for(var i=0; i<test.length--; i++){
  }
})
.add('#2#preget', function() {
  var test = [11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
  var length = test.length
  for(var i=0; i<length--; i++){
    test.pop();
  }
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
