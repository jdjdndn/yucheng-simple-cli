#!/usr/bin/env node

const program = require('commander')
const helpOptions = require('./lib/core/help.js')
const createCore = require('./lib/core/create.js')
//版本号
program.version(require('./package.json').version) 
// 帮助和可选信息
helpOptions()
// 克隆项目并安装依赖
createCore()

program.parse(process.argv)
