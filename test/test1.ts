import { genid } from "../index"

const WorkerId = process.env.WorkerId == undefined ? 1 : process.env.WorkerId

let gen1 = new genid({ WorkerId: WorkerId })
let id1 = gen1.NextId()
console.log(`ID:${id1} length：${id1.toString().length}`)