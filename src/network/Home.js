import { request } from './request'
import Axios from 'axios'

export function getHomeMultidata () {
  return request({
    url: '/home/multidata'
  })
}

export function getTop100 () {
  return Axios.get('http://open.kiwifruits.cn/public/index.php/api/v1/qtk' + '/baokuan?app_key=OjRY3esp&v=1.0')
}
