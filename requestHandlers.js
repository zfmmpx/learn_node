const exec = require('child_process').exec

const start = (response) => {
  console.log('Request handler "start" was called.')

  exec('find /c "abc"', (error, stdout, stderr) => {
    console.log('error:', error)
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.write(stdout)
    response.end()
  })
}

const upload = (response) => {
  console.log('Request handler "upload" was called.')
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello Upload')
  response.end()
}

exports.start = start
exports.upload = upload
