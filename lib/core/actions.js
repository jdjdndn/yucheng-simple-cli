const {promisify} = require('util')
const chalk = require('chalk')
const download = promisify(require('download-git-repo'))
const open = require('open')

const {vueRepo} = require('../config/repo-config')

const { commandSpawn } = require('../utils/teminal')
const { connect } = require('http2')

const createAction = async (project, options) => {
  // git clone 远程项目
  await download(vueRepo, project, {clone: true})
  console.log(chalk.red('克隆项目完成'))
  //判断平台
  const command = process.platform === 'win32'? 'npm.cmd':'npm'
  // 执行npm install
  await commandSpawn(command, ['install'], {cwd: `./${project}`})
  console.log('npm install 执行完成')
  // npm run serve // 运行时进程不结束会阻塞后面代码的执行,这里要么不加await 要么将open提到前面
  commandSpawn(command, ['run', 'serve'], {cwd: `./${project}`})
  // 自动打开浏览器
 setTimeout(() => {
  open('http://localhost:8080/')
 }, 0);
}

module.exports = {
  createAction
}