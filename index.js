import { DateTime } from 'luxon'

export const getCurrentTime = () => DateTime.local()

export const getNowString = () => exports.getCurrentTime().toFormat('yyyy/LL/dd TT.u')
