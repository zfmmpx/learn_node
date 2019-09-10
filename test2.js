// const time = (timeout) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//       console.log(111)
//     }, timeout)
//   })
// }

// const asyncFunc = async () => {
//   await time(5000)
//   console.log(222)
//   return 'aaab'
// }

// const generateFunc = function* () {
//   const a = yield asyncFunc()
//   console.log(3)
//   console.log('a:', a)
// }
// const g = generateFunc()
// g.next()
// g.next()
// g.next(true)

const reg = /(\d|a-z|A-Z){8,12}/g
console.log(
  reg.test('12121232a212')

)
