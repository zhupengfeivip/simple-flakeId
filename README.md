# simple-flakeid

[![NPM version](https://img.shields.io/npm/v/simple-flakeid.svg)](https://www.npmjs.com/package/simple-flakeid) [![jaywcjlove/sb](https://jaywcjlove.github.io/sb/lang/chinese.svg)](README.cn.md)

more demo:[https://github.com/zhupengfeivip/simple-flakeId-demo.git](https://github.com/zhupengfeivip/simple-flakeId-demo.git)


```sh
npm i simple-flakeid
```

## js demo

```js
var genid = require('simple-flakeid').genid

let gen1 = new genid({ WorkerId: 1 })
for (let i = 0; i < 10; i++) {
    let id1 = gen1.NextId()
    console.log(`${i} ID:${id1} ${typeof id1} 长度：${id1.toString().length}`)
}

$ node js/demo1.js 
0 ID:235100305752133 number 长度：15
1 ID:235100305772613 number 长度：15
2 ID:235100305776709 number 长度：15
3 ID:235100305776710 number 长度：15
4 ID:235100305776711 number 长度：15
5 ID:235100305776712 number 长度：15
6 ID:235100305776713 number 长度：15
7 ID:235100305780805 number 长度：15
8 ID:235100305780806 number 长度：15
9 ID:235100305780807 number 长度：15






```


## ts demo

```js
import { genid } from "simple-flakeid"

let gen1 = new genid({ WorkerId: 1 })
for (let i = 0; i < 10; i++) {
    let id1 = gen1.NextId()
    console.log(`${i} ID:${id1} ${typeof id1} 长度：${id1.toString().length}`)
}

$ ts-node ts/demo1.ts 
0 ID:235099434217541 number 长度：15
1 ID:235099434225733 number 长度：15
2 ID:235099434225734 number 长度：15
3 ID:235099434225735 number 长度：15
4 ID:235099434225736 number 长度：15
5 ID:235099434229829 number 长度：15
6 ID:235099434229830 number 长度：15
7 ID:235099434229831 number 长度：15
8 ID:235099434229832 number 长度：15
9 ID:235099434233925 number 长度：15






```


```


## Introduction

The core algorithm copyright belongs to [yitter](https://github.com/yitter)

more:[https://github.com/yitter/IdGenerator](https://github.com/yitter/IdGenerator)



