import Axios from 'axios'

export function getDetailImg (goodsId) {
  return Axios.get('http://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/?data={%22id%22:%22' + goodsId + '%22}')
}
