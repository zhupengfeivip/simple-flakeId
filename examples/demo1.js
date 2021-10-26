var snowflakeIdv1 = require('./../index')

let gen1 = new snowflakeIdv1({ WorkerId: 1 })
let id1 = gen1.NextId()
console.log(`ID:${id1} 长度：${id1.toString().length}`)