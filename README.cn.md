# simple-flakeid

![build](https://img.shields.io/badge/build-passing-success.svg)

## 介绍

核心算法版权属于 [yitter](https://github.com/yitter)

项目更多介绍参照：https://github.com/yitter/idgenerator

代码贡献者：zhupengfei（在 bubao 布宝 的JS基础上改版，感谢bubao 布宝）

js Number 类型最大数值：9007199254740992(16位)，

在JS中没有bigint类型，所以建议将ID控制在16位以内，统一使用number类型


执行测试代码

```bash
ts-node test/test1.ts
```



```sh
npm i simple-flakeid
```

## js demo

```js
var genid = require('simple-flakeid').genid

let gen1 = new genid({ WorkerId: 1 })
for (let i = 0; i < 10; i++) {
    let id1 = gen1.NextId()
    console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
}
```
output:
```bash
$ node js/demo1.js 
0 ID:235100305752133 number length：15
1 ID:235100305772613 number length：15
2 ID:235100305776709 number length：15
3 ID:235100305776710 number length：15
4 ID:235100305776711 number length：15
5 ID:235100305776712 number length：15
6 ID:235100305776713 number length：15
7 ID:235100305780805 number length：15
8 ID:235100305780806 number length：15
9 ID:235100305780807 number length：15
```

```js
var genid = require('simple-flakeid').genid

let gen1 = new genid({ WorkerId: 1 })
for (let i = 0; i < 10; i++) {
    let id1 = gen1.NextBigId()
    console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
}
```
output:
```bash
$ node js/demo2.js
0 ID:235104756604997 bigint length：15
1 ID:235104756629573 bigint length：15
2 ID:235104756629574 bigint length：15
3 ID:235104756629575 bigint length：15
4 ID:235104756629576 bigint length：15
5 ID:235104756629577 bigint length：15
6 ID:235104756633669 bigint length：15
7 ID:235104756633670 bigint length：15
8 ID:235104756633671 bigint length：15
9 ID:235104756633672 bigint length：15
```


## ts demo

```js
import { genid } from "simple-flakeid"

let gen1 = new genid({ WorkerId: 1 })
for (let i = 0; i < 10; i++) {
    let id1 = gen1.NextId()
    console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
}
```
output:
```bash
$ ts-node ts/demo1.ts 
0 ID:235099434217541 number length：15
1 ID:235099434225733 number length：15
2 ID:235099434225734 number length：15
3 ID:235099434225735 number length：15
4 ID:235099434225736 number length：15
5 ID:235099434229829 number length：15
6 ID:235099434229830 number length：15
7 ID:235099434229831 number length：15
8 ID:235099434229832 number length：15
9 ID:235099434233925 number length：15
```


## 其他帮助

在mysql中int类型最大长度是10位数字，由于本算法默认生成的是15位，最短也是11位，所以在mysql中需要使用bigint数据类型


