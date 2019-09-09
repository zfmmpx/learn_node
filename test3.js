const time = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
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
asyncFunc()


