export function getTitle(title) {
  if (isEmptyStr(title)) {
    return import.meta.env.VITE_APP_TITLE
  }
  return `${import.meta.env.VITE_APP_TITLE} - ${title}`
}

export function isEmptyStr(str) {
  return str === undefined || str === null || str.trim() === ''
}

// 转化为  { 文件名: 文件内容 } 格式
export function batchParseJsFile(fileList, callback) {
  if (callback) {
    return callback(fileList)
  }
  return Object.keys(fileList).reduce((target, modulePath) => {
    const moduleName = modulePath.replace(/^.*\/([^/]*)\.\w+$/, '$1')
    const value = fileList[modulePath]
    target[moduleName] = value.default
    return target
  }, {})
}

export function kvObject2UriParam(paramObj) {
  return Object.entries(paramObj).map(([ k, v ]) => {
    return `${k}=${encodeURIComponent(v)}`
  }).join('&')
}

export function startInterval(func, timeRound) {
  func()
  return setInterval(func, timeRound)
}

export function stopInterval(timer) {
  if (timer) {
    clearInterval(timer)
  }
}