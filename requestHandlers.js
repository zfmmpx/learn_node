const start = () => {
  console.log('Request handler "start" was called.')
  const sleep = milliSeconds => {
    const starTime = new Date().getTime()
    while (new Date().getTime() < starTime + milliSeconds);
  }

  sleep(10000)
  return 'Hello Start'
}

const upload = () => {
  console.log('Request handler "upload" was called.')
  return 'Hello Upload'
}

exports.start = start
exports.upload = upload
