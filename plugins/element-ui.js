import Vue from 'vue'
import { Message, MessageBox, Menu, MenuItem, Dropdown } from 'element-ui'

Message.install = function (Vue) {
  Vue.prototype.$message = Message
  Vue.prototype.$confirm = MessageBox.confirm
}

Vue.use(Message)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dropdown)
