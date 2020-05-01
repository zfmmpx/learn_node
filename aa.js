// // const a = {
// //   aa: function aa() {
// //     console.log('this:', this)
// //   }
// // }
// // const b = {
// //   b: 'bb'
// // }
// // a.aa.bind(b)()


// const DD = function() {
//   this.a = 'aaa'
// }
// const dd = new DD()
// console.log('dd:', dd)


// const c = {

//   aa: function aa() {
//     console.log('this:', this)
//   }
// }

// c.aa()
var a = 'aaa'

const ee = {
  eee: () => {
    console.log('this:', this)
    // console.log('global:', global)
  },
  eeee: function () {
    console.log('this2:', this)
  }
}

const bbbb = {
  b: 'bb'
}

ee.eee()
ee.eeee.bind(bbbb)()
ee.eeee.apply(bbbb, [])