const program = require('commander')
const {createAction} = require('./actions')

module.exports = () => {
  program.command('create <projectName> [options...]')
  .description('clone a repository into a folder')
  .action(createAction)
}