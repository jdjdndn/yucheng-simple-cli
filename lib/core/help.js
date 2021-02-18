const program = require('commander')

module.exports = () => {
  program.option('-y --yucheng', 'yucheng cli ')
  program.option('-d --desc <desc>', 'a desctination folder,例如 -d /src/components')
  program.option('-f --framwork <framwork>', '通过传入的framwork来判断是什么框架,例如vue,react')
  
  program.on('--help', () => {
    console.log('hello world')
  })
}
