//将packages/style/components中的scss文件统一引入生成一个index.scss文件
const fs = require('fs')
const path = require('path')
let Components = require('../../components.json');
Components = Object.keys(Components)
const basepath = path.resolve(__dirname, '../../packages/')

let indexContent = '@import "./common/base";\n'
Components.forEach(function (key) {
  indexContent += '@import "./components/' + key + '";\n'
})
fs.writeFile(path.resolve(__dirname, '../../packages/style/index.scss'), indexContent,(err) => {
  if (err) throw err;
  console.log('index.scss文件已经生成！');
})
