import { Message } from 'element-ui'

export default ({ app, redirect }, inject) => {
  // 创建实例
  const http = app.$axios.create({
    baseURL: process.env.baseURL,
    timeout: 5000,
  })

  // 添加拦截器
  http.onRequest((config) => {
    console.log('making request to ' + config.url)
  })
  http.onResponse((response) => {
    const { data } = response
    if (response.status === 200 && data.code === 0) {
      return data
    } else {
      if (process.client) {
        Message({
          message: data.message,
          type: 'error',
        })
      } else {
      }
      return Promise.reject(new Error(data.message || 'Error'))
    }
  })
  http.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })

  // 同时注入到context和vue实例中,通过$http访问
  inject('http', http)
}
