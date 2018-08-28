//将packages/style/components中的scss文件统一引入生成一个index.scss文件
const fs = require('fs')
const path = require('path')
const basepath = path.resolve(__dirname, '../../packages/')
fs.readdir(path.resolve(__dirname, '../../packages/components'), '', function (err, file) {
  console.log(file)
  writeFile(file)
})

function writeFile (fileArr) {
  let contentJson = {}
  fileArr.forEach(item => {
    contentJson[item] = `./packages/${item}/index.js`
  })
  console.log(contentJson)
  fs.writeFile(path.resolve(__dirname, '../../components.json'), JSON.stringify(contentJson), (err) => {
    if (err) throw err
    console.log('index.scss文件已经生成！')
  })
}

