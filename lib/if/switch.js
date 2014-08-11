var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

// add tests
suite.add('#1#if', function() {
  var handle = 10;
  var done = false
  if( handle == 1){
  }else if( handle == 2){
  }else if( handle == 3){
  }else if( handle == 4){
  }else if( handle == 5){
  }else if( handle == 6){
  }else if( handle == 7){
  }else if( handle == 8){
  }else if( handle == 9){
  }else if( handle == 10){
    done = true
  }
})
.add('#2#switch', function() {
  var handle = 10;
  var done = false
  switch(handle){
    case 1:break;
    case 2:break;
    case 3:break;
    case 4:break;
    case 5:break;
    case 6:break;
    case 7:break;
    case 8:break;
    case 9:break;
    case 10:
      done = true
      break;
  }
})
.on('complete', function() {
  console.log(this.join("\n"))
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: false });

