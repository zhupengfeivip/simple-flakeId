import { SnowflakeIdv1 } from '../src/snowflakeIdv1'

let gen1 = new SnowflakeIdv1({ workerId: 1, seqBitLength: 10 })
console.time("Test Run")
const HSet = new Set()
for (let index = 0; index < 500000; index++) {
    HSet.add(gen1.NextId())
}
console.timeEnd("Test Run")
console.log([...HSet.values()].join("\n"))
console.log(HSet.size)