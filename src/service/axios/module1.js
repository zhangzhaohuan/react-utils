import { get, post, deletes } from './request';
import * as CONST from './CONST'

// 初始化验证
export async function initGeetest() {
  const url = `/api/${CONST.SECURITY}/captcha/display`;
  const rs = await get(url);
  return rs || {};
}