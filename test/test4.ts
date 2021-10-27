import { genid } from "../index"

const WorkerId = process.env.WorkerId == undefined ? 1 : process.env.WorkerId

let gen1 = new genid({ WorkerId: WorkerId, SeqBitLength: 10 })
for (let i = 0; i < 10; i++) {
    let id1 = gen1.NextId()
    console.log(`${i} ID:${id1} ${typeof id1} length：${id1.toString().length}`)
}
