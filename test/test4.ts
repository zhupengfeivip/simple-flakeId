import { SnowflakeIdv1 } from "../index"

let gen1 = new SnowflakeIdv1({ workerId: 1, baseTime: 1609459200000, seqBitLength: 13 })
for (let i = 0; i < 10; i++) {
    let id1 = gen1.NextId()
    console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
}




