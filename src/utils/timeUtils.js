import dayjs from 'dayjs'
import constObj from './constObj'

export default {
  parseTime(times, pattern = 'YYYY-MM-DDTHH:mm:ss') {
    if (times === 0) {
      return ''
    }
    if (pattern) {
      return dayjs(times).format(pattern).toLocaleString()
    }
    return dayjs(times).format('YYYY-MM-DDTHH:mm:ss').toLocaleString()
  },
  calcTimeDiff(startT, endT = new Date()) {
    let diff = dayjs(endT).diff(dayjs(startT), 'seconds') * constObj.TIME_UNIT.ONE_SECOND
    const day = Math.floor(diff / constObj.TIME_UNIT.ONE_DAY)
    diff = diff - day * constObj.TIME_UNIT.ONE_DAY
    const hour = Math.floor(diff / constObj.TIME_UNIT.ONE_HOUR)
    diff = diff - hour * constObj.TIME_UNIT.ONE_HOUR
    const minute = Math.floor(diff / constObj.TIME_UNIT.ONE_MINUTE)
    diff = diff - minute * constObj.TIME_UNIT.ONE_MINUTE
    const second = Math.floor(diff / constObj.TIME_UNIT.ONE_SECOND)
    return {
      day: day,
      hour: hour,
      minute: minute,
      second: second,
    }
  },
  formatTime(time) {
    return dayjs(time).format('YYYY-MM-DD')
  }
}