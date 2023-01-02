import { generateUnid } from './base'
export const userInjectionKey = Symbol()
export const userInfo = {
  avatar: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  username: 'admin',
  tel: 1810000000,
  live: 'shanghai',
  address: 'ShangHai China',
  remark: 'https://zos.alipayobjects.com',
  token: generateUnid()
}
