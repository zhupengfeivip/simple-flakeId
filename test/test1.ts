import { SnowflakeIdv1 } from "../index"

let gen1 = new SnowflakeIdv1({ workerId: 1 })
let id1 = gen1.NextId()
console.log(`ID:${id1} length：${id1.toString().length}`)


