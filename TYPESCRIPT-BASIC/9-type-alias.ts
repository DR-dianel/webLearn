// 类型别名

let sum:(x:number,y:number)=>number
const result = sum(1,2)
type PlusType = (x:number,y:number)=>number
let sum2:PlusType
const result2 = sum(2,3)

