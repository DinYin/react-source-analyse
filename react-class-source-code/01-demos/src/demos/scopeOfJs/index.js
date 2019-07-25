var a = 5;
function todo() {
  var a = 9;
  return function(){
    a=7
  }
}
todo()();
console.log(a);

var num = 1;          
function func() {
　  var num = 2;      
    return num;
}
console.log(func(),a);

var i=5;
function fun(){
  console.log('i1',i);
  if(true){
    var i =6;
    console.log('i2',i)
  }
}


function text6() {
  var a = 1;
  function b() {
    a = 10;
    return;
    function a() { }
  }
  b();
  console.log(a);         //  ？
}
text6();