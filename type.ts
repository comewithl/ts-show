// 基础类型
let array: string[] = ['1', '2', `3${user.fullName}`] // 字符串数组，支持模板字符串

let unitArray: (string | number)[] = ['1', '2', `3${user.fullName}`, 1] // 联合数组，支持模板字符串

let anyArray: any[] = ['1', '2', `3${user.fullName}`, 1] // 字符串数组，支持模板字符串

let turple: [number, string] = [1, '2'] //元祖组合类型，赋值按元祖中类型顺序赋值

enum Color { Red = 1, Green = 2, Blue = 3 } // 声明一个名为Color枚举类型

function notOutput(): void {
    let unusable: void = undefined // void 只能赋值undefined 和 null
    console.log("i'm a void function")
}

let u: undefined = undefined // undefined
let n: null = null  // null

// 类型断言

let someValue: any = "im a string"

let strLength: number = (someValue as string).length


console.log(Color.Red) // output : 1