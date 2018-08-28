const fs = require('fs')
const path = require('path')
const COMPONENTS_PATH = path.resolve(__dirname, '../../packages/components') //components路径
const STYLE_PATH = path.resolve(__dirname, '../../packages/style/components')//对应样式文件路径
const PREFIX = 'My'
let componentName//组件名称
let fileName//组件名称

//命令行输入文件名称作为组件名
//也作为文件夹名称，css文件名称
// 复制模板中的内容到目标文件夹
//替换vue文件的name

let arguments = process.argv.splice(2)
if (arguments.length == 0) {
  console.log('请输入参数')
} else if (arguments.length > 1) {
  console.log('只接受一个参数')
} else {
  console.log('生成组件名称：', arguments[0])
  fileName = arguments[0].toLowerCase()
  componentName = PREFIX + fileName.substring(0, 1).toUpperCase() + fileName.substring(1)
  createDir()
}

function createDir () {
  fs.mkdir(path.resolve(COMPONENTS_PATH, `${fileName}`), () => {
    fs.writeFile(path.resolve(COMPONENTS_PATH, `./${fileName}/${fileName}.scss`), `//${componentName}`, (err) => {
      if (err) throw err
      console.log('index.scss文件已经生成！')
    })
    fs.writeFile(
      path.resolve(COMPONENTS_PATH, `./${fileName}/index.js`),
      `import ${componentName} from './src/button'
         ${componentName}.install = function (Vue) {
          Vue.component( ${componentName}.name, MyButton)
        }
        export default  ${componentName} `,
      (err) => {
        if (err) throw err
        console.log('index.scss文件已经生成！')
      })
    fs.mkdir(path.resolve(COMPONENTS_PATH, `${fileName}/src`), () => {
      fs.writeFile(
        path.resolve(COMPONENTS_PATH, `./${fileName}/src/index.vue`),
        `<template>
         </template>
        <script>
          export default {
            name: '${componentName}'
          };
        </script> `,
        (err) => {
          if (err) throw err
          console.log('index.scss文件已经生成！')
        })
    })
  })
}

