let myAdd: (x: number, y: number) => string = function (x: number, y: number): string {
    return x + y + ''
};

myAdd(1, 2)

// 参数类型和个数匹配，就不在乎参数名是否正确，返回值类型必须相同  => ** =function():**{}，后一个函数返回类型指定可以缺省
let myAdd2: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y
}

// 理下上述函数声明逐层变形

let myAddFirst = (x: number, y: number): number => { return x + y }

let myAddSecondHaveDeclare: (baseValue: number, increment: number) => number = function (x: number, y: number): number { return x + y }

let myAddSecondHaveDeclareBindThis: (baseValue: number, increment: number) => number = (x: number, y: number) => { return x + y }

// 可选参数

function buildName(firstName: string, secondName?: string) {
    return firstName + secondName
}

// 默认参数 其类型为其默认值的类型

function buildNameHaveDefault(firstName: string, secondName = "Smith") {
    return firstName + secondName
}

buildNameHaveDefault("Michael")

// 剩余参数 ，js 可以通过arguments来访问所有入参


function buildNameRestArgument(firstName: string, ...restOfName: string[]) {
    return firstName + restOfName.join(" ")
}

buildNameRestArgument("Michael", "Bob", "Lebron")


/**
 * this使用
 * 
 * 1、在ts strict的模式下 this默认是undefined，不是window
 * 2、
 *  */







