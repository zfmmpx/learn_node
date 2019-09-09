const time = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
      console.log(111)
    }, timeout)
  })
}

const asyncFunc = async () => {
  await time(5000)
  console.log(222)
  return 'aaab'
}

const generateFunc = function* () {
  const a = yield asyncFunc()
  console.log(3)
  console.log('a:', a)
}
const g = generateFunc()
g.next()
g.next()
g.next(true)

const asyncFunc2 = async() => {
  const b = await asyncFunc()
  console.log('b:', b)
}
const asyncFunc3 = async() => {
  const c = await asyncFunc()
  console.log('c:', c)
}

asyncFunc2()
asyncFunc3()


const aaa = () => {
  let b = 0
  console.time('aaa')
  while (b < 100000) {
    // console.log(b)
    b += 1
  }
  console.timeEnd('aaa')
  console.log('b:', b)
}
aaa()

setImmediate
