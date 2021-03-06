<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

*   [formatNumber][1]
    *   [Parameters][2]
    *   [Examples][3]
*   [limitMaxNumber][4]
    *   [Parameters][5]
*   [formatUrl][6]
    *   [Parameters][7]
*   [addPre0][8]
    *   [Parameters][9]
    *   [Examples][10]
*   [formatDuration][11]
    *   [Parameters][12]
*   [isServer][13]
*   [importScript][14]
    *   [Parameters][15]

## formatNumber

省略第二个参数，则默认按 '万'（level = 10000, unit = '万‘） 转换，保留 1（precision = 1） 位小数

### Parameters

*   `n` **[number][16]** 
*   `config`   (optional, default `{level:10000,precision:1,unit:'万'}`)

### Examples

```javascript
formatNumber(9999) -> 9999
```

```javascript
formatNumber(10001) -> '1万'
```

```javascript
formatNumber(14999) -> '1.5万'
```

Returns **([number][16] | [string][17])** 

## limitMaxNumber

限制展示的最大数字

### Parameters

*   `n` **[number][16]** 被转换的数字
*   `max`  触发转换规则的【阀值】，默认为 99 (optional, default `99`)
*   `suffix`  转换后添加的【后缀符号】，默认为 '+' (optional, default `'+'`)

Returns **([number][16] | [string][17])** 转换结果

## formatUrl

后端返回的地址有时是 http 的，浏览器会提醒站点安全问题或一些业务无关的展示 Bug

### Parameters

*   `url` **[string][17]?** 

Returns **[string][17]** 

## addPre0

省略第二个参数，则数字最长 = 2

### Parameters

*   `num` **([number][16] | [string][17])** 
*   `length`   (optional, default `2`)

### Examples

```javascript
addPre0(1) => '01'
```

Returns **[string][17]** 

## formatDuration

格式化【秒】 => 时:分:秒

### Parameters

*   `data` **[Number][16]** 秒

Returns **[String][17]** 格式化为\[<HH>:]<mm>:<ss>

## isServer

判断是否是 Server 端

Returns **[boolean][18]** 

## importScript

动态引入脚本

### Parameters

*   `src` **[String][17]** 脚本地址

Returns **[Promise][19]<[HTMLScriptElement][20]>** 创建的 script 元素

[1]: #formatnumber

[2]: #parameters

[3]: #examples

[4]: #limitmaxnumber

[5]: #parameters-1

[6]: #formaturl

[7]: #parameters-2

[8]: #addpre0

[9]: #parameters-3

[10]: #examples-1

[11]: #formatduration

[12]: #parameters-4

[13]: #isserver

[14]: #importscript

[15]: #parameters-5

[16]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[17]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[18]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[20]: https://developer.mozilla.org/docs/Web/API/HTMLScriptElement
