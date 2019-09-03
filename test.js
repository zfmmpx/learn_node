// const _ = require('lodash')

const originData = [{ a: 1 }, { a: 2 }]
const originData2 = [{ a: 1 }, { a: 2 }]

const pureFunction = v => _.chain(v).set('b', v.a).unset('a').value()
// tap
const a = _.chain(originData)
  .map(v => {
    console.log('v:', v)
    // _.chain(v).tap(v2 => v2.b = v2.a).unset('a').value()
    // _.chain(v).set('b', v.a).tap(v2 => console.log(22222222, v2)).unset('a').value()
    // console.log(55555, _.tap(v, v2 => v2.b = v2.a))
    // console.log(6666, _.chain(v).set('b', v.a).value())
    // console.log(777, aaa.tap(v3 => v3.za = v3.a).value())
    const aaa = _.chain(v).tap(v22 => v22.b = v22.a)
    console.log('aaa:', aaa)
    console.log(777, aaa.set('x', v.a).value()) // 777 { a: 2, b: 2, x: 2 }
    console.log(888, aaa.set('y', 888).value()) // 888 { a: 2, b: 2, x: 2, y: 888 }
    console.log(999, aaa.set('z', 999).value()) // 999 { a: 2, b: 2, x: 2, y: 888, z: 999 }
    // cosnt
    _.chain(v).map(v2 => v2).tap(v2 => console.log(22222222, v2)).unset('a').value()
    // 22222222 { a: 1, b: 1 }
    // _.chain(v).update('b', v2 => v2 = v.a).unset('a').value()
    return v
  })
  .value()

// 平常的方法
const b = _(originData2)
  .map(v => {
    console.log('v:', v)

    // _.chain(v).set('b', v.a).unset('a').value()
    _.chain(v).update('b', () => v.a).unset('a').value()
    // _.unset(v, 'a')
    console.log('vvv:', v)
    return v
  })
  .value()

console.log('a:', a)
console.log('b:', b)
console.log('originData:', originData)
console.log('originData2:', originData2)

// console.log(
//   _.chain('  abc  ')
//     .trim()
//     .thru(function(value) {
//       return [value]
//     })
//     .value()
// )
