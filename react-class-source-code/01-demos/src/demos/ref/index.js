import React from 'react'

export default class RefDemo extends React.Component {
  constructor() {
    super()
    this.objRef = React.createRef()

    // { current: null }
  }

  componentDidMount() {
    // console.log(`span1: ${this.refs.ref1.textContent}`)
    // console.log(`span2: ${this.ref2.textContent}`)
    // console.log(`span3: ${this.ref3.current.textContent}`)
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got'
      this.methodRef.textContent = 'method ref got'
      this.objRef.current.textContent = 'obj ref got'
    }, 1000)
  }

  render() {
    return (
      <>
        <p ref="stringRef">span1</p>
        <p ref={ele => (this.methodRef = ele)}>span3</p>
        <p ref={this.objRef}>span3</p>
      </>
    )
  }
}

// export default () => {
//   return <div>Ref</div>
// }
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
