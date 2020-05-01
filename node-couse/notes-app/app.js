const chalk = require('chalk')
const yargs = require('yargs')
const getNodes = require('./notes.js')

// console.log(process.argv)

yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note!!!',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler: (argv) => {
    console.log('Title', argv.title)
    console.log('Body', argv.body)
  },
})

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
    console.log('Removing the note')
  }
})

yargs.command({
  command: 'list',
  describe: 'list the notes',
  handler: () => {
    console.log('listing out all notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: () => {
    console.log('reading the note')
  }
})



// console.log(yargs.argv)
yargs.parse()

console.log(chalk.inverse.blue('hello'))

const name = 'Sindre'
console.log(chalk.green('Hello %s'), name, 'abc')