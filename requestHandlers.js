const exec = require('child_process').exec

const start = () => {
  console.log('Request handler "start" was called.')
  let content = 'empty'
  console.log('content:', content)

  exec('find /', (error, stdout, stderr) => {
    content = stdout
  })

  // const sleep = milliSeconds => {
  //   const starTime = new Date().getTime()
  //   while (new Date().getTime() < starTime + milliSeconds);
  // }

  // sleep(10000)
  return content
}

const upload = () => {
  console.log('Request handler "upload" was called.')
  return 'Hello Upload'
}

exports.start = start
exports.upload = upload
