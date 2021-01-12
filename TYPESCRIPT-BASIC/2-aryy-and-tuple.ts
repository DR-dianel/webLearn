// 数组
let arrOfNumber:number[] = [1,2,3]
arrOfNumber.push(3)

function test(){
    console.log(arguments)
    arguments[0]
}

// 元组 不同数据类型(限定了不同数据类型)
let user:[string,number] = ['LIKE',123]
user.push('23')// 只能 push 定义过的联合类型
