const exec = require('child_process').exec

const start = () => {
  let content = 'empty'

  exec('dir', (error, stdout, stderr) => content = stdout)

  return content
}

const upload = () => {
  console.log('Request handler "upload" was called.')
  return 'Hello Upload'
}

exports.start = start
exports.upload = upload
