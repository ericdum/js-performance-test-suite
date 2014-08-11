var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

var a = []
function indexOf(a, handle){
  for(var i=0, l=a.length; i<l; i++) if( a[i] == handle ) return i;
}

for(var i=0; i<500; i++){
  a.push(i)
}
suite
.add('#1', function() {
  a.indexOf(250)
})
.add('#2', function() {
  indexOf(a, 250)
})
.on('complete', function() {
  console.log(this.join("\n"))
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: false });
