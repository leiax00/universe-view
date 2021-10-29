import service from '@/service/service'
import { kvObject2UriParam } from '@/utils'

export const get = (url, data, config) => {
  return service({
    url: `${url}?${kvObject2UriParam(data)}`,
    config,
    method: 'get'
  })
}

export const post = (url, data, config) => {
  return service({
    url: url,
    method: 'post',
    config,
    data
  })
}

export const put = (url, data, config) => {
  return service({
    url: url,
    method: 'put',
    data,
    config
  })
}

export const remove = (url, data, config) => {
  return service({
    url: `${url}?${kvObject2UriParam(data)}`,
    method: 'delete',
    config
  })
}