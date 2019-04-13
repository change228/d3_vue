import axios from 'axios'
import reqErrorMsg from './data/requestErrorMsg'
let cancel
let promiseArr = {}
const CancelToken = axios.CancelToken
axios.defaults.baseURL = '/static/mock/data/'
axios.defaults.headers = { 'X-Requested-With': 'XMLHttpRequest' }
axios.defaults.timeout = 5000
axios.interceptors.request.use(
  config => {
    if (promiseArr[config.url]) {
      promiseArr[config.url]('操作取消')
      promiseArr[config.url] = cancel
    } else {
      promiseArr[config.url] = cancel
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    if (err && err.response) {
      err.message = `${reqErrorMsg.default}：${err.response.status}`
      for (let key in reqErrorMsg) {
        if (err.response.status === key) {
          err.message = reqErrorMsg[key]
        }
      }
    } else {
      err.message = '连接到服务器失败'
    }
    console.error(err.message)
    return Promise.resolve(err.response)
  }
)

export default {
  // get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  },
  // post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res)
      })
    })
  }
}
