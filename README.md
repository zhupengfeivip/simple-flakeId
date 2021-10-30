# simple-flakeid

[![NPM version](https://img.shields.io/npm/v/simple-flakeid.svg)](https://www.npmjs.com/package/simple-flakeid) [![jaywcjlove/sb](https://jaywcjlove.github.io/sb/lang/chinese.svg)](README.cn.md)

more demo:[https://github.com/zhupengfeivip/simple-flakeId-demo.git](https://github.com/zhupengfeivip/simple-flakeId-demo.git)


```sh
npm i simple-flakeid
```
## api

### NextId()
If the value is smaller than the maximum value of number, the number type is displayed. If the value is larger than number, bigint is displayed

### NextNumber()
Always print number, throw error if it exceeds

### NextBigId()
Always print bigInt

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



## Introduction

The core algorithm copyright belongs to [yitter](https://github.com/yitter)

more:[https://github.com/yitter/IdGenerator](https://github.com/yitter/IdGenerator)

