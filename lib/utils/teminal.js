/**
 * 执行终端相关的代码
 */

 // exec 对spawn 进行了一层封装, spawn更接近于底层
 const { spawn, exec } = require('child_process')

 const commandSpawn = (...args) => {
   return new Promise((resolve, reject) => {
     const childProcess = spawn(...args)
     childProcess.stdout.pipe(process.stdout) // 子进程的信息打印到终端
     childProcess.stderr.pipe(process.stderr) // 子进程的错误信息打印到终端
     childProcess.on("close", () => { // 告诉别人自己的事做完了
       resolve()
     })
   })
 }

 module.exports = {
  commandSpawn
 }
