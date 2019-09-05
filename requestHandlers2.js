const recursiveFunc = (result, n) => {
  if (n === 0) {
    return result
  }
  result = result + n
  result = recursiveFunc(result, n - 1)
  return result
}

const sleep = milliSeconds => {
  var startTime = new Date().getTime()
  while (new Date().getTime() < startTime + milliSeconds);
}

const start = response => {
  console.log('Request handler "start" was called.')

  setTimeout(() => {
    sleep(10000)
    console.log('start', 10000)
  }, 0)
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('recursiveFunc')
  response.end()

}

const upload = response => {

  setTimeout(() => {
    sleep(5000)
    console.log('upload', 5000)
  }, 0)

  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.write('upload')

  response.end()
}

exports.start = start
exports.upload = upload
