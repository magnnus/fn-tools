/**
 * @file 常用工具函数
 */

import 'core-js/es/string/pad-start';

/**
 * 数字格式化
 * @description 主要按 数字长度和四舍五入 规则转换
 * @description 省略第二个参数，则默认按 '万'（level = 10000, unit = '万‘） 转换，保留 1（precision = 1） 位小数
 * @example formatNumber(9999) -> 9999
 * @example formatNumber(10001) -> '1万'
 * @example formatNumber(14999) -> '1.5万'
 */
export function formatNumber(
  n: number,
  config = {
    level: 10000,
    precision: 1,
    unit: '万',
  },
): number | string {
  const o = +n;

  if (Number.isNaN(o)) {
    return n;
  }
  if (o < config.level) {
    return o;
  }

  const divisor = 10 * config.precision;
  // 先精确解决四舍五入，再用 toFixed
  const tmp = Math.round((o / config.level) * divisor) / divisor;
  return tmp.toFixed(config.precision) + config.unit;
}

/**
 * 限制展示的最大数字
 * @param n - 被转换的数字
 * @param max - 触发转换规则的【阀值】，默认为 99
 * @param suffix - 转换后添加的【后缀符号】，默认为 '+'
 * @returns {number | string} 转换结果
 */
export function limitMaxNumber(
  n: number,
  max = 99,
  suffix = '+',
): number | string {
  const i = +n;
  if (Number.isNaN(i)) {
    throw new Error('limitMaxNumber: 参数 n 不是有效数字');
  }
  if (i > max) {
    return `${max}${suffix}`;
  }
  return i;
}

/**
 * 去除 https?: 协议头
 * @description 后端返回的地址有时是 http 的，浏览器会提醒站点安全问题或一些业务无关的展示 Bug
 */
export function formatUrl(url?: string): string {
  if (!url) {
    return '';
  }
  return url.replace(/^https?:/, '');
}

/**
 * 为数字添加前缀 ‘0’
 * @description 省略第二个参数，则数字最长 = 2
 * @example addPre0(1) => '01'
 */
export function addPre0(num: number | string, length = 2): string {
  return num.toString().padStart(length, '0');
}

/**
 * 格式化【秒】 => 时:分:秒
 * @param {Number} data - 秒
 * @return {String} - 格式化为[<HH>:]<mm>:<ss>
 */
export function formatDuration(data: number): string {
  const seconds = Number(data);
  if (Number.isNaN(seconds) || seconds < 0) {
    throw new Error(
      'formatDuration: the `data` param must be a positive number',
    );
  }

  if (seconds < 60) {
    return `00:${addPre0(seconds)}`;
  }

  if (seconds <= 3600) {
    return [addPre0(Math.floor(seconds / 60)), addPre0(seconds % 60)].join(':');
  }

  return [
    addPre0(Math.floor(seconds / 60 / 60)),
    addPre0(Math.floor((seconds / 60) % 60)),
    addPre0((seconds % 60) % 60),
  ].join(':');
}

/**
 * 判断是否是 Server 端
 */
export function isServer(): boolean {
  return typeof window === 'undefined';
}

/**
 * 动态引入脚本
 * @param {String} src - 脚本地址
 * @returns {Promise<HTMLScriptElement>} - 创建的 script 元素
 */
export async function importScript(src: string): Promise<HTMLScriptElement> {
  if (isServer()) {
    throw new Error('importScript can NOT be used in Server');
  }
  return new Promise<HTMLScriptElement>(function (resolve, reject) {
    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    script.onload = function () {
      resolve(script);
    };
    script.onerror = function () {
      reject(script);
    };
    document.body.insertAdjacentElement('beforeend', script);
  });
}
