import MyButton from './src/button'

/* istanbul ignore next */
MyButton.install = function (Vue) {
  Vue.component(MyButton.name, MyButton)
}

export default MyButton
